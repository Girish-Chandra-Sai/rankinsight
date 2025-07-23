// Routes for NITs
const express = require('express');
const nitRouter = express.Router();
const mongoose = require('mongoose');
const NITCategory = require('../models/instituteType2');

// NIT Search Route
nitRouter.get('/search', async (req, res) => {
    const { 
        gender = 'GENDER_NEUTRAL', 
        category, 
        courses, 
        homeStateNIT = '', // New parameter from frontend
        maxRank 
    } = req.query;
    
    // Input validation
    if (!category || !courses) {
        return res.status(400).json({ 
            message: 'Missing required parameters', 
            requiredParams: ['category', 'courses'],
            optionalParams: ['gender', 'homeStateNIT', 'maxRank']
        });
    }

    function parseCourses(coursesString) {
        const courses = [];
        let currentCourse = '';
        let parenthesesLevel = 0;
        let inQuotes = false;
    
        for (let i = 0; i < coursesString.length; i++) {
            const char = coursesString[i];
    
            if (char === '(' && !inQuotes) {
                parenthesesLevel++;
            }
            if (char === ')' && !inQuotes) {
                parenthesesLevel--;
            }
    
            // Handle comma splitting only when outside parentheses
            if (char === ',' && parenthesesLevel === 0 && !inQuotes) {
                courses.push(currentCourse.trim());
                currentCourse = '';
            } else {
                currentCourse += char;
            }
        }
    
        // Add the last course
        if (currentCourse) {
            courses.push(currentCourse.trim());
        }
    
        return courses;
    }

    try {
        // Convert courses to an array and normalize
        const coursesList = parseCourses(courses);

        // Find NIT category document
        const categoryDoc = await NITCategory.findOne({
            instituteType: 'NIT'
        });

        // Handle category not found
        if (!categoryDoc) {
            return res.status(404).json({ 
                message: 'NIT data not found'
            });
        }

        // Advanced filtering logic
        const filteredResults = [];
        
        // Define category hierarchies - use uppercase for consistent comparison
        const specialCategories = ['EWS', 'SC', 'ST', 'OBC_NCL'];
        
        // Add PwD categories if needed, similar to IIT code
        const specialCategories2 = ['EWS (PWD)', 'SC (PWD)', 'ST (PWD)', 'OBC-NCL (PWD)', 'OPEN (PWD)'];
        
        // Map PwD categories to their non-PwD equivalents
        const pwdToNonPwdMap = {
            'EWS (PWD)': 'EWS',
            'SC (PWD)': 'SC',
            'ST (PWD)': 'ST',
            'OBC-NCL (PWD)': 'OBC-NCL',
            'OPEN (PWD)': 'OPEN'
        };

        // Convert category to uppercase for consistent comparison
        const categoryUpper = category.toUpperCase();
        
        // Check if current category is a PwD category
        console.log(category, 'category');
        const isPwDCategory = specialCategories2.includes(categoryUpper);
        const nonPwDEquivalent = isPwDCategory ? 
            pwdToNonPwdMap[Object.keys(pwdToNonPwdMap).find(k => k.toUpperCase() === categoryUpper)] : 
            null;
        const isOpenPwDCategory = categoryUpper === 'OPEN (PWD)';

        // Find the matched category
        const matchedCategory = categoryDoc.categories.find(cat => 
            cat.category.toUpperCase() === categoryUpper
        );

        // Ensure matched category exists
        if (!matchedCategory) {
            return res.status(404).json({ 
                message: 'No institutes found for the specified category',
                category 
            });
        }
        
        // Temporary storage for special categories
        const tempResults = [];

        // Track which courses/institutes have data for special handling
        const coursesWithData = new Set();

        matchedCategory.institutes.forEach(institute => {
            const stateToUse = (homeStateNIT && institute.name === homeStateNIT) ? 'HS' : 'OS';

            institute.programs.forEach(program => {
                // Check if the program matches any of the requested courses
                const matchedCourse = coursesList.find(course => 
                    program.name === course ? course : undefined
                );

                if (matchedCourse) {
                    // Try to get rank data for the requested gender
                    let rankData = program[stateToUse]?.[gender];
                    let currentGender = gender;
                    let currentState = stateToUse;
                    
                    // Handle female_only fallback to gender_neutral if no data found
                    if (!rankData && gender === 'FEMALE_ONLY') {
                        rankData = program[stateToUse]?.['GENDER_NEUTRAL'];
                        currentGender = 'GENDER_NEUTRAL';
                    }

                    if (rankData) {
                        const resultEntry = {
                            name: institute.name,
                            courseName: program.name,
                            gender: currentGender,
                            category: category,
                            state: currentState,
                            rankData: {
                                openingRank: rankData.openingRank,
                                closingRank: rankData.closingRank
                            }
                        };

                        // For special categories or specific gender searches, add to temp
                        if (specialCategories.includes(categoryUpper) || isPwDCategory) {
                            tempResults.push(resultEntry);
                            // Track this course/institute combination
                            const key = `${institute.name}-${program.name}`;
                            coursesWithData.add(key);
                        } else {
                            filteredResults.push(resultEntry);
                        }
                    }
                }
            });
        });

        // Handle PwD categories similar to IIT code
        if (isPwDCategory && nonPwDEquivalent) {
            const nonPwDCategory = categoryDoc.categories.find(cat => 
                cat.category.toUpperCase() === nonPwDEquivalent.toUpperCase()
            );

            if (nonPwDCategory) {
                nonPwDCategory.institutes.forEach(institute => {
                    const stateToUse = (homeStateNIT && institute.name === homeStateNIT) ? 'HS' : 'OS';
                    
                    institute.programs.forEach(program => {
                        const matchedCourse = coursesList.find(course => 
                            program.name === course
                        );
                        
                        if (matchedCourse) {
                            const key = `${institute.name}-${program.name}`;
                            
                            // Skip if already processed
                            if (coursesWithData.has(key)) {
                                return;
                            }
                            
                            let rankData = program[stateToUse]?.[gender];
                            let currentGender = gender;
                            let currentState = stateToUse;
                            
                            // Handle female_only fallback to gender_neutral if no data found
                            if (!rankData && gender === 'FEMALE_ONLY') {
                                rankData = program[stateToUse]?.['GENDER_NEUTRAL'];
                                currentGender = 'GENDER_NEUTRAL';
                            }
                
                            if (rankData) {
                                coursesWithData.add(key);
                                
                                tempResults.push({
                                    name: institute.name,
                                    courseName: program.name,
                                    gender: currentGender,
                                    category: nonPwDEquivalent, // Use the non-PwD category name
                                    state: currentState,
                                    rankData: {
                                        openingRank: rankData.openingRank,
                                        closingRank: rankData.closingRank
                                    }
                                });
                            }
                        }
                    });
                });
            }
        }

        // For special categories, fetch and merge open category data
        if (specialCategories.includes(categoryUpper) || isPwDCategory) {
            const openCategory = categoryDoc.categories.find(cat => 
                cat.category.toUpperCase() === 'OPEN'
            );

            // Look for open category data if OPEN category exists
            if (openCategory) {
                const openCategoryMatches = [];
                openCategory.institutes.forEach(institute => {
                    // Determine whether to use HS or OS data for this institute
                    const stateToUse = (homeStateNIT && institute.name === homeStateNIT) ? 'HS' : 'OS';

                    institute.programs.forEach(program => {
                        const matchedCourse = coursesList.find(course => 
                            program.name === course ? course : undefined
                        );
                
                        if (matchedCourse) {
                            // Use the same gender that was requested in the query
                            let openRankData = program[stateToUse]?.[gender];
                            let currentGender = gender;
                            let currentState = stateToUse;
                            
                            // If requested gender data isn't available, fallback to GENDER_NEUTRAL
                            if (!openRankData && gender === 'FEMALE_ONLY') {
                                openRankData = program[stateToUse]?.['GENDER_NEUTRAL'];
                                currentGender = 'GENDER_NEUTRAL';
                            }
                            
                            // If HS data is not available, fallback to OS data with same gender first
                            if (!openRankData && stateToUse === 'HS') {
                                openRankData = program['OS']?.[gender];
                                currentState = 'OS';
                                
                                // If OS data with requested gender isn't available, try GENDER_NEUTRAL
                                if (!openRankData && gender === 'FEMALE_ONLY') {
                                    openRankData = program['OS']?.['GENDER_NEUTRAL'];
                                    currentGender = 'GENDER_NEUTRAL';
                                }
                            }
                    
                            if (openRankData) {
                                // Check if this institute and course is not already in temp results
                                const key = `${institute.name}-${program.name}`;
                                const isNotInTemp = !coursesWithData.has(key);

                                if (isNotInTemp) {
                                    openCategoryMatches.push({
                                        name: institute.name,
                                        courseName: program.name,
                                        gender: currentGender,
                                        category: 'OPEN',
                                        state: currentState,
                                        rankData: {
                                            openingRank: openRankData.openingRank,
                                            closingRank: openRankData.closingRank
                                        }
                                    });
                                }
                            }
                        }
                    });
                });

                // Merge temp results with open category matches
                filteredResults.push(...tempResults, ...openCategoryMatches);
            } else {
                // If no OPEN category found, just use temp results
                filteredResults.push(...tempResults);
            }
        } else {
            // For non-special categories, just use the existing filtered results
            filteredResults.push(...tempResults);
        }
        
        // Filter by maxRank if provided
        let rankedResults = filteredResults;
        if (maxRank && !isNaN(parseInt(maxRank))) {
            const maxRankNum = parseInt(maxRank);
            rankedResults = filteredResults.filter(result => 
                result.rankData.closingRank <= maxRankNum
            );
        }
        
        // Sorting results by closing rank
        const sortedColleges = rankedResults.sort((a, b) => 
            a.rankData.closingRank - b.rankData.closingRank
        );
        
        // Enhanced response with metadata
        res.json({
            totalResults: sortedColleges.length,
            colleges: sortedColleges.map(college => ({
                collegeName: college.name,
                courseName: college.courseName,
                gender: college.gender || gender,
                category: college.category || category,
                state: college.state,  // Include state in response
                openingRank: college.rankData.openingRank,
                closingRank: college.rankData.closingRank
            })),
            searchParams: {
                gender,
                category,
                courses: coursesList,
                homeStateNIT,
                maxRank
            }
        });
    } catch (error) {
        console.error('College Search Error:', error);
        res.status(500).json({ 
            message: 'Internal server error',
            error: process.env.NODE_ENV === 'production' 
                ? 'An unexpected error occurred' 
                : error.message
        });
    }
});

module.exports = nitRouter;