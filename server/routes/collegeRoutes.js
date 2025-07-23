const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Category = require('../models/instituteType');

// Search colleges API with optimized filtering
router.get('/search', async (req, res) => {
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
        // Use a combination of regex and careful parsing
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
        console.log(courses);

        // Convert courses to an array and normalize
        const coursesList = parseCourses(courses);

        console.log(coursesList);

        // Find category document with exact or case-insensitive match

        console.log(category);

        const categoryDoc = await Category.findOne({
            instituteType: instituteType || { $exists: true }
        });

        // Handle category not found
        if (!categoryDoc) {
            const availableCategories = await Category.distinct('categories.category');
            return res.status(404).json({ 
                message: 'Category not found',
                searchedCategory: category,
                availableCategories 
            });
        }

        // Advanced filtering logic
        const filteredResults = [];

        // Find the matched category
        const matchedCategory = categoryDoc.categories.find(cat => 
            cat.category.toUpperCase() === category.toUpperCase()
        );


        // Ensure matched category exists
        if (!matchedCategory) {
            return res.status(404).json({ 
                message: 'No institutes found for the specified category',
                category 
            });
        }

        
        matchedCategory.institutes.forEach(institute => {
            institute.programs.forEach(program => {
                
                const matchedCourse = coursesList.find(course => {
                    return program.name === course?course:undefined;
                });

                console.log(matchedCourse);
        
                if (matchedCourse) {
                    const rankData = program.genderRanks[gender];
                    console.log(rankData);
        
                    if (rankData) {
                        filteredResults.push({
                            name: institute.name,
                            courseName: program.name,
                            rankData: {
                                openingRank: rankData.openingRank,
                                closingRank: rankData.closingRank
                            }
                        });
                    }
                }
            });
        });

        
        
        // Sorting results by closing rank
        const sortedColleges = filteredResults.sort((a, b) => 
            a.rankData.closingRank - b.rankData.closingRank
        );
        
        // Enhanced response with metadata
        res.json({
            totalResults: sortedColleges.length,
            colleges: sortedColleges.map(college => ({
                collegeName: college.name,
                courseName: college.courseName,
                openingRank: college.rankData.openingRank,
                closingRank: college.rankData.closingRank
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
        
        // Route to get available categories and institute types
        router.get('/filters', async (req, res) => {
            try {
                // Get unique categories
                const categoriesResult = await Category.aggregate([
                    { $unwind: '$categories' },
                    { $group: { _id: null, categories: { $addToSet: '$categories.category' } } }
                ]);
        
                // Get unique institute types
                const instituteTypes = await Category.distinct('instituteType');
                
                res.json({
                    categories: categoriesResult[0]?.categories || [],
                    instituteTypes,
                    genderOptions: ['GENDER_NEUTRAL', 'FEMALE_ONLY']
                });
            } catch (error) {
                res.status(500).json({ 
                    message: 'Error fetching filter options',
                    error: error.message 
                });
            }
        });
        
        // Additional route for getting detailed institute information
        router.get('/institute-details', async (req, res) => {
            const { name, instituteType } = req.query;
        
            if (!name) {
                return res.status(400).json({ message: 'Institute name is required' });
            }
        
            try {
                const instituteDetails = await Category.findOne(
                    { 
                        instituteType,
                        'categories.institutes.name': { $regex: new RegExp(name, 'i') }
                    },
                    { 
                        'categories.$': 1 
                    }
                );
        
                if (!instituteDetails) {
                    return res.status(404).json({ message: 'Institute not found' });
                }
        
                const institute = instituteDetails.categories[0].institutes.find(inst => 
                    inst.name.toLowerCase() === name.toLowerCase()
                );
        
                res.json(institute);
            } catch (error) {
                res.status(500).json({ 
                    message: 'Error fetching institute details',
                    error: error.message 
                });
            }
        });
        
        module.exports = router;