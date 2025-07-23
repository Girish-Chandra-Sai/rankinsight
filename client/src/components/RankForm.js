import React from "react";
import axios from "axios";
import './RankForm.css'; 
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";


const iitCourses = [
    "Aerospace Engineering (4 Years, Bachelor of Technology)",
    "Aerospace Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))",
    "Agricultural and Food Engineering (4 Years, Bachelor of Technology)",
    "Applied Geology (4 Years, Bachelor of Science)",
    "Applied Geology (5 Years, Integrated Master of Technology)",
    "Applied Geophysics (5 Years, Integrated Master of Technology)",
    "Architecture (5 Years, Bachelor of Architecture)",
    "Artificial Intelligence (4 Years, Bachelor of Technology)",
    "Artificial Intelligence and Data Analytics (4 Years, Bachelor of Technology)",
    "Artificial Intelligence and Data Engineering (4 Years, Bachelor of Technology)",
    "Artificial Intelligence and Data Science (4 Years, Bachelor of Technology)",
    "B. Tech in CE. - M. Tech. in Geotechnical Engineering (5 Years, B.Tech. + M.Tech./MS (Dual Degree))",
    "B. Tech in CE. - M. Tech. in Structural Engineering (5 Years, B.Tech. + M.Tech./MS (Dual Degree))",
    "B. Tech. (CSE) and M.Tech in CSE (5 Years, B.Tech. + M.Tech./MS (Dual Degree))",
    "B. Tech. (ECE) -M. Tech. in VLSI (5 Years, B.Tech. + M.Tech./MS (Dual Degree))",
    "B. Tech. (EEE)-M. Tech. in (Power &. Control) (5 Years, B.Tech. + M.Tech./MS (Dual Degree))",
    "B. Tech. (ME) - M. Tech. in Mechatronics (5 Years, B.Tech. + M.Tech./MS (Dual Degree))",
    "B. Tech. (Mathematics & Computing) M. Tech. in (Mathematics & Computing) (5 Years, B.Tech. + M.Tech./MS (Dual Degree))",
    "B.Tech (Artificial Intelligence and Data Science) - MBA in Digital Business Management (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))",
    "B.Tech (Chemical Engineering) - MBA in Hospital and Health Care Management (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))",
    "B.Tech (Chemical Science and Technology) - MBA in Hospital and Health Care Management (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))",
    "B.Tech (Civil Engineering) - MBA (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))",
    "B.Tech (Computer Science and Engineering) - MBA in Digital Business Management (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))",
    "B.Tech (Electrical and Electronics Engineering) - MBA (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))",
    "B.Tech (Electronics and Communication Engineering) - MBA in Hospital and Healthcare Management (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))",
    "B.Tech (Engineering Physics) - MBA (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))",
    "B.Tech (Mathematics and Computing) - MBA in Digital Business Management (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))",
    "B.Tech (Mechanical Engineering) - MBA (IIM Mumbai) (5 Years, Bachelor of Technology and MBA (Dual Degree))",
    "B.Tech (Metallurgical and Materials Engineering) - MBA (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))",
    "B.Tech in General Engineering (4 Years, Bachelor of Technology)",
    "B.Tech in Materials Science and Engineering (4 Years, Bachelor of Technology)",
    "B.Tech in Mathematics and Computing (4 Years, Bachelor of Technology)",
    "B.Tech in Microelectronics & VLSI (4 Years, Bachelor of Technology)",
    "B.Tech. in Electronics and Communication Engineering and M.Tech. in Communication Systems (5 Years, Bachelor and Master of Technology (Dual Degree))",
    "BS in Chemical Sciences (4 Years, Bachelor of Science)",
    "BS in Economics with MBA (IIM Bodh Gaya) (5 Years, Bachelor of Science and MBA (Dual Degree))",
    "BS in Mathematics (4 Years, Bachelor of Science)",
    "Bio Engineering (4 Years, Bachelor of Technology)",
    "Biochemical Engineering with M.Tech. in Biochemical Engineering and Biotechnology (5 Years, Bachelor and Master of Technology (Dual Degree))",
    "Bioengineering with M.Tech in Biomedical Technology (5 Years, Bachelor and Master of Technology (Dual Degree))",
    "Biological Engineering (4 Years, Bachelor of Technology)",
    "Biological Science (4 Years, Bachelor of Science)",
    "Biological Sciences and Bioengineering (4 Years, Bachelor of Technology)",
    "Biomedical Engineering (4 Years, Bachelor of Technology)",
    "Biosciences and Bioengineering (4 Years, Bachelor of Technology)",
    "Biotechnology and Biochemical Engineering (4 Years, Bachelor of Technology)",
    "Biotechnology and Bioinformatics (4 Years, Bachelor of Technology)",
    "Ceramic Engineering (4 Years, Bachelor of Technology)",
    "Ceramic Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))",
    "Chemical Engineering (4 Years, Bachelor of Technology)",
    "Chemical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))",
    "Chemical Science and Technology (4 Years, Bachelor of Technology)",
    "Chemical Sciences (5 Years, Bachelor of Science and Master of Science (Dual Degree))",
    "Chemical and Biochemical Engineering (4 Years, Bachelor of Technology)",
    "Chemistry (4 Years, Bachelor of Science)",
    "Chemistry with Specialization (4 Years, Bachelor of Science)",
    "Civil Engineering (4 Years, Bachelor of Technology)",
    "Civil Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))",
    "Civil and Infrastructure Engineering (4 Years, Bachelor of Technology)",
    "Computational Engineering (4 Years, Bachelor of Technology)",
    "Computer Science and Engineering (4 Years, Bachelor of Technology)",
    "Computer Science and Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))",
    "Data Science and Artificial Intelligence (4 Years, Bachelor of Technology)",
    "Data Science and Engineering (4 Years, Bachelor of Technology)",
    "Earth Sciences (4 Years, Bachelor of Science)",
    "Economics (4 Years, Bachelor of Science)",
    "Economics (5 Years, Bachelor of Science and Master of Science (Dual Degree))",
    "Electrical Engineering (4 Years, Bachelor of Technology)",
    "Electrical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))",
    "Electrical Engineering (IC Design and Technology) (4 Years, Bachelor of Technology)",
    "Electrical Engineering (Power and Automation) (4 Years, Bachelor of Technology)",
    "Electrical Engineering with M.Tech. in Power Electronics (5 Years, Bachelor and Master of Technology (Dual Degree))",
    "Electrical and Electronics Engineering (4 Years, Bachelor of Technology)",
    "Electronics Engineering (4 Years, Bachelor of Technology)",
    "Electronics and Communication Engineering (4 Years, Bachelor of Technology)",
    "Electronics and Electrical Communication Engineering (4 Years, Bachelor of Technology)",
    "Electronics and Electrical Engineering (4 Years, Bachelor of Technology)",
    "Energy Engineering (4 Years, Bachelor of Technology)",
    "Engineering Design (5 Years, Bachelor and Master of Technology (Dual Degree))",
    "Engineering Physics (4 Years, Bachelor of Technology)",
    "Engineering Physics (5 Years, Bachelor and Master of Technology (Dual Degree))",
    "Engineering Science (4 Years, Bachelor of Technology)",
    "Engineering and Computational Mechanics (4 Years, Bachelor of Technology)",
    "Environmental Engineering (4 Years, Bachelor of Technology)",
    "Environmental Science and Engineering (4 Years, Bachelor of Technology)",
    "Exploration Geophysics (4 Years, Bachelor of Science)",
    "Geological Technology (5 Years, Integrated Master of Technology)",
    "Geophysical Technology (5 Years, Integrated Master of Technology)",
    "Industrial Chemistry (4 Years, Bachelor of Technology)",
    "Industrial Chemistry (5 Years, Bachelor and Master of Technology (Dual Degree))",
    "Industrial Engineering and Operations Research (4 Years, Bachelor of Technology)",
    "Industrial and Systems Engineering (4 Years, Bachelor of Technology)",
    "Instrumentation Engineering (4 Years, Bachelor of Technology)",
    "Integrated Circuit Design & Technology (4 Years, Bachelor of Technology)",
    "Interdisciplinary Sciences (5 Years, Bachelor of Science and Master of Science (Dual Degree))",
    "Manufacturing Science and Engineering (4 Years, Bachelor of Technology)",
    "Materials Engineering (4 Years, Bachelor of Technology)",
    "Materials Science and Engineering (4 Years, Bachelor of Technology)",
    "Materials Science and Metallurgical Engineering (4 Years, Bachelor of Technology)",
    "Materials Science and Technology (5 Years, Bachelor and Master of Technology (Dual Degree))",
    "Mathematics & Computing (5 Years, Bachelor of Science and Master of Science (Dual Degree))",
    "Mathematics and Computing (4 Years, Bachelor of Science)",
    "Mathematics and Computing (4 Years, Bachelor of Technology)",
    "Mathematics and Computing (5 Years, Bachelor and Master of Technology (Dual Degree))",
    "Mathematics and Scientific Computing (4 Years, Bachelor of Science)",
    "Mechanical Engineering (4 Years, Bachelor of Technology)",
    "Mechanical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))",
    "Mechatronics Engineering (4 Years, Bachelor of Technology)",
    "Metallurgical Engineering (4 Years, Bachelor of Technology)",
    "Metallurgical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))",
    "Metallurgical Engineering and Materials Science (4 Years, Bachelor of Technology)",
    "Metallurgical and Materials Engineering (4 Years, Bachelor of Technology)",
    "Mineral and Metallurgical Engineering (4 Years, Bachelor of Technology)",
    "Mining Engineering (4 Years, Bachelor of Technology)",
    "Mining Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))",
    "Mining Machinery Engineering (4 Years, Bachelor of Technology)",
    "Naval Architecture and Ocean Engineering (4 Years, Bachelor of Technology)",
    "Ocean Engineering and Naval Architecture (4 Years, Bachelor of Technology)",
    "Petroleum Engineering (4 Years, Bachelor of Technology)",
    "Pharmaceutical Engineering & Technology (4 Years, Bachelor of Technology)",
    "Pharmaceutical Engineering & Technology (5 Years, Bachelor and Master of Technology (Dual Degree))",
    "Physics (4 Years, Bachelor of Science)",
    "Physics (5 Years, Bachelor of Science and Master of Science (Dual Degree))",
    "Physics with Specialization (4 Years, Bachelor of Science)",
    "Production and Industrial Engineering (4 Years, Bachelor of Technology)",
    "Space Sciences and Engineering (4 Years, Bachelor of Technology)",
    "Statistics and Data Science (4 Years, Bachelor of Science)",
    "Textile Technology (4 Years, Bachelor of Technology)"
  ];
