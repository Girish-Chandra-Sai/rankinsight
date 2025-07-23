const express = require('express');
const iitRouter = express.Router();
const mongoose = require('mongoose');
const IITCategory = require('../models/instituteType');

// IIT/IIIT Search Route
iitRouter.get('/search', async (req, res) => {
    const { 
        gender = 'GENDER_NEUTRAL', 
        category, 
        courses, 
        instituteType,
        maxRank 
    } = req.query;
    
    // Input validation
    if (!category || !courses) {
        return res.status(400).json({ 
            message: 'Missing required parameters', 
            requiredParams: ['category', 'courses'],
            optionalParams: ['gender', 'instituteType', 'maxRank']
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
            if (char === '"' || char === "'") {
                inQuotes = !inQuotes;
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

    // Function to get rank data with appropriate fallbacks for gender
    function getRankDataWithGenderFallback(program, requestedGender) {
        let rankData = program.genderRanks[requestedGender];
        let currentGender = requestedGender;
        
        // Handle female_only fallback to gender_neutral if no data found
        if (!rankData && requestedGender === 'FEMALE_ONLY') {
            rankData = program.genderRanks['GENDER_NEUTRAL'];
            currentGender = 'GENDER_NEUTRAL';
        }

        return { rankData, currentGender };
    }

    try {
        // Convert courses to an array and normalize
        const coursesList = parseCourses(courses);

        // Find category document with exact or case-insensitive match
        const categoryDoc = await IITCategory.findOne({
            instituteType: instituteType || { $exists: true }
        });

        // Handle category not found
        if (!categoryDoc) {
            const availableCategories = await IITCategory.distinct('categories.category');
            return res.status(404).json({ 
                message: 'Category not found',
                searchedCategory: category,
                availableCategories 
            });
        }

        // Define category hierarchies
        const specialCategories = ['EWS', 'SC', 'ST', 'OBC_NCL'];
        const specialCategories2 = ['EWS (PWD)', 'SC (PWD)', 'ST (PWD)', 'OBC-NCL (PWD)', 'OPEN (PWD)'];

        // Map PwD categories to their non-PwD equivalents
        const pwdToNonPwdMap = {
            'EWS (PWD)': 'EWS',
            'SC (PWD)': 'SC',
            'ST (PWD)': 'ST',
            'OBC-NCL (PWD)': 'OBC-NCL',
            'OPEN (PWD)': 'OPEN'
        };

        // Check if current category is a PwD category
        console.log(category, 'category');
        const isPwDCategory = specialCategories2.includes(category.toUpperCase());
        const nonPwDEquivalent = isPwDCategory ? 
            pwdToNonPwdMap[Object.keys(pwdToNonPwdMap).find(k => k.toUpperCase() === category.toUpperCase())] : 
            null;
        const isOpenPwDCategory = category.toUpperCase() === 'OPEN (PWD)';

        // Set up for the final results and tracking
        const finalResults = [];
        const processedCourses = new Set(); // Track unique institute-course combinations

        // First search: Look for exact category match
        const matchedCategory = categoryDoc.categories.find(cat => 
            cat.category.toUpperCase() === category.toUpperCase()
        );

        // If we found the matched category, search within it
        if (matchedCategory) {
            matchedCategory.institutes.forEach(institute => {
                institute.programs.forEach(program => {
                    const matchedCourse = coursesList.find(course => 
                        program.name === course
                    );
                    
                    if (matchedCourse) {
                        const { rankData, currentGender } = getRankDataWithGenderFallback(program, gender);
            
                        if (rankData) {
                            const key = `${institute.name}-${program.name}`;
                            
                            // Only add if not already processed
                            if (!processedCourses.has(key)) {
                                processedCourses.add(key);
                                
                                finalResults.push({
                                    name: institute.name,
                                    courseName: program.name,
                                    gender: currentGender,
                                    category: category,
                                    rankData: {
                                        openingRank: Number(rankData.openingRank),
                                        closingRank: Number(rankData.closingRank)
                                    }
                                });
                            }
                        }
                    }
                });
            });
        }
        console.log(isPwDCategory, 'isPwDCategory');
        console.log(nonPwDEquivalent, 'nonPwDEquivalent');
        // For PwD categories, if data not found for some courses, search in non-PwD equivalent
        if (isPwDCategory && nonPwDEquivalent) {
            const nonPwDCategory = categoryDoc.categories.find(cat => 
                cat.category.toUpperCase() === nonPwDEquivalent.toUpperCase()
            );

            if (nonPwDCategory) {
                nonPwDCategory.institutes.forEach(institute => {
                    institute.programs.forEach(program => {
                        const matchedCourse = coursesList.find(course => 
                            program.name === course
                        );
                        
                        if (matchedCourse) {
                            const key = `${institute.name}-${program.name}`;
                            console.log(processedCourses.has(key), 'processedCourses.has(key)');
                            
                            // Skip if already processed
                            if (processedCourses.has(key)) {
                                return;
                            }
                            
                            
                            const { rankData, currentGender } = getRankDataWithGenderFallback(program, gender);
                            console.log(rankData, 'rankData');
                
                            if (rankData) {
                                processedCourses.add(key);
                                
                                finalResults.push({
                                    name: institute.name,
                                    courseName: program.name,
                                    gender: currentGender,
                                    category: nonPwDEquivalent, // Use the non-PwD category name
                                    rankData: {
                                        openingRank: Number(rankData.openingRank),
                                        closingRank: Number(rankData.closingRank)
                                    }
                                });
                            }
                        }
                    });
                });
            }
        }

        // For all special categories (both PwD and non-PwD), also check in OPEN category
        // OPEN-PwD is a special case - it should first check OPEN-PwD, then OPEN
        const isSpecialCategory = specialCategories.includes(category.toUpperCase()) || 
                                 (isPwDCategory && category.toUpperCase() !== 'OPEN-PWD');
        
        // Add OPEN category results for special categories (not for OPEN-PwD)
        if (isSpecialCategory) {
            const openCategory = categoryDoc.categories.find(cat => 
                cat.category.toUpperCase() === 'OPEN'
            );

            // Look for open category data if OPEN category exists
            if (openCategory) {
                openCategory.institutes.forEach(institute => {
                    institute.programs.forEach(program => {
                        const matchedCourse = coursesList.find(course => 
                            program.name === course
                        );
                
                        if (matchedCourse) {
                            const key = `${institute.name}-${program.name}`;
                            
                            // Skip if already processed
                            if (processedCourses.has(key)) {
                                return;
                            }
                            
                            const { rankData, currentGender } = getRankDataWithGenderFallback(program, gender);
                
                            if (rankData) {
                                processedCourses.add(key);
                                
                                finalResults.push({
                                    name: institute.name,
                                    courseName: program.name,
                                    gender: currentGender,
                                    category: 'OPEN',
                                    rankData: {
                                        openingRank: Number(rankData.openingRank),
                                        closingRank: Number(rankData.closingRank)
                                    }
                                });
                            }
                        }
                    });
                });
            }
        }
        
        // Filter by maxRank if provided
        let filteredResults = finalResults;
        if (maxRank && !isNaN(parseInt(maxRank))) {
            const maxRankNum = parseInt(maxRank);
            filteredResults = finalResults.filter(result => 
                result.rankData.closingRank <= maxRankNum
            );
        }
        
        // Sorting results by closing rank - ensure numeric sorting
        const sortedColleges = filteredResults.sort((a, b) => 
            Number(a.rankData.closingRank) - Number(b.rankData.closingRank)
        );
        
        // Enhanced response with metadata
        res.json({
            totalResults: sortedColleges.length,
            colleges: sortedColleges.map(college => ({
                collegeName: college.name,
                courseName: college.courseName,
                gender: college.gender,
                category: college.category,
                openingRank: Number(college.rankData.openingRank),
                closingRank: Number(college.rankData.closingRank)
            })),
            searchParams: {
                gender,
                category,
                courses: coursesList,
                instituteType,
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

module.exports = iitRouter;