const iiitCourses = [
    "Artificial Intelligence and Data Engineering (4 Years, Bachelor of Technology)",
"Artificial Intelligence and Data Science (4 Years, Bachelor of Technology)",
"B.Tech in Mechanical Engineering and M.Tech in AI and Robotics (5 Years, B.Tech. + M.Tech./MS (Dual Degree))",
"B.Tech. in Electronics and Communication Engineering and M.Tech. in Communication Systems (5 Years, Bachelor and Master of Technology (Dual Degree))",
"B.Tech. in Electronics and Communication Engineering and M.Tech. in VLSI Design (5 Years, Bachelor and Master of Technology (Dual Degree))",
"CSE (Data Science & Analytics) (4 Years, Bachelor of Technology)",
"Computer Science (4 Years, Bachelor of Technology)",
"Computer Science Engineering (Artificial Intelligence and Machine Learning) (4 Years, Bachelor of Technology)",
"Computer Science Engineering (Data Science and Analytics) (4 Years, Bachelor of Technology)",
"Computer Science Engineering (Human Computer Interaction and Gaming Technology) (4 Years, Bachelor of Technology)",
"Computer Science and Artificial Intelligence (4 Years, Bachelor of Technology)",
"Computer Science and Business (4 Years, Bachelor of Technology)",
"Computer Science and Engineering (4 Years, Bachelor of Technology)",
"Computer Science and Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))",
"Computer Science and Engineering (Artificial Intelligence) (4 Years, Bachelor of Technology)",
"Computer Science and Engineering (Cyber Physical System) (4 Years, Bachelor of Technology)",
"Computer Science and Engineering (Cyber Security) (4 Years, Bachelor of Technology)",
"Computer Science and Engineering (Data Science) (4 Years, Bachelor of Technology)",
"Computer Science and Engineering (with Specialization of Data Science and Artificial Intelligence) (4 Years, B. Tech / B. Tech (Hons.))",
"Computer Science and Engineering with Major in Artificial Intelligence (4 Years, Bachelor of Technology)",
"Computer Science and Engineering with specialization in Artificial Intelligence and Data Science (4 Years, Bachelor of Technology)",
"Computer Science and Engineering with specialization in Cyber Security (4 Years, Bachelor of Technology)",
"Data Science and Artificial Intelligence (4 Years, Bachelor of Technology)",
"Electrical and Electronics Engineering (4 Years, Bachelor of Technology)",
"Electronics and Communication Engineering (4 Years, Bachelor of Technology)",
"Electronics and Communication Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))",
"Electronics and Communication Engineering (Internet of Things) (4 Years, Bachelor of Technology)",
"Electronics and Communication Engineering (with Specialization of Embedded Systems and Internet of Things) (4 Years, B. Tech / B. Tech (Hons.))",
"Electronics and Communication Engineering with specialization in Design and Manufacturing (4 Years, Bachelor of Technology)",
"Electronics and Communication Engineering with specialization in VLSI and Embedded Systems (4 Years, Bachelor of Technology)",
"Information Technology (4 Years, Bachelor of Technology)",
"Information Technology-Business Informatics (4 Years, Bachelor of Technology)",
"Integrated B. Tech.(IT) and M. Tech (IT) (5 Years, Integrated B. Tech. and M. Tech.)",
"Integrated B. Tech.(IT) and MBA (5 Years, Integrated B. Tech. and MBA)",
"Mathematics and Computing (4 Years, Bachelor of Technology)",
"Mathematics and Scientific Computing (4 Years, Bachelor of Technology)",
"Mechanical Engineering (4 Years, Bachelor of Technology)",
"Mechanical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))",
"Mechanical Engineering with specialization in Design and Manufacturing (4 Years, Bachelor of Technology)",
"Mechatronics and Automation Engineering (4 Years, Bachelor of Technology)",
"Smart Manufacturing (4 Years, Bachelor of Technology)"

  ];
const nitCourses = [
    "Aerospace Engineering (4 Years, Bachelor of Technology)",
  "Architecture (5 Years, Bachelor of Architecture)",
  "Architecture and Planning (5 Years, Bachelor of Architecture)",
  "Artificial Intelligence (4 Years, Bachelor of Technology)",
  "Artificial Intelligence (5 Years, Integrated B. Tech. and M. Tech.)",
  "Artificial Intelligence and Data Engineering (4 Years, Bachelor of Technology)",
  "Artificial Intelligence and Data Science (4 Years, Bachelor of Technology)",
  "Artificial Intelligence and Machine Learning (4 Years, Bachelor of Technology)",
  "B.Tech in Mathematics and Computing (4 Years, Bachelor of Technology)",
  "Bio Medical Engineering (4 Years, Bachelor of Technology)",
  "Bio Technology (4 Years, Bachelor of Technology)",
  "Biotechnology (5 Years, Bachelor and Master of Technology (Dual Degree))",
  "Biotechnology and Biochemical Engineering (4 Years, Bachelor of Technology)",
  "Ceramic Engineering (4 Years, Bachelor of Technology)",
  "Ceramic Engineering and M.Tech Industrial Ceramic (5 Years, Bachelor and Master of Technology (Dual Degree))",
  "Chemical Engineering (4 Years, Bachelor of Technology)",
  "Chemical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))",
  "Chemical Technology (5 Years, Bachelor and Master of Technology (Dual Degree))",
  "Chemistry (5 Years, Bachelor of Science and Master of Science (Dual Degree))",
  "Chemistry (5 Years, Integrated Master of Science)",
  "Civil Engineering (4 Years, Bachelor of Technology)",
  "Civil Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))",
  "Civil Engineering with Specialization in Construction Technology and Management (5 Years, Bachelor and Master of Technology (Dual Degree))",
  "Computational Mathematics (5 Years, Bachelor and Master of Technology (Dual Degree))",
  "Computational and Data Science (4 Years, Bachelor of Technology)",
  "Computer Science and Engineering (4 Years, Bachelor of Technology)",
  "Computer Science and Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))",
  "Computer Science and Engineering with Specialization in Cyber Security (5 Years, Bachelor and Master of Technology (Dual Degree))",
  "Computer Science and Engineering with Specialization in Data Science (5 Years, Bachelor and Master of Technology (Dual Degree))",
  "Data Science and Engineering (4 Years, Bachelor of Technology)",
  "Electrical Engineering (4 Years, Bachelor of Technology)",
  "Electrical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))",
  "Electrical Engineering with Specialization In Power System Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))",
  "Electrical and Electronics Engineering (4 Years, Bachelor of Technology)",
  "Electronics and Communication Engineering (4 Years, Bachelor of Technology)",
  "Electronics and Communication Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))",
  "Electronics and Communication Engineering with Specialization in Microelectronics and VLSI System Design (5 Years, Bachelor and Master of Technology (Dual Degree))",
  "Electronics and Instrumentation Engineering (4 Years, Bachelor of Technology)",
  "Electronics and VLSI Engineering (4 Years, Bachelor of Technology)",
  "Engineering Physics (4 Years, Bachelor of Technology)",
  "Engineering Physics (5 Years, Bachelor and Master of Technology (Dual Degree))",
  "Engineering and Computational Mechanics (4 Years, Bachelor of Technology)",
  "Food Process Engineering (4 Years, Bachelor of Technology)",
  "Industrial Chemistry (4 Years, Bachelor of Technology)",
  "Industrial Design (4 Years, Bachelor of Technology)",
  "Industrial Internet of Things (4 Years, Bachelor of Technology)",
  "Industrial and Production Engineering (4 Years, Bachelor of Technology)",
  "Information Technology (4 Years, Bachelor of Technology)",
  "Instrumentation and Control Engineering (4 Years, Bachelor of Technology)",
  "Life Science (5 Years, Integrated Master of Science)",
  "Material Science and Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))",
  "Materials Engineering (4 Years, Bachelor of Technology)",
  "Materials Science and Engineering (4 Years, Bachelor of Technology)",
  "Materials Science and Metallurgical Engineering (4 Years, Bachelor of Technology)",
  "Mathematics & Computing (5 Years, Bachelor of Science and Master of Science (Dual Degree))",
  "Mathematics (5 Years, Integrated Master of Science)",
  "Mathematics and Computing (4 Years, Bachelor of Technology)",
  "Mathematics and Computing Technology (5 Years, Bachelor and Master of Technology (Dual Degree))",
  "Mathematics and Data Science (5 Years, Bachelor and Master of Technology (Dual Degree))",
  "Mechanical Engineering (4 Years, Bachelor of Technology)",
  "Mechanical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))",
  "Mechanical Engineering with Specialization in Manufacturing and Industrial Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))",
  "Mechatronics and Automation Engineering (4 Years, Bachelor of Technology)",
  "Metallurgical and Materials Engineering (4 Years, Bachelor of Technology)",
  "Metallurgical and Materials Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))",
  "Microelectronics & VLSI Engineering (4 Years, Bachelor of Technology)",
  "Mining Engineering (4 Years, Bachelor of Technology)",
  "Mining Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))",
  "Physics (5 Years, Bachelor of Science and Master of Science (Dual Degree))",
  "Physics (5 Years, Integrated Master of Science)",
  "Planning (4 Years, Bachelor of Planning)",
  "Production Engineering (4 Years, Bachelor of Technology)",
  "Production and Industrial Engineering (4 Years, Bachelor of Technology)",
  "ROBOTICS & AUTOMATION (4 Years, Bachelor of Technology)",
  "SUSTAINABLE ENERGY TECHNOLOGIES (4 Years, Bachelor of Technology)",
  "Textile Technology (4 Years, Bachelor of Technology)",
  "VLSI Design and Technology (4 Years, Bachelor of Technology)"
  ];

  const nitNames = [
    "Dr. B R Ambedkar National Institute of Technology, Jalandhar",
  "Malaviya National Institute of Technology Jaipur",
  "Maulana Azad National Institute of Technology Bhopal",
  "Motilal Nehru National Institute of Technology Allahabad",
  "National Institute of Technology Agartala",
  "National Institute of Technology Arunachal Pradesh",
  "National Institute of Technology Calicut",
  "National Institute of Technology Delhi",
  "National Institute of Technology Durgapur",
  "National Institute of Technology Goa",
  "National Institute of Technology Hamirpur",
  "National Institute of Technology Karnataka, Surathkal",
  "National Institute of Technology Meghalaya",
  "National Institute of Technology Nagaland",
  "National Institute of Technology Patna",
  "National Institute of Technology Puducherry",
  "National Institute of Technology Raipur",
  "National Institute of Technology Sikkim",
  "National Institute of Technology, Andhra Pradesh",
  "National Institute of Technology, Jamshedpur",
  "National Institute of Technology, Kurukshetra",
  "National Institute of Technology, Manipur",
  "National Institute of Technology, Mizoram",
  "National Institute of Technology, Rourkela",
  "National Institute of Technology, Silchar",
  "National Institute of Technology, Srinagar",
  "National Institute of Technology, Tiruchirappalli",
  "National Institute of Technology, Uttarakhand",
  "National Institute of Technology, Warangal",
  "Sardar Vallabhbhai National Institute of Technology, Surat",
  "Visvesvaraya National Institute of Technology, Nagpur"
];

        const RankForm = () => {
            const [instituteType, setInstituteType] = useState("");
            const [homeStateNIT, setHomeStateNIT] = useState("");
            const [gender, setGender] = useState("");
            const [category, setCategory] = useState("");
            const [ranks, setRanks] = useState({
                openRank: "",
                categoryRank: "",
                pwdRank: ""
            });
            const [selectedCourses, setSelectedCourses] = useState([]);
            const [colleges, setColleges] = useState([]);
            const [isSubmitted, setIsSubmitted] = useState(false);
            const [isLoading, setIsLoading] = useState(false);
            const [searchError, setSearchError] = useState(null);
            const [courseSearchTerm, setCourseSearchTerm] = useState("");

            const handleCourseChange = (e) => {
                const value = e.target.value;
                
                // Handle "ALL" selection
                if (value === "ALL") {
                    if (selectedCourses.includes("ALL")) {
                        // If ALL was already selected, deselect everything
                        setSelectedCourses([]);
                    } else {
                        // Select all courses for the chosen institute type
                        setSelectedCourses(["ALL", ...getCourses()]);
                    }
                    return;
                }
                
                // Handle regular course selection
                if (selectedCourses.includes(value)) {
                    // Remove the course and also remove ALL if it was selected
                    setSelectedCourses(selectedCourses.filter(course => course !== value && course !== "ALL"));
                } else {
                    // Add the course, but check if we now have all courses selected
                    const newSelection = [...selectedCourses, value].filter(course => course !== "ALL");
                    const allCourses = getCourses();
                    
                    // If all courses are now selected, add the ALL option
                    if (allCourses.every(course => newSelection.includes(course))) {
                        setSelectedCourses(["ALL", ...newSelection]);
                    } else {
                        setSelectedCourses(newSelection);
                    }
                }
            };

            const handleRankChange = (rankType, value) => {
                setRanks({
                    ...ranks,
                    [rankType]: value
                });
            };

            // Function to determine which ranks are required based on category
            const getRequiredRanks = () => {
                if (!category) return [];
                
                if (category === "OPEN") {
                    return [{ type: "openRank", label: "Open Category Rank" }];
                }
                
                if (category === "OPEN (PwD)") {
                    return [
                        { type: "pwdRank", label: "OPEN-PwD Rank" },
                        { type: "openRank", label: "Open Category Rank" }
                    ];
                }
                
                if (category.includes("PwD")) {
                    const baseCategory = category.replace(" (PwD)", "");
                    return [
                        { type: "pwdRank", label: `${category} Rank` },
                        { type: "categoryRank", label: `${baseCategory} Rank` },
                        { type: "openRank", label: "Open Category Rank" }
                    ];
                }
                
                return [
                    { type: "categoryRank", label: `${category} Rank` },
                    { type: "openRank", label: "Open Category Rank" }
                ];
            };

            // Validate if all required ranks are filled
            const validateRanks = () => {
                const requiredRanks = getRequiredRanks();
                return requiredRanks.every(rank => ranks[rank.type] !== "");
            };

            const fetchColleges = async (e) => {
                e.preventDefault();
                setIsSubmitted(true);
                setSearchError(null);

                // Validate all required fields
                if (!gender || !category || !validateRanks() || selectedCourses.length === 0 || !instituteType) {
                    setSearchError("Please select all fields, enter all required ranks, and select at least one course.");
                    return;
                }

                setIsLoading(true);

                try {
                    const endpoint = instituteType === "NIT" ? `http://localhost:5000/nit/search` : `http://localhost:5000/iit/search`;
                    
                    // Determine which rank to use based on category
                    let rankToUse;
                    if (category === "OPEN") {
                        rankToUse = Number(ranks.openRank);
                    } else if (category === "OPEN (PwD)") {
                        rankToUse = Number(ranks.pwdRank);
                    } else if (category.includes("PwD")) {
                        rankToUse = Number(ranks.pwdRank);
                    } else {
                        rankToUse = Number(ranks.categoryRank);
                    }
                    
                    // Prepare courses list for the API call - if ALL is selected, send all courses
                    let coursesToSend;
                    if (selectedCourses.includes("ALL")) {
                        coursesToSend = getCourses();
                    } else {
                        coursesToSend = selectedCourses;
                    }
                    
                    const response = await axios.get(endpoint, {
                        params: {
                            gender,
                            category,
                            rank: rankToUse,
                            courses: coursesToSend.join(","),
                            homeStateNIT,
                            instituteType,
                            openRank: Number(ranks.openRank),
                            categoryRank: category !== "OPEN" ? Number(ranks.categoryRank) : undefined,
                            pwdRank: category.includes("PwD") ? Number(ranks.pwdRank) : undefined
                        }
                    });

                    console.log("API Response:", response.data);
                    
                    const processedColleges = response.data.colleges.map(college => {
                        let quota = "AI"; // Default for all colleges
                        
                        // For NITs, use the state data from the response if it exists
                        if (instituteType === "NIT" && college.state) {
                            quota = college.state;
                        }
                        
                        // Determine rank to compare for eligibility
                        let rankToCompare;
                        if (college.category === "OPEN") {
                            rankToCompare = ranks.openRank;
                        } else if (college.category === "OPEN (PwD)") {
                            rankToCompare = ranks.pwdRank;
                        } else if (college.category.includes("PwD")) {
                            rankToCompare = ranks.pwdRank;
                        } else {
                            rankToCompare = ranks.categoryRank;
                        }
                        
                        // Add eligibility flag
                        const isEligible = Number(rankToCompare) <= college.closingRank;
                        
                        return {
                            ...college,
                            quota: quota || "AI",
                            isEligible
                        };
                    });
                    
                    // Sort first by closing rank, then by eligibility
                    const sortedColleges = processedColleges.sort((a, b) => {
                        // First sort by closing rank
                        const rankDiff = Number(a.closingRank) - Number(b.closingRank);
                        if (rankDiff !== 0) return rankDiff;
                        
                        // If ranks are equal, eligible colleges come first
                        if (a.isEligible !== b.isEligible) {
                            return b.isEligible - a.isEligible;
                        }
                        
                        // If both eligibility and rank are equal, sort by college name
                        return a.collegeName.localeCompare(b.collegeName);
                    });
                    
                    setColleges(sortedColleges);
                } catch (error) {
                    console.error("Error fetching data:", error);
                    setSearchError(error.response?.data?.message || "Failed to fetch data. Please try again.");
                    setColleges([]);
                } finally {
                    setIsLoading(false);
                }
            };

            const getCourses = () => {
                switch (instituteType) {
                    case "IIT": return iitCourses;
                    case "IIIT": return iiitCourses;
                    case "NIT": return nitCourses;
                    default: return [];
                }
            };

            // Filter courses based on search term
            const getFilteredCourses = () => {
                const allCourses = getCourses();
                if (!courseSearchTerm) return allCourses;
                
                return allCourses.filter(course => 
                    course.toLowerCase().includes(courseSearchTerm.toLowerCase())
                );
            };

            const downloadPDF = () => {
                const input = document.getElementById("results-table");
                html2canvas(input).then((canvas) => {
                const imgData = canvas.toDataURL("image/png");
                const pdf = new jsPDF();
                const imgWidth = 190;
                const imgHeight = (canvas.height * imgWidth) / canvas.width;
                pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
                pdf.save("college_results.pdf");
                });
            };

            // Reset ranks when category changes
            useEffect(() => {
                setRanks({
                    openRank: "",
                    categoryRank: "",
                    pwdRank: ""
                });
            }, [category]);

            return (
                <div className="main-container">
                    {/* Input Form Section */}
                    {/* <div>{Navbar}</div> */}
                    <div className="form-card">
                        <h2>JEE Closing Ranks Explorer</h2>
                        <form onSubmit={fetchColleges}>
                            <div className="form-section">Personal Details & Preferences</div>
                            
                            <div className="form-group">
                                <label>Institute Type</label>
                                <select 
                                    value={instituteType} 
                                    onChange={(e) => {
                                        setInstituteType(e.target.value);
                                        setSelectedCourses([]);
                                        setCourseSearchTerm("");
                                    }}
                                >
                                    <option value="">Select Institute Type</option>
                                    <option value="IIT">Indian Institute of Technology (IIT)</option>
                                    <option value="IIIT">Indian Institute of Information Technology (IIIT)</option>
                                    <option value="NIT">National Institute of Technology (NIT)</option>
                                </select>
                            </div>

                            {instituteType === "NIT" && (
                                <div className="form-group">
                                    <label>Home State NIT</label>
                                    <select 
                                        value={homeStateNIT} 
                                        onChange={(e) => setHomeStateNIT(e.target.value)}
                                    >
                                        <option value="">Select Your Home State NIT</option>
                                        {nitNames.map(nit => (
                                            <option key={nit} value={nit}>
                                                {nit}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )}

                            <div className="form-group">
                                <label>Gender</label>
                                <select 
                                    value={gender} 
                                    onChange={(e) => setGender(e.target.value)}
                                >
                                    <option value="">Select Gender</option>
                                    <option value="GENDER_NEUTRAL">Gender-Neutral</option>
                                    <option value="FEMALE_ONLY">Female</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Category</label>
                                <select 
                                    value={category} 
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    <option value="">Select Category</option>
                                    <option value="OPEN">General (OPEN)</option>
                                    <option value="OPEN (PwD)">General-PwD (OPEN-PwD)</option>
                                    <option value="EWS">Economically Weaker Section (EWS)</option>
                                    <option value="EWS (PwD)">EWS-PwD</option>
                                    <option value="OBC-NCL">Other Backward Classes (OBC-NCL)</option>
                                    <option value="OBC-NCL (PwD)">OBC-NCL-PwD</option>
                                    <option value="SC">Scheduled Caste (SC)</option>
                                    <option value="SC (PwD)">SC-PwD</option>
                                    <option value="ST">Scheduled Tribe (ST)</option>
                                    <option value="ST (PwD)">ST-PwD</option>
                                </select>
                            </div>

                            {category && (
                                <>
                                    <div className="form-section">JEE Main/Advanced Ranks</div>
                                    {getRequiredRanks().map((rankField) => (
                                        <div className="form-group" key={rankField.type}>
                                            <label>{rankField.label}</label>
                                            <input
                                                type="number"
                                                value={ranks[rankField.type]}
                                                onChange={(e) => handleRankChange(rankField.type, e.target.value)}
                                                placeholder={`Enter your ${rankField.label}`}
                                                required
                                            />
                                        </div>
                                    ))}
                                </>
                            )}

                            <div className="form-section">Course Preferences</div>
                            <div className="instructions-text">
                                {!instituteType && 'Enter college type to display courses'}
                            </div>
                            
                            {instituteType && (
                                <div className="form-group" style={{ gridColumn: "1 / -1" }}>
                                    <label>Select Courses of Interest</label>
                                    
                                    {/* Search input for courses - fixed width as requested */}
                                    <div className="course-search" style={{ marginBottom: "15px" }}>
                                        <input
                                            type="text"
                                            placeholder="Search courses..."
                                            value={courseSearchTerm}
                                            onChange={(e) => setCourseSearchTerm(e.target.value)}
                                            className="course-search-input"
                                            style={{ width: "150%", maxWidth: "450px", padding: "12px", fontSize: "1.1rem", border: "2px solid #007acc", borderRadius: "8px" }}
                                        />
                                    </div>
                                    
                                    <div className="course-selection-vertical">
                                        {/* ALL option */}
                                        <div 
                                            className={`course-item ${selectedCourses.includes("ALL") ? 'selected' : ''}`}
                                        >
                                            <input
                                                type="checkbox"
                                                id="ALL"
                                                value="ALL"
                                                checked={selectedCourses.includes("ALL")}
                                                onChange={handleCourseChange}
                                            />
                                            <label htmlFor="ALL" className="course-label">ALL - Select All Courses</label>
                                        </div>
                                        
                                        {/* Filtered courses */}
                                        {getFilteredCourses().map((course) => (
                                            <div 
                                                key={course} 
                                                className={`course-item ${selectedCourses.includes(course) ? 'selected' : ''}`}
                                            >
                                                <input
                                                    type="checkbox"
                                                    id={course}
                                                    value={course}
                                                    checked={selectedCourses.includes(course)}
                                                    onChange={handleCourseChange}
                                                />
                                                <label htmlFor={course} className="course-label">{course}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Submit button with better spacing */}
                            <div style={{ marginTop: "30px", marginBottom: "40px", textAlign: "center" }}>
                                <button type="submit" className="submit-btn">Find Eligible Colleges</button>
                            </div>
                        </form>
                    </div>
                    
                    {/* Error message outside of the form card */}
                    {searchError && <div className="error-message">{searchError}</div>}
                    
                    {/* Loading indicator */}
                    {isLoading && (
                        <div className="loading">
                            <div className="loading-spinner"></div>
                            <p>Searching for colleges... Please wait.</p>
                        </div>
                    )}
                    
                    {/* Results Section - Clearly separated from the form */}
                    {isSubmitted && !isLoading && colleges.length > 0 && (
                        <div className="results-container">
                            {/* Results header with download button positioned to the right */}
                            <div className="results-header">
                                <div className="form-section" style={{ fontSize: "1.8rem" }}>Results</div>
                                <button 
                                    onClick={downloadPDF} 
                                    className="download-btn"
                                >
                                    Download Results
                                </button>
                            </div>

                            {/* Eligibility legend */}
                            <div className="eligibility-legend">
                                <div className="legend-item">
                                    <div className="eligibility-indicator"></div>
                                    <span style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                                        Highlighted rows indicate colleges where you are eligible based on your rank
                                    </span>
                                </div>
                            </div>
                            
                            {/* Results table */}
                            <div id="results-table" className="results-table">
                                <h3>Available Colleges Based on Your Criteria</h3>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>College Name</th>
                                            <th>Course Name</th>
                                            <th>Gender</th>
                                            <th>Category</th>
                                            <th>Quota</th>
                                            <th>Opening Rank</th>
                                            <th>Closing Rank</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {colleges.map((college, index) => (
                                            <tr 
                                                key={index} 
                                                className={college.isEligible ? 'eligible' : ''}
                                                style={college.isEligible ? { backgroundColor: "#4CAF50", color: "white" } : {}}
                                            >
                                                <td>{college.collegeName}</td>
                                                <td>{college.courseName}</td>
                                                <td>{college.gender}</td>
                                                <td>{college.category}</td>
                                                <td>{college.quota}</td>
                                                <td>{college.openingRank.toLocaleString()}</td>
                                                <td>{college.closingRank.toLocaleString()}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                    
                    {/* No colleges found message */}
                    {isSubmitted && !isLoading && colleges.length === 0 && (
                        <div className="no-results">
                            <p>No matching colleges found. Try adjusting your criteria.</p>
                        </div>
                    )}
                </div>
            );
        };

        export default RankForm;