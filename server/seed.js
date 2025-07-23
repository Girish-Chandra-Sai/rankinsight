const mongoose = require("mongoose");
const dotenv = require("dotenv");
const IIT = require("./models/iit"); // Adjust the path as necessary

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ Connected to MongoDB Atlas");
    } catch (err) {
        console.error("❌ MongoDB Connection Error:", err);
        process.exit(1);
    }
};

const iitData = {
    OPEN: {
      "Indian Institute of Technology Bhubaneswar": {
        "Civil Engineering (4 Years, Bachelor of Technology)": {
          GENDER_NEUTRAL: { openingRank: 9106, closingRank: 14782 },
          FEMALE_ONLY: { openingRank: 18286, closingRank: 23024 }
        },
        "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
          GENDER_NEUTRAL: { openingRank: 2389, closingRank: 3685 },
          FEMALE_ONLY: { openingRank: 4833, closingRank: 7557 }
        },
        "Electrical Engineering (4 Years, Bachelor of Technology)": {
          GENDER_NEUTRAL: { openingRank: 5381, closingRank: 7661 },
          FEMALE_ONLY: { openingRank: 12140, closingRank: 14183 }
        },
        "Electronics and Communication Engineering (4 Years, Bachelor of Technology)": {
          GENDER_NEUTRAL: { openingRank: 3944, closingRank: 5157 },
          FEMALE_ONLY: { openingRank: 8798, closingRank: 10904 }
        },
        "Engineering Physics (4 Years, Bachelor of Technology)": {
          GENDER_NEUTRAL: { openingRank: 10756, closingRank: 11307 },
          FEMALE_ONLY: { openingRank: 18825, closingRank: 18825 }
        },
        "Mechanical Engineering (4 Years, Bachelor of Technology)": {
          GENDER_NEUTRAL: { openingRank: 7881, closingRank: 10233 },
          FEMALE_ONLY: { openingRank: 16104, closingRank: 19505 }
        },
        "Metallurgical and Materials Engineering (4 Years, Bachelor of Technology)": {
          GENDER_NEUTRAL: { openingRank: 11823, closingRank: 14898 },
          FEMALE_ONLY: { openingRank: 20901, closingRank: 21693 }
        }
      },
      "Indian Institute of Technology Bombay": {
            "Aerospace Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 817, closingRank: 2394 },
                FEMALE_ONLY: { openingRank: 2494, closingRank: 6360 }
            },
            "BS in Mathematics (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 631, closingRank: 1191 },
                FEMALE_ONLY: { openingRank: 4101, closingRank: 4101 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 650, closingRank: 2545 },
                FEMALE_ONLY: { openingRank: 4559, closingRank: 6650 }
            },
            "Chemistry (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 5629, closingRank: 7430 },
                FEMALE_ONLY: { openingRank: 9692, closingRank: 11262 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2244, closingRank: 4046 },
                FEMALE_ONLY: { openingRank: 6334, closingRank: 8833 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1, closingRank: 68 },
                FEMALE_ONLY: { openingRank: 7, closingRank: 421 }
            },
            "Economics (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 1562, closingRank: 2408 },
                FEMALE_ONLY: { openingRank: 3878, closingRank: 4408 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 15, closingRank: 496 },
                FEMALE_ONLY: { openingRank: 642, closingRank: 1339 }
            },
            "Electrical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 536, closingRank: 973 },
                FEMALE_ONLY: { openingRank: 1731, closingRank: 2424 }
            },
            "Energy Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1905, closingRank: 2689 },
                FEMALE_ONLY: { openingRank: 3767, closingRank: 5537 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 197, closingRank: 1719 },
                FEMALE_ONLY: { openingRank: 1680, closingRank: 3629 }
            },
            "Environmental Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3424, closingRank: 4718 },
                FEMALE_ONLY: { openingRank: 8821, closingRank: 9292 }
            },
            "Industrial Engineering and Operations Research (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1042, closingRank: 1726 },
                FEMALE_ONLY: { openingRank: 3258, closingRank: 4762 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 666, closingRank: 1685 },
                FEMALE_ONLY: { openingRank: 1662, closingRank: 4444 }
            },
            "Metallurgical Engineering and Materials Science (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2690, closingRank: 4193 },
                FEMALE_ONLY: { openingRank: 6870, closingRank: 8491 }
            }
        },
        "Indian Institute of Technology Mandi": {
            "B.Tech in General Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 7482, closingRank: 10842 },
                FEMALE_ONLY: { openingRank: 14742, closingRank: 18004 }
            },
            "B.Tech in Materials Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 12859, closingRank: 14440 },
                FEMALE_ONLY: { openingRank: 21058, closingRank: 23252 }
            },
            "B.Tech in Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3634, closingRank: 4089 },
                FEMALE_ONLY: { openingRank: 7453, closingRank: 7886 }
            },
            "B.Tech in Microelectronics & VLSI (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4694, closingRank: 6643 },
                FEMALE_ONLY: { openingRank: 11035, closingRank: 12194 }
            },
            "Bio Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 11233, closingRank: 14239 },
                FEMALE_ONLY: { openingRank: 20007, closingRank: 21077 }
            },
            "BS in Chemical Sciences (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 12900, closingRank: 16430 },
                FEMALE_ONLY: { openingRank: 23662, closingRank: 23698 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 9968, closingRank: 12562 },
                FEMALE_ONLY: { openingRank: 20688, closingRank: 22150 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1803, closingRank: 3118 },
                FEMALE_ONLY: { openingRank: 6049, closingRank: 6725 }
            },
            "Data Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3222, closingRank: 3918 },
                FEMALE_ONLY: { openingRank: 7110, closingRank: 9188 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4772, closingRank: 6909 },
                FEMALE_ONLY: { openingRank: 11796, closingRank: 12842 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 9089, closingRank: 10475 },
                FEMALE_ONLY: { openingRank: 19986, closingRank: 20153 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 6947, closingRank: 9734 },
                FEMALE_ONLY: { openingRank: 18047, closingRank: 19060 }
            }
        },
        "Indian Institute of Technology Delhi": {
                "Biotechnology and Biochemical Engineering (4 Years, Bachelor of Technology)": {
                    GENDER_NEUTRAL: { openingRank: 3677, closingRank: 4849 },
                    FEMALE_ONLY: { openingRank: 8216, closingRank: 9733 }
                },
                "Chemical Engineering (4 Years, Bachelor of Technology)": {
                    GENDER_NEUTRAL: { openingRank: 1689, closingRank: 2221 },
                    FEMALE_ONLY: { openingRank: 3550, closingRank: 5060 }
                },
                "Chemical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                    GENDER_NEUTRAL: { openingRank: 2629, closingRank: 3646 },
                    FEMALE_ONLY: { openingRank: 6656, closingRank: 6847 }
                },
                "Civil Engineering (4 Years, Bachelor of Technology)": {
                    GENDER_NEUTRAL: { openingRank: 2666, closingRank: 4169 },
                    FEMALE_ONLY: { openingRank: 6862, closingRank: 9424 }
                },
                "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                    GENDER_NEUTRAL: { openingRank: 27, closingRank: 116 },
                    FEMALE_ONLY: { openingRank: 39, closingRank: 556 }
                },
                "Computer Science and Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                    GENDER_NEUTRAL: { openingRank: 128, closingRank: 204 },
                    FEMALE_ONLY: { openingRank: 958, closingRank: 1061 }
                },
                "Electrical Engineering (4 Years, Bachelor of Technology)": {
                    GENDER_NEUTRAL: { openingRank: 382, closingRank: 625 },
                    FEMALE_ONLY: { openingRank: 1411, closingRank: 1826 }
                },
                "Electrical Engineering (Power and Automation) (4 Years, Bachelor of Technology)": {
                    GENDER_NEUTRAL: { openingRank: 646, closingRank: 810 },
                    FEMALE_ONLY: { openingRank: 2019, closingRank: 2462 }
                },
                "Energy Engineering (4 Years, Bachelor of Technology)": {
                    GENDER_NEUTRAL: { openingRank: 1898, closingRank: 2707 },
                    FEMALE_ONLY: { openingRank: 5632, closingRank: 6523 }
                },
                "Engineering and Computational Mechanics (4 Years, Bachelor of Technology)": {
                    GENDER_NEUTRAL: { openingRank: 890, closingRank: 1194 },
                    FEMALE_ONLY: { openingRank: 2128, closingRank: 3381 }
                },
                "Engineering Physics (4 Years, Bachelor of Technology)": {
                    GENDER_NEUTRAL: { openingRank: 1845, closingRank: 2560 },
                    FEMALE_ONLY: { openingRank: 4087, closingRank: 7030 }
                },
                "Materials Engineering (4 Years, Bachelor of Technology)": {
                    GENDER_NEUTRAL: { openingRank: 2422, closingRank: 3797 },
                    FEMALE_ONLY: { openingRank: 8280, closingRank: 9743 }
                },
                "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                    GENDER_NEUTRAL: { openingRank: 118, closingRank: 332 },
                    FEMALE_ONLY: { openingRank: 824, closingRank: 1240 }
                },
                "Mathematics and Computing (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                    GENDER_NEUTRAL: { openingRank: 339, closingRank: 417 },
                    FEMALE_ONLY: { openingRank: 1433, closingRank: 1644 }
                },
                "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                    GENDER_NEUTRAL: { openingRank: 1225, closingRank: 1782 },
                    FEMALE_ONLY: { openingRank: 3748, closingRank: 5487 }
                },
                "Production and Industrial Engineering (4 Years, Bachelor of Technology)": {
                    GENDER_NEUTRAL: { openingRank: 2452, closingRank: 3089 },
                    FEMALE_ONLY: { openingRank: 7335, closingRank: 9018 }
                },
                "Textile Technology (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4352, closingRank: 6102 },
                FEMALE_ONLY: { openingRank: 9820, closingRank: 12551 }
            }
        },
        "Indian Institute of Technology Indore": {
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 7109, closingRank: 7913 },
                FEMALE_ONLY: { openingRank: 15679, closingRank: 16378 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 8296, closingRank: 9773 },
                FEMALE_ONLY: { openingRank: 16460, closingRank: 18217 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 823, closingRank: 1389 },
                FEMALE_ONLY: { openingRank: 3499, closingRank: 4698 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2359, closingRank: 3818 },
                FEMALE_ONLY: { openingRank: 5167, closingRank: 8297 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 5765, closingRank: 7612 },
                FEMALE_ONLY: { openingRank: 13790, closingRank: 15115 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1591, closingRank: 2180 },
                FEMALE_ONLY: { openingRank: 4905, closingRank: 5064 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4946, closingRank: 6812 },
                FEMALE_ONLY: { openingRank: 12137, closingRank: 14123 }
            },
            "Metallurgical Engineering and Materials Science (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 8299, closingRank: 10894 },
                FEMALE_ONLY: { openingRank: 18413, closingRank: 19770 }
            },
            "Space Sciences and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 5666, closingRank: 6640 },
                FEMALE_ONLY: { openingRank: 10683, closingRank: 10970 }
            }
        },
        "Indian Institute of Technology Kharagpur": {
            "Aerospace Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2716, closingRank: 4745 },
                FEMALE_ONLY: { openingRank: 10505, closingRank: 11444 }
            },
            "Agricultural and Food Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 5515, closingRank: 10770 },
                FEMALE_ONLY: { openingRank: 15669, closingRank: 19903 }
            },
            "Applied Geology (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 10069, closingRank: 12893 },
                FEMALE_ONLY: { openingRank: 20374, closingRank: 22024 }
            },
            "Architecture (5 Years, Bachelor of Architecture)": {
                GENDER_NEUTRAL: { openingRank: 16634, closingRank: 20427 },
                FEMALE_ONLY: { openingRank: 20942, closingRank: 24653 }
            },
            "Artificial Intelligence (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 467, closingRank: 898 },
                FEMALE_ONLY: { openingRank: 2604, closingRank: 2630 }
            },
            "Biotechnology and Biochemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 5505, closingRank: 7972 },
                FEMALE_ONLY: { openingRank: 14147, closingRank: 15493 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3905, closingRank: 4848 },
                FEMALE_ONLY: { openingRank: 8646, closingRank: 11646 }
            },
            "Chemistry (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 7869, closingRank: 12488 },
                FEMALE_ONLY: { openingRank: 18426, closingRank: 19077 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4902, closingRank: 6992 },
                FEMALE_ONLY: { openingRank: 12769, closingRank: 15388 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 226, closingRank: 415 },
                FEMALE_ONLY: { openingRank: 1172, closingRank: 1661 }
            },
            "Economics (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 3176, closingRank: 5263 },
                FEMALE_ONLY: { openingRank: 6763, closingRank: 10746 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1460, closingRank: 2016 },
                FEMALE_ONLY: { openingRank: 4312, closingRank: 5599 }
            },
            "Electronics and Electrical Communication Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 516, closingRank: 1448 },
                FEMALE_ONLY: { openingRank: 1815, closingRank: 3816 }
            },
            "Exploration Geophysics (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 9996, closingRank: 12413 },
                FEMALE_ONLY: { openingRank: 19316, closingRank: 20680 }
            },
            "Industrial and Systems Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2915, closingRank: 4364 },
                FEMALE_ONLY: { openingRank: 7214, closingRank: 10726 }
            },
            "Instrumentation Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2022, closingRank: 2481 },
                FEMALE_ONLY: { openingRank: 6373, closingRank: 6582 }
            },
            "Manufacturing Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4649, closingRank: 6067 },
                FEMALE_ONLY: { openingRank: 12350, closingRank: 12933 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 971, closingRank: 1329 },
                FEMALE_ONLY: { openingRank: 3514, closingRank: 3957 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2160, closingRank: 3613 },
                FEMALE_ONLY: { openingRank: 6783, closingRank: 10732 }
            },
            "Metallurgical and Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 5472, closingRank: 7104 },
                FEMALE_ONLY: { openingRank: 12914, closingRank: 15082 }
            },
            "Mining Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 7431, closingRank: 10218 },
                FEMALE_ONLY: { openingRank: 16126, closingRank: 19143 }
            },
            "Ocean Engineering and Naval Architecture (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 7876, closingRank: 9098 },
                FEMALE_ONLY: { openingRank: 16598, closingRank: 17790 }
            },
            "Physics (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 2957, closingRank: 9672 },
                FEMALE_ONLY: { openingRank: 14639, closingRank: 17600 }
            }
        },
        "Indian Institute of Technology Hyderabad": {
            "Artificial Intelligence (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 685, closingRank: 875 },
                FEMALE_ONLY: { openingRank: 2214, closingRank: 2840 }
            },
            "Biomedical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 6579, closingRank: 8493 },
                FEMALE_ONLY: { openingRank: 15656, closingRank: 15954 }
            },
            "Biotechnology and Bioinformatics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 6015, closingRank: 8524 },
                FEMALE_ONLY: { openingRank: 14833, closingRank: 15214 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4229, closingRank: 5757 },
                FEMALE_ONLY: { openingRank: 10591, closingRank: 11897 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 7053, closingRank: 7898 },
                FEMALE_ONLY: { openingRank: 12882, closingRank: 16049 }
            },
            "Computational Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1046, closingRank: 1790 },
                FEMALE_ONLY: { openingRank: 4462, closingRank: 5158 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 431, closingRank: 656 },
                FEMALE_ONLY: { openingRank: 1709, closingRank: 1809 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1022, closingRank: 2105 },
                FEMALE_ONLY: { openingRank: 3084, closingRank: 4344 }
            },
            "Electrical Engineering (IC Design and Technology) (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1570, closingRank: 2147 },
                FEMALE_ONLY: { openingRank: 4056, closingRank: 4434 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3442, closingRank: 4932 },
                FEMALE_ONLY: { openingRank: 11250, closingRank: 12055 }
            },
            "Engineering Science (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1822, closingRank: 3835 },
                FEMALE_ONLY: { openingRank: 4470, closingRank: 5748 }
            },
            "Industrial Chemistry (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 8178, closingRank: 9551 },
                FEMALE_ONLY: { openingRank: 15890, closingRank: 16446 }
            },
            "Materials Science and Metallurgical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 5105, closingRank: 8197 },
                FEMALE_ONLY: { openingRank: 13015, closingRank: 15999 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 660, closingRank: 982 },
                FEMALE_ONLY: { openingRank: 2885, closingRank: 3625 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3751, closingRank: 4469 },
                FEMALE_ONLY: { openingRank: 7527, closingRank: 10758 }
            }
        },
        "Indian Institute of Technology Jodhpur": {
            "Artificial Intelligence and Data Science (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3048, closingRank: 4182 },
                FEMALE_ONLY: { openingRank: 7749, closingRank: 8194 }
            },
            "Bio Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 12293, closingRank: 14666 },
                FEMALE_ONLY: { openingRank: 18682, closingRank: 20850 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 8295, closingRank: 11036 },
                FEMALE_ONLY: { openingRank: 15996, closingRank: 19661 }
            },
            "Chemistry with Specialization (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 12654, closingRank: 16381 },
                FEMALE_ONLY: { openingRank: 22452, closingRank: 23748 }
            },
            "Civil and Infrastructure Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 11244, closingRank: 13316 },
                FEMALE_ONLY: { openingRank: 19028, closingRank: 21003 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2062, closingRank: 3061 },
                FEMALE_ONLY: { openingRank: 5655, closingRank: 7457 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4693, closingRank: 6346 },
                FEMALE_ONLY: { openingRank: 9003, closingRank: 11925 }
            },
            "Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 11381, closingRank: 13339 },
                FEMALE_ONLY: { openingRank: 19921, closingRank: 22782 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 6984, closingRank: 9488 },
                FEMALE_ONLY: { openingRank: 14797, closingRank: 18249 }
            },
            "Physics with Specialization (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 10714, closingRank: 14641 },
                FEMALE_ONLY: { openingRank: 23402, closingRank: 23673 }
            }
        },
        "Indian Institute of Technology Kanpur": {
            "Aerospace Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2713, closingRank: 3638 },
                FEMALE_ONLY: { openingRank: 6950, closingRank: 10186 }
            },
            "Biological Sciences and Bioengineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 5259, closingRank: 6952 },
                FEMALE_ONLY: { openingRank: 10725, closingRank: 12032 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2227, closingRank: 4015 },
                FEMALE_ONLY: { openingRank: 7129, closingRank: 9528 }
            },
            "Chemistry (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 7317, closingRank: 10498 },
                FEMALE_ONLY: { openingRank: 15079, closingRank: 16196 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4213, closingRank: 5948 },
                FEMALE_ONLY: { openingRank: 4232, closingRank: 13819 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 120, closingRank: 252 },
                FEMALE_ONLY: { openingRank: 781, closingRank: 1117 }
            },
            "Earth Sciences (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 7210, closingRank: 10058 },
                FEMALE_ONLY: { openingRank: 16346, closingRank: 17618 }
            },
            "Economics (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 2137, closingRank: 3106 },
                FEMALE_ONLY: { openingRank: 5790, closingRank: 6326 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 743, closingRank: 1290 },
                FEMALE_ONLY: { openingRank: 2616, closingRank: 3166 }
            },
            "Materials Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4831, closingRank: 6008 },
                FEMALE_ONLY: { openingRank: 11438, closingRank: 13464 }
            },
            "Mathematics and Scientific Computing (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 756, closingRank: 990 },
                FEMALE_ONLY: { openingRank: 2288, closingRank: 3445 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1889, closingRank: 2776 },
                FEMALE_ONLY: { openingRank: 6470, closingRank: 8298 }
            },
            "Physics (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 3377, closingRank: 5508 },
                FEMALE_ONLY: { openingRank: 7470, closingRank: 16084 }
            },
            "Statistics and Data Science (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 699, closingRank: 1030 },
                FEMALE_ONLY: { openingRank: 1938, closingRank: 3674 }
            }
        },
        "Indian Institute of Technology Madras": {
            "Aerospace Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1469, closingRank: 2815 },
                FEMALE_ONLY: { openingRank: 5475, closingRank: 6845 }
            },
            "Aerospace Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 2199, closingRank: 2984 },
                FEMALE_ONLY: { openingRank: 2184, closingRank: 2184 }
            },
            "Artificial Intelligence and Data Analytics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 132, closingRank: 419 },
                FEMALE_ONLY: { openingRank: 1079, closingRank: 1379 }
            },
            "Biological Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3135, closingRank: 5755 },
                FEMALE_ONLY: { openingRank: 5326, closingRank: 9871 }
            },
            "Biological Science (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 8849, closingRank: 10682 },
                FEMALE_ONLY: { openingRank: 12473, closingRank: 14739 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2024, closingRank: 3972 },
                FEMALE_ONLY: { openingRank: 6727, closingRank: 9068 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3305, closingRank: 5688 },
                FEMALE_ONLY: { openingRank: 7794, closingRank: 12586 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 76, closingRank: 159 },
                FEMALE_ONLY: { openingRank: 558, closingRank: 757 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 299, closingRank: 838 },
                FEMALE_ONLY: { openingRank: 1304, closingRank: 2677 }
            },
            "Engineering Design (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1828, closingRank: 3656 },
                FEMALE_ONLY: { openingRank: 6825, closingRank: 8939 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 931, closingRank: 1858 },
                FEMALE_ONLY: { openingRank: 3376, closingRank: 4636 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 458, closingRank: 2310 },
                FEMALE_ONLY: { openingRank: 2868, closingRank: 6678 }
            },
            "Metallurgical and Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3770, closingRank: 4748 },
                FEMALE_ONLY: { openingRank: 9735, closingRank: 10699 }
            },
            "Naval Architecture and Ocean Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4274, closingRank: 7404 },
                FEMALE_ONLY: { openingRank: 12471, closingRank: 13618 }
            },
            "Physics (5 Years, Bachelor of Science and Master of Science (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1292, closingRank: 2742 },
                FEMALE_ONLY: { openingRank: 7069, closingRank: 7069 }
            }
        },
        "Indian Institute of Technology Gandhinagar": {
            "Artificial Intelligence (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1804, closingRank: 2309 },
                FEMALE_ONLY: { openingRank: 4703, closingRank: 4824 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 6353, closingRank: 8269 },
                FEMALE_ONLY: { openingRank: 14225, closingRank: 15791 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 8338, closingRank: 10234 },
                FEMALE_ONLY: { openingRank: 16078, closingRank: 17839 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 811, closingRank: 1708 },
                FEMALE_ONLY: { openingRank: 2427, closingRank: 4592 }
            },
            "Computer Science and Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1836, closingRank: 2234 },
                FEMALE_ONLY: { openingRank: 5172, closingRank: 5172 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2835, closingRank: 4055 },
                FEMALE_ONLY: { openingRank: 6395, closingRank: 8494 }
            },
            "Electrical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 3932, closingRank: 4588 },
                FEMALE_ONLY: { openingRank: 8611, closingRank: 8611 }
            },
            "Integrated Circuit Design & Technology (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2458, closingRank: 4349 },
                FEMALE_ONLY: { openingRank: 7247, closingRank: 7281 }
            },
            "Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 8632, closingRank: 11298 },
                FEMALE_ONLY: { openingRank: 16409, closingRank: 17233 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4859, closingRank: 6344 },
                FEMALE_ONLY: { openingRank: 10210, closingRank: 13488 }
            },
            "Mechanical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 6581, closingRank: 7422 },
                FEMALE_ONLY: { openingRank: 13636, closingRank: 14114 }
            }
        },
        "Indian Institute of Technology Patna": {
            "Artificial Intelligence and Data Science (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3557, closingRank: 4346 },
                FEMALE_ONLY: { openingRank: 6711, closingRank: 9272 }
            },
            "B. Tech in CE. - M. Tech. in Geotechnical Engineering (5 Years, B.Tech. + M.Tech./MS (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 14906, closingRank: 15274 },
                FEMALE_ONLY: { openingRank: 24612, closingRank: 24612 }
            },
            "B. Tech in CE. - M. Tech. in Structural Engineering (5 Years, B.Tech. + M.Tech./MS (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 13323, closingRank: 14055 },
                FEMALE_ONLY: { openingRank: 18498, closingRank: 18498 }
            },
            "B. Tech. (CSE) and M.Tech in CSE (5 Years, B.Tech. + M.Tech./MS (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 3466, closingRank: 4429 },
                FEMALE_ONLY: { openingRank: 9776, closingRank: 9776 }
            },
            "B. Tech. (ECE) -M. Tech. in VLSI (5 Years, B.Tech. + M.Tech./MS (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 6068, closingRank: 6253 },
                FEMALE_ONLY: { openingRank: 14138, closingRank: 14138 }
            },
            "B. Tech. (EEE)-M. Tech. in (Power & Control) (5 Years, B.Tech. + M.Tech./MS (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 7254, closingRank: 7605 },
                FEMALE_ONLY: { openingRank: 16498, closingRank: 16498 }
            },
            "B. Tech. (Mathematics & Computing) M. Tech. in (Mathematics & Computing) (5 Years, B.Tech. + M.Tech./MS (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 5147, closingRank: 5683 },
                FEMALE_ONLY: { openingRank: 11004, closingRank: 11004 }
            },
            "B. Tech. (ME) - M. Tech. in Mechatronics (5 Years, B.Tech. + M.Tech./MS (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 8327, closingRank: 9835 },
                FEMALE_ONLY: { openingRank: 18529, closingRank: 18529 }
            },
            "B.Tech (Artificial Intelligence and Data Science) - MBA in Digital Business Management (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 4371, closingRank: 4864 }
            },
            "B.Tech (Chemical Engineering) - MBA in Hospital and Health Care Management (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 12577, closingRank: 13111 }
            },
            "B.Tech (Chemical Science and Technology) - MBA in Hospital and Health Care Management (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 12162, closingRank: 14176 },
                FEMALE_ONLY: { openingRank: 20511, closingRank: 20511 }
            },
            "B.Tech (Civil Engineering) - MBA (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 14220, closingRank: 15129 }
            },
            "B.Tech (Computer Science and Engineering) - MBA in Digital Business Management (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 3427, closingRank: 3427 },
                FEMALE_ONLY: { openingRank: 11166, closingRank: 11166 }
            },
            "B.Tech (Electrical and Electronics Engineering) - MBA (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 5875, closingRank: 7575 },
                FEMALE_ONLY: { openingRank: 16808, closingRank: 16808 }
            },
            "B.Tech (Electronics and Communication Engineering) - MBA in Hospital and Healthcare Management (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 6895, closingRank: 7070 },
                FEMALE_ONLY: { openingRank: 18135, closingRank: 18135 }
            },
            "B.Tech (Engineering Physics) - MBA (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 10491, closingRank: 12375 }
            },
            "B.Tech (Mathematics and Computing) - MBA in Digital Business Management (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 4990, closingRank: 5445 }
            },
            "B.Tech (Mechanical Engineering) - MBA (IIM Mumbai) (5 Years, Bachelor of Technology and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 7840, closingRank: 9445 },
                FEMALE_ONLY: { openingRank: 14756, closingRank: 19507 }
            },
            "B.Tech (Metallurgical and Materials Engineering) - MBA (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 15433, closingRank: 15438 },
                FEMALE_ONLY: { openingRank: 22211, closingRank: 22211 }
            },
            "B.Tech. in Electronics and Communication Engineering and M.Tech. in Communication Systems (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 6287, closingRank: 6660 },
                FEMALE_ONLY: { openingRank: 12637, closingRank: 12637 }
            },
            "BS in Economics with MBA (IIM Bodh Gaya) (5 Years, Bachelor of Science and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 6885, closingRank: 9961 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 10776, closingRank: 12519 },
                FEMALE_ONLY: { openingRank: 20166, closingRank: 21996 }
            },
            "Chemical Science and Technology (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 11793, closingRank: 14062 },
                FEMALE_ONLY: { openingRank: 22292, closingRank: 22410 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 12287, closingRank: 14579 },
                FEMALE_ONLY: { openingRank: 22663, closingRank: 23883 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1760, closingRank: 3144 },
                FEMALE_ONLY: { openingRank: 4695, closingRank: 7192 }
            },
            "Economics (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 8762, closingRank: 11437 },
                FEMALE_ONLY: { openingRank: 18633, closingRank: 21392 }
            },
            "Electrical and Electronics Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 5868, closingRank: 6873 },
                FEMALE_ONLY: { openingRank: 12395, closingRank: 14153 }
            },
            "Electronics and Communication Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4119, closingRank: 5732 },
                FEMALE_ONLY: { openingRank: 11192, closingRank: 12036 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 10781, closingRank: 12031 },
                FEMALE_ONLY: { openingRank: 19654, closingRank: 21964 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3252, closingRank: 4952 },
                FEMALE_ONLY: { openingRank: 9830, closingRank: 10651 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 7745, closingRank: 10647 },
                FEMALE_ONLY: { openingRank: 15112, closingRank: 21121 }
            },
            "Metallurgical and Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 11553, closingRank: 15323 },
                FEMALE_ONLY: { openingRank: 23452, closingRank: 24442 }
            }
        },
        "Indian Institute of Technology Roorkee": {
            "Architecture (5 Years, Bachelor of Architecture)": {
                GENDER_NEUTRAL: { openingRank: 3105, closingRank: 19885 },
                FEMALE_ONLY: { openingRank: 17302, closingRank: 19354 }
            },
            "Biosciences and Bioengineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 5871, closingRank: 7286 },
                FEMALE_ONLY: { openingRank: 13107, closingRank: 14009 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3531, closingRank: 4689 },
                FEMALE_ONLY: { openingRank: 6799, closingRank: 10941 }
            },
            "Chemical Sciences (5 Years, Bachelor of Science and Master of Science (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 8062, closingRank: 11647 },
                FEMALE_ONLY: { openingRank: 11950, closingRank: 18537 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4202, closingRank: 6293 },
                FEMALE_ONLY: { openingRank: 10785, closingRank: 14749 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 277, closingRank: 481 },
                FEMALE_ONLY: { openingRank: 1270, closingRank: 1870 }
            },
            "Data Science and Artificial Intelligence (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 503, closingRank: 680 },
                FEMALE_ONLY: { openingRank: 2000, closingRank: 2114 }
            },
            "Economics (5 Years, Bachelor of Science and Master of Science (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 3233, closingRank: 5312 },
                FEMALE_ONLY: { openingRank: 10154, closingRank: 10847 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1495, closingRank: 2033 },
                FEMALE_ONLY: { openingRank: 3631, closingRank: 6111 }
            },
            "Electronics and Communication Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 987, closingRank: 1424 },
                FEMALE_ONLY: { openingRank: 2653, closingRank: 3590 }
            },
            "Energy Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3834, closingRank: 4818 },
                FEMALE_ONLY: { openingRank: 11253, closingRank: 11253 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2456, closingRank: 3951 },
                FEMALE_ONLY: { openingRank: 6739, closingRank: 10019 }
            },
            "Geological Technology (5 Years, Integrated Master of Technology)": {
                GENDER_NEUTRAL: { openingRank: 7985, closingRank: 9977 },
                FEMALE_ONLY: { openingRank: 15494, closingRank: 17322 }
            },
            "Geophysical Technology (5 Years, Integrated Master of Technology)": {
                GENDER_NEUTRAL: { openingRank: 6436, closingRank: 9210 },
                FEMALE_ONLY: { openingRank: 16073, closingRank: 18299 }
            },
            "Mathematics & Computing (5 Years, Bachelor of Science and Master of Science (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1089, closingRank: 1512 },
                FEMALE_ONLY: { openingRank: 4010, closingRank: 4814 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2526, closingRank: 3672 },
                FEMALE_ONLY: { openingRank: 7668, closingRank: 10517 }
            },
            "Metallurgical and Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 6173, closingRank: 7051 },
                FEMALE_ONLY: { openingRank: 13244, closingRank: 15488 }
            },
            "Physics (5 Years, Bachelor of Science and Master of Science (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 6021, closingRank: 9079 },
                FEMALE_ONLY: { openingRank: 12854, closingRank: 15922 }
            },
            "Production and Industrial Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4457, closingRank: 5365 },
                FEMALE_ONLY: { openingRank: 11018, closingRank: 11912 }
            }
        },
        "Indian Institute of Technology (ISM) Dhanbad": {
            "Applied Geology (5 Years, Integrated Master of Technology)": {
                GENDER_NEUTRAL: { openingRank: 13369, closingRank: 16011 },
                FEMALE_ONLY: { openingRank: 24275, closingRank: 24275 }
            },
            "Applied Geophysics (5 Years, Integrated Master of Technology)": {
                GENDER_NEUTRAL: { openingRank: 15220, closingRank: 15591 },
                FEMALE_ONLY: { openingRank: 25416, closingRank: 25416 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 7882, closingRank: 11398 },
                FEMALE_ONLY: { openingRank: 16313, closingRank: 19432 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 9898, closingRank: 12996 },
                FEMALE_ONLY: { openingRank: 20786, closingRank: 23485 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2167, closingRank: 3846 },
                FEMALE_ONLY: { openingRank: 5560, closingRank: 8682 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4868, closingRank: 7567 },
                FEMALE_ONLY: { openingRank: 13093, closingRank: 14711 }
            },
            "Electronics and Communication Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4743, closingRank: 5982 },
                FEMALE_ONLY: { openingRank: 9327, closingRank: 12788 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 8392, closingRank: 10778 },
                FEMALE_ONLY: { openingRank: 16923, closingRank: 17730 }
            },
            "Environmental Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 9606, closingRank: 15291 },
                FEMALE_ONLY: { openingRank: 21683, closingRank: 23835 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4100, closingRank: 4956 },
                FEMALE_ONLY: { openingRank: 9026, closingRank: 10248 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 7675, closingRank: 9875 },
                FEMALE_ONLY: { openingRank: 15112, closingRank: 21121 }
            },
            "Mineral and Metallurgical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 12446, closingRank: 13599 },
                FEMALE_ONLY: { openingRank: 21216, closingRank: 23512 }
            },
            "Mining Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 8439, closingRank: 14762 },
                FEMALE_ONLY: { openingRank: 19181, closingRank: 25824 }
            },
            "Mining Machinery Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 13690, closingRank: 15321 },
                FEMALE_ONLY: { openingRank: 21592, closingRank: 21592 }
            },
            "Petroleum Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 7795, closingRank: 12310 },
                FEMALE_ONLY: { openingRank: 16543, closingRank: 20817 }
            }
        },
        "Indian Institute of Technology Ropar": {
            "Artificial Intelligence and Data Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2254, closingRank: 2656 },
                FEMALE_ONLY: { openingRank: 7074, closingRank: 8412 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 8597, closingRank: 10097 },
                FEMALE_ONLY: { openingRank: 14701, closingRank: 15740 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 10126, closingRank: 11365 },
                FEMALE_ONLY: { openingRank: 17886, closingRank: 18966 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1158, closingRank: 2379 },
                FEMALE_ONLY: { openingRank: 3461, closingRank: 6044 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3406, closingRank: 5528 },
                FEMALE_ONLY: { openingRank: 6205, closingRank: 12038 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 8158, closingRank: 9142 },
                FEMALE_ONLY: { openingRank: 16348, closingRank: 18747 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1755, closingRank: 3518 },
                FEMALE_ONLY: { openingRank: 8734, closingRank: 9494 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 6919, closingRank: 8636 },
                FEMALE_ONLY: { openingRank: 15057, closingRank: 17603 }
            },
            "Metallurgical and Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 11211, closingRank: 13009 },
                FEMALE_ONLY: { openingRank: 20595, closingRank: 21582 }
            }
        },
        "Indian Institute of Technology (BHU) Varanasi": {
            "Architecture (5 Years, Bachelor of Architecture)": {
                GENDER_NEUTRAL: { openingRank: 20507, closingRank: 22390 },
                FEMALE_ONLY: { openingRank: 25278, closingRank: 25278 }
            },
            "Biochemical Engineering with M.Tech. in Biochemical Engineering and Biotechnology (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 10717, closingRank: 12761 },
                FEMALE_ONLY: { openingRank: 20653, closingRank: 20966 }
            },
            "Bioengineering with M.Tech in Biomedical Technology (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 11279, closingRank: 14001 },
                FEMALE_ONLY: { openingRank: 17189, closingRank: 18700 }
            },
            "Ceramic Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 10504, closingRank: 12154 },
                FEMALE_ONLY: { openingRank: 18654, closingRank: 22716 }
            },
            "Ceramic Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 12260, closingRank: 13931 },
                FEMALE_ONLY: { openingRank: 24628, closingRank: 24753 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 5715, closingRank: 7757 },
                FEMALE_ONLY: { openingRank: 12307, closingRank: 16188 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 7809, closingRank: 9339 },
                FEMALE_ONLY: { openingRank: 15552, closingRank: 18970 }
            },
            "Civil Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 8533, closingRank: 10583 },
                FEMALE_ONLY: { openingRank: 18871, closingRank: 19360 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 667, closingRank: 1071 },
                FEMALE_ONLY: { openingRank: 2562, closingRank: 4130 }
            },
            "Computer Science and Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1120, closingRank: 1510 },
                FEMALE_ONLY: { openingRank: 4165, closingRank: 4593 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2852, closingRank: 3608 },
                FEMALE_ONLY: { openingRank: 6391, closingRank: 10177 }
            },
            "Electrical Engineering with M.Tech. in Power Electronics (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 3826, closingRank: 4619 },
                FEMALE_ONLY: { openingRank: 10337, closingRank: 10830 }
            },
            "Electronics Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2110, closingRank: 2826 },
                FEMALE_ONLY: { openingRank: 5767, closingRank: 6986 }
            },
            "Engineering Physics (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 6196, closingRank: 7764 },
                FEMALE_ONLY: { openingRank: 16241, closingRank: 16996 }
            },
            "Industrial Chemistry (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 10813, closingRank: 12317 },
                FEMALE_ONLY: { openingRank: 21633, closingRank: 23182 }
            },
            "Materials Science and Technology (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 8540, closingRank: 12524 },
                FEMALE_ONLY: { openingRank: 19448, closingRank: 19700 }
            },
            "Mathematics and Computing (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1538, closingRank: 2154 },
                FEMALE_ONLY: { openingRank: 4954, closingRank: 6186 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4029, closingRank: 6596 },
                FEMALE_ONLY: { openingRank: 11998, closingRank: 15157 }
            },
            "Mechanical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 6689, closingRank: 7497 },
                FEMALE_ONLY: { openingRank: 14319, closingRank: 16564 }
            },
            "Metallurgical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 7717, closingRank: 10740 },
                FEMALE_ONLY: { openingRank: 16644, closingRank: 19931 }
            },
            "Metallurgical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 10791, closingRank: 11530 },
                FEMALE_ONLY: { openingRank: 16837, closingRank: 22750 }
            },
            "Mining Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 10803, closingRank: 12876 },
                FEMALE_ONLY: { openingRank: 20895, closingRank: 24616 }
            },
            "Mining Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 12958, closingRank: 14557 },
                FEMALE_ONLY: { openingRank: 24523, closingRank: 25614 }
            },
            "Pharmaceutical Engineering & Technology (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 11311, closingRank: 13562 },
                FEMALE_ONLY: { openingRank: 20701, closingRank: 22879 }
            },
            "Pharmaceutical Engineering & Technology (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 13669, closingRank: 14463 },
                FEMALE_ONLY: { openingRank: 21830, closingRank: 24870 }
            }
        },
        "Indian Institute of Technology Guwahati": {
            "Biosciences and Bioengineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 7410, closingRank: 9178 },
                FEMALE_ONLY: { openingRank: 15505, closingRank: 17156 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4618, closingRank: 5363 },
                FEMALE_ONLY: { openingRank: 11635, closingRank: 12557 }
            },
            "Chemical Science and Technology (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 5443, closingRank: 6834 },
                FEMALE_ONLY: { openingRank: 11731, closingRank: 14720 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 5869, closingRank: 7670 },
                FEMALE_ONLY: { openingRank: 15033, closingRank: 16581 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 466, closingRank: 623 },
                FEMALE_ONLY: { openingRank: 1788, closingRank: 2332 }
            },
            "Data Science and Artificial Intelligence (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 829, closingRank: 995 },
                FEMALE_ONLY: { openingRank: 2228, closingRank: 2748 }
            },
            "Electronics and Communication Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1462, closingRank: 1658 },
                FEMALE_ONLY: { openingRank: 3688, closingRank: 4679 }
            },
            "Electronics and Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1686, closingRank: 2217 },
                FEMALE_ONLY: { openingRank: 5193, closingRank: 6141 }
            },
            "Energy Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4960, closingRank: 5920 },
                FEMALE_ONLY: { openingRank: 9754, closingRank: 11615 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4302, closingRank: 5686 },
                FEMALE_ONLY: { openingRank: 10217, closingRank: 14111 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 722, closingRank: 1021 },
                FEMALE_ONLY: { openingRank: 2578, closingRank: 3350 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3130, closingRank: 4523 },
                FEMALE_ONLY: { openingRank: 7018, closingRank: 12046 }
            }
        },
        "Indian Institute of Technology Bhilai": {
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3471, closingRank: 6516 },
                FEMALE_ONLY: { openingRank: 10240, closingRank: 11544 }
            },
            "Data Science and Artificial Intelligence (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 6043, closingRank: 7570 },
                FEMALE_ONLY: { openingRank: 12695, closingRank: 14348 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 7987, closingRank: 10709 },
                FEMALE_ONLY: { openingRank: 16917, closingRank: 17772 }
            },
            "Electronics and Communication Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 8375, closingRank: 9472 },
                FEMALE_ONLY: { openingRank: 15017, closingRank: 15657 }
            },
            "Materials Science and Metallurgical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 15066, closingRank: 15871 },
                FEMALE_ONLY: { openingRank: 25106, closingRank: 25107 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 11065, closingRank: 13137 },
                FEMALE_ONLY: { openingRank: 21738, closingRank: 23440 }
            },
            "Mechatronics Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 8535, closingRank: 10843 },
                FEMALE_ONLY: { openingRank: 15399, closingRank: 15399 }
            }
        },
        "Indian Institute of Technology Goa": {
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4070, closingRank: 5371 },
                FEMALE_ONLY: { openingRank: 10256, closingRank: 11151 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 7765, closingRank: 9603 },
                FEMALE_ONLY: { openingRank: 15164, closingRank: 16560 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4928, closingRank: 6685 },
                FEMALE_ONLY: { openingRank: 12515, closingRank: 13381 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 10277, closingRank: 12066 },
                FEMALE_ONLY: { openingRank: 19611, closingRank: 20054 }
            }
        },
        "Indian Institute of Technology Palakkad": {
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 12874, closingRank: 15812 },
                FEMALE_ONLY: { openingRank: 19444, closingRank: 23384 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4837, closingRank: 6199 },
                FEMALE_ONLY: { openingRank: 8303, closingRank: 9127 }
            },
            "Data Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 6267, closingRank: 8084 },
                FEMALE_ONLY: { openingRank: 12138, closingRank: 13283 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 8381, closingRank: 9625 },
                FEMALE_ONLY: { openingRank: 12222, closingRank: 15014 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 10901, closingRank: 12540 },
                FEMALE_ONLY: { openingRank: 15990, closingRank: 21578 }
            }
        },
        "Indian Institute of Technology Tirupati": {
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 12624, closingRank: 14341 },
                FEMALE_ONLY: { openingRank: 16379, closingRank: 21110 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 11383, closingRank: 15429 },
                FEMALE_ONLY: { openingRank: 21139, closingRank: 23179 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1915, closingRank: 5024 },
                FEMALE_ONLY: { openingRank: 5737, closingRank: 6324 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 6236, closingRank: 8816 },
                FEMALE_ONLY: { openingRank: 7711, closingRank: 12402 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 9589, closingRank: 12605 },
                FEMALE_ONLY: { openingRank: 17187, closingRank: 17187 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 9340, closingRank: 11509 },
                FEMALE_ONLY: { openingRank: 14969, closingRank: 20361 }
            }
        },
        "Indian Institute of Technology Jammu": {
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 12943, closingRank: 15048 },
                FEMALE_ONLY: { openingRank: 18930, closingRank: 21759 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 11454, closingRank: 15583 },
                FEMALE_ONLY: { openingRank: 23902, closingRank: 25172 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3412, closingRank: 6310 },
                FEMALE_ONLY: { openingRank: 8353, closingRank: 12108 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 7727, closingRank: 10005 },
                FEMALE_ONLY: { openingRank: 15039, closingRank: 18177 }
            },
            "Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 14903, closingRank: 16439 },
                FEMALE_ONLY: { openingRank: 24005, closingRank: 25778 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 6555, closingRank: 7956 },
                FEMALE_ONLY: { openingRank: 12130, closingRank: 14105 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 10912, closingRank: 12483 },
                FEMALE_ONLY: { openingRank: 21564, closingRank: 23887 }
            }
        },
        "Indian Institute of Technology Dharwad": {
            "Chemical and Biochemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 14948, closingRank: 15739 },
                FEMALE_ONLY: { openingRank: 24344, closingRank: 24506 }
            },
            "Civil and Infrastructure Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 14375, closingRank: 15945 },
                FEMALE_ONLY: { openingRank: 24560, closingRank: 25079 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3482, closingRank: 6375 },
                FEMALE_ONLY: { openingRank: 4989, closingRank: 11138 }
            },
            "Electrical and Electronics Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 7796, closingRank: 9778 },
                FEMALE_ONLY: { openingRank: 15007, closingRank: 15299 }
            },
            "Electronics and Communication Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4752, closingRank: 8772 },
                FEMALE_ONLY: { openingRank: 10983, closingRank: 14717 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 10655, closingRank: 12851 },
                FEMALE_ONLY: { openingRank: 20242, closingRank: 20440 }
            },
            "Interdisciplinary Sciences (5 Years, Bachelor of Science and Master of Science (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 9258, closingRank: 16968 },
                FEMALE_ONLY: { openingRank: 23467, closingRank: 25762 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4677, closingRank: 7381 },
                FEMALE_ONLY: { openingRank: 11879, closingRank: 12205 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 10317, closingRank: 13435 },
                FEMALE_ONLY: { openingRank: 19074, closingRank: 21591 }
            }
        }
        
    },
    EWS: {
        "Indian Institute of Technology Bhubaneswar": {
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2062, closingRank: 2267 },
                FEMALE_ONLY: { openingRank: 3638, closingRank: 4265 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 400, closingRank: 466 },
                FEMALE_ONLY: { openingRank: 1025, closingRank: 1025 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1013, closingRank: 1261 },
                FEMALE_ONLY: { openingRank: 2194, closingRank: 2249 }
            },
            "Electronics and Communication Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 601, closingRank: 738 },
                FEMALE_ONLY: { openingRank: 1941, closingRank: 1941 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1846, closingRank: 1978 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1400, closingRank: 1639 },
                FEMALE_ONLY: { openingRank: 3122, closingRank: 3236 }
            },
            "Metallurgical and Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2301, closingRank: 2373 },
                FEMALE_ONLY: { openingRank: 4185, closingRank: 4185 }
            }
        },
        "Indian Institute of Technology Bombay": {
            "Aerospace Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 327, closingRank: 618 },
                FEMALE_ONLY: { openingRank: 1050, closingRank: 1409 }
            },
            "BS in Mathematics (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 360, closingRank: 360 },
                FEMALE_ONLY: { openingRank: 1490, closingRank: 1490 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 390, closingRank: 485 },
                FEMALE_ONLY: { openingRank: 927, closingRank: 1438 }
            },
            "Chemistry (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 1175, closingRank: 1338 },
                FEMALE_ONLY: { openingRank: 2637, closingRank: 2637 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 559, closingRank: 769 },
                FEMALE_ONLY: { openingRank: 1725, closingRank: 2029 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 7, closingRank: 23 },
                FEMALE_ONLY: { openingRank: 43, closingRank: 79 }
            },
            "Economics (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 398, closingRank: 525 },
                FEMALE_ONLY: { openingRank: 920, closingRank: 920 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 57, closingRank: 116 },
                FEMALE_ONLY: { openingRank: 208, closingRank: 455 }
            },
            "Electrical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 183, closingRank: 199 },
                FEMALE_ONLY: { openingRank: 558, closingRank: 753 }
            },
            "Energy Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 490, closingRank: 568 },
                FEMALE_ONLY: { openingRank: 1691, closingRank: 1691 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 442, closingRank: 567 },
                FEMALE_ONLY: { openingRank: 1410, closingRank: 1410 }
            },
            "Environmental Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 935, closingRank: 1060 },
                FEMALE_ONLY: { openingRank: 2019, closingRank: 2019 }
            },
            "Industrial Engineering and Operations Research (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 279, closingRank: 303 },
                FEMALE_ONLY: { openingRank: 706, closingRank: 706 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 164, closingRank: 367 },
                FEMALE_ONLY: { openingRank: 968, closingRank: 1319 }
            },
            "Metallurgical Engineering and Materials Science (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 624, closingRank: 907 },
                FEMALE_ONLY: { openingRank: 1585, closingRank: 1723 }
            }
        },
        "Indian Institute of Technology Mandi": {
            "B.Tech in General Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1590, closingRank: 1854 },
                FEMALE_ONLY: { openingRank: 3230, closingRank: 3230 }
            },
            "B.Tech in Materials Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2113, closingRank: 2174 },
                FEMALE_ONLY: { openingRank: 3969, closingRank: 3969 }
            },
            "B.Tech in Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 671, closingRank: 679 },
                FEMALE_ONLY: { openingRank: 1517, closingRank: 1517 }
            },
            "B.Tech in Microelectronics & VLSI (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 969, closingRank: 1093 },
                FEMALE_ONLY: { openingRank: 2281, closingRank: 2281 }
            },
            "Bio Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2124, closingRank: 2215 },
                FEMALE_ONLY: { openingRank: 4493, closingRank: 4493 }
            },
            "BS in Chemical Sciences (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 2353, closingRank: 2487 },
                FEMALE_ONLY: { openingRank: 4093, closingRank: 4093 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1796, closingRank: 1953 },
                FEMALE_ONLY: { openingRank: 3738, closingRank: 3738 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 330, closingRank: 489 },
                FEMALE_ONLY: { openingRank: 825, closingRank: 1058 }
            },
            "Data Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 529, closingRank: 595 },
                FEMALE_ONLY: { openingRank: 1401, closingRank: 1401 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 855, closingRank: 1188 },
                FEMALE_ONLY: { openingRank: 2285, closingRank: 2285 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1885, closingRank: 1958 },
                FEMALE_ONLY: { openingRank: 3601, closingRank: 3601 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1470, closingRank: 1676 },
                FEMALE_ONLY: { openingRank: 3723, closingRank: 3723 }
            }
        },
        "Indian Institute of Technology Delhi": {
            "Biotechnology and Biochemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 961, closingRank: 1040 },
                FEMALE_ONLY: { openingRank: 2000, closingRank: 2341 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 283, closingRank: 474 },
                FEMALE_ONLY: { openingRank: 1308, closingRank: 1358 }
            },
            "Chemical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 494, closingRank: 594 },
                FEMALE_ONLY: { openingRank: 2232, closingRank: 2232 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 580, closingRank: 778 },
                FEMALE_ONLY: { openingRank: 1688, closingRank: 1972 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 24, closingRank: 35 },
                FEMALE_ONLY: { openingRank: 108, closingRank: 145 }
            },
            "Computer Science and Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 40, closingRank: 54 },
                FEMALE_ONLY: { openingRank: 238, closingRank: 238 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 118, closingRank: 156 },
                FEMALE_ONLY: { openingRank: 478, closingRank: 554 }
            },
            "Electrical Engineering (Power and Automation) (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 162, closingRank: 214 },
                FEMALE_ONLY: { openingRank: 700, closingRank: 700 }
            },
            "Energy Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 503, closingRank: 565 },
                FEMALE_ONLY: { openingRank: 1137, closingRank: 1137 }
            },
            "Engineering and Computational Mechanics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 260, closingRank: 307 },
                FEMALE_ONLY: { openingRank: 1000, closingRank: 1000 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 600, closingRank: 715 },
                FEMALE_ONLY: { openingRank: 2137, closingRank: 2137 }
            },
            "Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 598, closingRank: 928 },
                FEMALE_ONLY: { openingRank: 2233, closingRank: 2233 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 38, closingRank: 74 },
                FEMALE_ONLY: { openingRank: 374, closingRank: 417 }
            },
            "Mathematics and Computing (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 78, closingRank: 84 },
                FEMALE_ONLY: { openingRank: 645, closingRank: 645 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 316, closingRank: 420 },
                FEMALE_ONLY: { openingRank: 985, closingRank: 1114 }
            },
            "Production and Industrial Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 537, closingRank: 722 },
                FEMALE_ONLY: { openingRank: 1596, closingRank: 1734 }
            },
            "Textile Technology (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 956, closingRank: 1215 },
                FEMALE_ONLY: { openingRank: 2604, closingRank: 2605 }
            }
        },
        "Indian Institute of Technology Indore": {
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1326, closingRank: 1402 },
                FEMALE_ONLY: { openingRank: 2385, closingRank: 2385 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1299, closingRank: 1474 },
                FEMALE_ONLY: { openingRank: 2775, closingRank: 2775 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 163, closingRank: 218 },
                FEMALE_ONLY: { openingRank: 716, closingRank: 749 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 451, closingRank: 744 },
                FEMALE_ONLY: { openingRank: 1460, closingRank: 1579 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1302, closingRank: 1511 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 232, closingRank: 261 },
                FEMALE_ONLY: { openingRank: 901, closingRank: 901 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 824, closingRank: 1173 },
                FEMALE_ONLY: { openingRank: 2103, closingRank: 2509 }
            },
            "Metallurgical Engineering and Materials Science (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1577, closingRank: 1821 },
                FEMALE_ONLY: { openingRank: 2989, closingRank: 2989 }
            },
            "Space Sciences and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1077, closingRank: 1307 }
            }
        },
        "Indian Institute of Technology Kharagpur": {
            "Aerospace Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 628, closingRank: 989 },
                FEMALE_ONLY: { openingRank: 2021, closingRank: 2021 }
            },
            "Agricultural and Food Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1529, closingRank: 1744 },
                FEMALE_ONLY: { openingRank: 3247, closingRank: 3462 }
            },
            "Applied Geology (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 1913, closingRank: 2100 },
                FEMALE_ONLY: { openingRank: 4291, closingRank: 4291 }
            },
            "Architecture (5 Years, Bachelor of Architecture)": {
                GENDER_NEUTRAL: { openingRank: 3043, closingRank: 3311 },
                FEMALE_ONLY: { openingRank: 4976, closingRank: 4976 }
            },
            "Artificial Intelligence (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 120, closingRank: 138 },
                FEMALE_ONLY: { openingRank: 355, closingRank: 355 }
            },
            "Biotechnology and Biochemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1371, closingRank: 1415 },
                FEMALE_ONLY: { openingRank: 3189, closingRank: 3189 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 710, closingRank: 911 },
                FEMALE_ONLY: { openingRank: 1858, closingRank: 2117 }
            },
            "Chemistry (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 1742, closingRank: 1934 },
                FEMALE_ONLY: { openingRank: 4190, closingRank: 4190 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1032, closingRank: 1214 },
                FEMALE_ONLY: { openingRank: 2357, closingRank: 2478 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 53, closingRank: 67 },
                FEMALE_ONLY: { openingRank: 171, closingRank: 306 }
            },
            "Economics (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 698, closingRank: 986 },
                FEMALE_ONLY: { openingRank: 1971, closingRank: 1971 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 268, closingRank: 349 },
                FEMALE_ONLY: { openingRank: 847, closingRank: 974 }
            },
            "Electronics and Electrical Communication Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 185, closingRank: 228 },
                FEMALE_ONLY: { openingRank: 519, closingRank: 802 }
            },
            "Exploration Geophysics (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 1877, closingRank: 2058 },
                FEMALE_ONLY: { openingRank: 4289, closingRank: 4289 }
            },
            "Industrial and Systems Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 518, closingRank: 772 },
                FEMALE_ONLY: { openingRank: 1665, closingRank: 1665 }
            },
            "Instrumentation Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 403, closingRank: 510 },
                FEMALE_ONLY: { openingRank: 1663, closingRank: 1663 }
            },
            "Manufacturing Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 934, closingRank: 1328 },
                FEMALE_ONLY: { openingRank: 2407, closingRank: 2407 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 151, closingRank: 254 },
                FEMALE_ONLY: { openingRank: 757, closingRank: 757 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 584, closingRank: 703 },
                FEMALE_ONLY: { openingRank: 1435, closingRank: 1864 }
            },
            "Metallurgical and Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1325, closingRank: 1359 },
                FEMALE_ONLY: { openingRank: 2697, closingRank: 2801 }
            },
            "Mining Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1420, closingRank: 1572 },
                FEMALE_ONLY: { openingRank: 3206, closingRank: 3429 }
            },
            "Ocean Engineering and Naval Architecture (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1441, closingRank: 1695 },
                FEMALE_ONLY: { openingRank: 3390, closingRank: 3741 }
            },
            "Physics (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 1478, closingRank: 1701 },
                FEMALE_ONLY: { openingRank: 3668, closingRank: 3668 }
            }
        },
        "Indian Institute of Technology Hyderabad": {
            "Artificial Intelligence (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 114, closingRank: 127 },
                FEMALE_ONLY: { openingRank: 372, closingRank: 372 }
            },
            "Biomedical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1502, closingRank: 1636 }
            },
            "Biotechnology and Bioinformatics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1551, closingRank: 1632 },
                FEMALE_ONLY: { openingRank: 2904, closingRank: 2904 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 889, closingRank: 1021 },
                FEMALE_ONLY: { openingRank: 2086, closingRank: 2086 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1044, closingRank: 1331 },
                FEMALE_ONLY: { openingRank: 2260, closingRank: 2260 }
            },
            "Computational Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 272, closingRank: 272 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 91, closingRank: 112 },
                FEMALE_ONLY: { openingRank: 356, closingRank: 356 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 290, closingRank: 387 },
                FEMALE_ONLY: { openingRank: 723, closingRank: 723 }
            },
            "Electrical Engineering (IC Design and Technology) (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 321, closingRank: 350 },
                FEMALE_ONLY: { openingRank: 868, closingRank: 868 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1004, closingRank: 1180 },
                FEMALE_ONLY: { openingRank: 1997, closingRank: 1997 }
            },
            "Engineering Science (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 536, closingRank: 654 },
                FEMALE_ONLY: { openingRank: 1830, closingRank: 1830 }
            },
            "Industrial Chemistry (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1755, closingRank: 1799 },
                FEMALE_ONLY: { openingRank: 3018, closingRank: 3018 }
            },
            "Materials Science and Metallurgical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1344, closingRank: 1422 },
                FEMALE_ONLY: { openingRank: 2499, closingRank: 2499 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 147, closingRank: 158 },
                FEMALE_ONLY: { openingRank: 502, closingRank: 502 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 689, closingRank: 786 },
                FEMALE_ONLY: { openingRank: 1868, closingRank: 1868 }
            }
        },
        "Indian Institute of Technology Jodhpur": {
            "Artificial Intelligence and Data Science (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 509, closingRank: 555 },
                FEMALE_ONLY: { openingRank: 1537, closingRank: 1587 }
            },
            "Bio Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2098, closingRank: 2295 },
                FEMALE_ONLY: { openingRank: 3966, closingRank: 4419 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1625, closingRank: 1782 },
                FEMALE_ONLY: { openingRank: 3246, closingRank: 3246 }
            },
            "Chemistry with Specialization (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 2437, closingRank: 2491 }
            },
            "Civil and Infrastructure Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1905, closingRank: 2031 },
                FEMALE_ONLY: { openingRank: 4153, closingRank: 4153 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 348, closingRank: 416 },
                FEMALE_ONLY: { openingRank: 1117, closingRank: 1150 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 869, closingRank: 1149 },
                FEMALE_ONLY: { openingRank: 1718, closingRank: 1718 }
            },
            "Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1954, closingRank: 2211 },
                FEMALE_ONLY: { openingRank: 4299, closingRank: 4299 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1355, closingRank: 1616 },
                FEMALE_ONLY: { openingRank: 3141, closingRank: 3315 }
            },
            "Physics with Specialization (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 2395, closingRank: 2420 }
            }
        },
        "Indian Institute of Technology Kanpur": {
            "Aerospace Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 629, closingRank: 875 },
                FEMALE_ONLY: { openingRank: 1917, closingRank: 1917 }
            },
            "Biological Sciences and Bioengineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1273, closingRank: 1341 },
                FEMALE_ONLY: { openingRank: 2519, closingRank: 2519 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 543, closingRank: 707 },
                FEMALE_ONLY: { openingRank: 1482, closingRank: 1661 }
            },
            "Chemistry (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 1472, closingRank: 1650 },
                FEMALE_ONLY: { openingRank: 3744, closingRank: 3744 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 806, closingRank: 1020 },
                FEMALE_ONLY: { openingRank: 2054, closingRank: 2293 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 28, closingRank: 51 },
                FEMALE_ONLY: { openingRank: 150, closingRank: 294 }
            },
            "Earth Sciences (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 1534, closingRank: 1627 },
                FEMALE_ONLY: { openingRank: 2942, closingRank: 2942 }
            },
            "Economics (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 569, closingRank: 690 },
                FEMALE_ONLY: { openingRank: 1548, closingRank: 1548 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 193, closingRank: 259 },
                FEMALE_ONLY: { openingRank: 702, closingRank: 859 }
            },
            "Materials Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 955, closingRank: 1258 },
                FEMALE_ONLY: { openingRank: 2264, closingRank: 2558 }
            },
            "Mathematics and Scientific Computing (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 111, closingRank: 209 },
                FEMALE_ONLY: { openingRank: 607, closingRank: 607 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 386, closingRank: 506 },
                FEMALE_ONLY: { openingRank: 1499, closingRank: 1686 }
            },
            "Physics (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 1135, closingRank: 1436 },
                FEMALE_ONLY: { openingRank: 2897, closingRank: 2897 }
            },
            "Statistics and Data Science (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 160, closingRank: 207 },
                FEMALE_ONLY: { openingRank: 800, closingRank: 800 }
            }
        },
        "Indian Institute of Technology Madras": {
            "Aerospace Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 760, closingRank: 837 },
                FEMALE_ONLY: { openingRank: 1232, closingRank: 1232 }
            },
            "Aerospace Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 883, closingRank: 883 }
            },
            "Artificial Intelligence and Data Analytics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 80, closingRank: 104 },
                FEMALE_ONLY: { openingRank: 298, closingRank: 298 }
            },
            "Biological Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1142, closingRank: 1384 },
                FEMALE_ONLY: { openingRank: 2205, closingRank: 2205 }
            },
            "Biological Science (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 1561, closingRank: 1743 },
                FEMALE_ONLY: { openingRank: 2996, closingRank: 2996 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 643, closingRank: 784 },
                FEMALE_ONLY: { openingRank: 1306, closingRank: 1843 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 951, closingRank: 1111 },
                FEMALE_ONLY: { openingRank: 1884, closingRank: 1945 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 17, closingRank: 42 },
                FEMALE_ONLY: { openingRank: 109, closingRank: 129 }
            },
            "Earth Sciences (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 1534, closingRank: 1627 },
                FEMALE_ONLY: { openingRank: 2942, closingRank: 2942 }
            },
            "Economics (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 569, closingRank: 690 },
                FEMALE_ONLY: { openingRank: 1548, closingRank: 1548 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 105, closingRank: 178 },
                FEMALE_ONLY: { openingRank: 468, closingRank: 539 }
            },
            "Engineering Design (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 790, closingRank: 1235 },
                FEMALE_ONLY: { openingRank: 2744, closingRank: 2744 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 342, closingRank: 803 },
                FEMALE_ONLY: { openingRank: 2082, closingRank: 2082 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 359, closingRank: 577 },
                FEMALE_ONLY: { openingRank: 845, closingRank: 1385 }
            },
            "Metallurgical and Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1019, closingRank: 1263 },
                FEMALE_ONLY: { openingRank: 2109, closingRank: 2109 }
            },
            "Naval Architecture and Ocean Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1084, closingRank: 1568 },
                FEMALE_ONLY: { openingRank: 2710, closingRank: 2807 }
            },
            "Physics (5 Years, Bachelor of Science and Master of Science (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 942, closingRank: 942 }
            }
        },
        "Indian Institute of Technology Gandhinagar": {
            "Artificial Intelligence (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 305, closingRank: 361 },
                FEMALE_ONLY: { openingRank: 1182, closingRank: 1182 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1281, closingRank: 1553 },
                FEMALE_ONLY: { openingRank: 3039, closingRank: 3039 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1563, closingRank: 1761 },
                FEMALE_ONLY: { openingRank: 2965, closingRank: 2965 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 222, closingRank: 264 },
                FEMALE_ONLY: { openingRank: 770, closingRank: 770 }
            },
            "Computer Science and Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 394, closingRank: 394 },
                FEMALE_ONLY: { openingRank: 1163, closingRank: 1163 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 767, closingRank: 842 },
                FEMALE_ONLY: { openingRank: 1697, closingRank: 1697 }
            },
            "Electrical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 904, closingRank: 904 },
                FEMALE_ONLY: { openingRank: 1791, closingRank: 1791 }
            },
            "Integrated Circuit Design & Technology (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 527, closingRank: 747 },
                FEMALE_ONLY: { openingRank: 1282, closingRank: 1282 }
            },
            "Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1825, closingRank: 1891 },
                FEMALE_ONLY: { openingRank: 3708, closingRank: 3708 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 953, closingRank: 1217 },
                FEMALE_ONLY: { openingRank: 2705, closingRank: 2705 }
            },
            "Mechanical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1350, closingRank: 1489 },
                FEMALE_ONLY: { openingRank: 2795, closingRank: 2795 }
            }
        },
        "Indian Institute of Technology Patna": {
            "Artificial Intelligence and Data Science (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 538, closingRank: 611 },
                FEMALE_ONLY: { openingRank: 1322, closingRank: 1322 }
            },
            "B. Tech in CE. - M. Tech. in Geotechnical Engineering (5 Years, B.Tech. + M.Tech./MS (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 2382, closingRank: 2382 }
            },
            "B. Tech in CE. - M. Tech. in Structural Engineering (5 Years, B.Tech. + M.Tech./MS (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 2375, closingRank: 2375 }
            },
            "B. Tech. (CSE) and M.Tech in CSE (5 Years, B.Tech. + M.Tech./MS (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 667, closingRank: 667 }
            },
            "B. Tech. (ECE) -M. Tech. in VLSI (5 Years, B.Tech. + M.Tech./MS (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 991, closingRank: 991 }
            },
            "B. Tech. (EEE)-M. Tech. in (Power & Control) (5 Years, B.Tech. + M.Tech./MS (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1192, closingRank: 1192 }
            },
            "B. Tech. (Mathematics & Computing) M. Tech. in (Mathematics & Computing) (5 Years, B.Tech. + M.Tech./MS (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 714, closingRank: 714 }
            },
            "B. Tech. (ME) - M. Tech. in Mechatronics (5 Years, B.Tech. + M.Tech./MS (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1907, closingRank: 1907 }
            },
            "B.Tech (Chemical Science and Technology) - MBA in Hospital and Health Care Management (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 2461, closingRank: 2461 }
            },
            "B.Tech (Civil Engineering) - MBA (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 2292, closingRank: 2292 }
            },
            "B.Tech (Electrical and Electronics Engineering) - MBA (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1337, closingRank: 1337 }
            },
            "B.Tech (Electronics and Communication Engineering) - MBA in Hospital and Healthcare Management (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1186, closingRank: 1186 }
            },
            "B.Tech (Engineering Physics) - MBA (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 2199, closingRank: 2199 }
            },
            "B.Tech (Mechanical Engineering) - MBA (IIM Mumbai) (5 Years, Bachelor of Technology and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1595, closingRank: 1703 }
            },
            "B.Tech. in Electronics and Communication Engineering and M.Tech. in Communication Systems (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 926, closingRank: 926 }
            },
            "BS in Economics with MBA (IIM Bodh Gaya) (5 Years, Bachelor of Science and MBA (Dual Degree))": {
                FEMALE_ONLY: { openingRank: 3944, closingRank: 3944 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1726, closingRank: 1940 },
                FEMALE_ONLY: { openingRank: 3395, closingRank: 3395 }
            },
            "Chemical Science and Technology (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1985, closingRank: 2201 },
                FEMALE_ONLY: { openingRank: 3779, closingRank: 3779 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2040, closingRank: 2127 },
                FEMALE_ONLY: { openingRank: 3967, closingRank: 3967 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 380, closingRank: 445 },
                FEMALE_ONLY: { openingRank: 994, closingRank: 1301 }
            },
            "Economics (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 2055, closingRank: 2083 },
                FEMALE_ONLY: { openingRank: 4441, closingRank: 4441 }
            },
            "Electrical and Electronics Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 998, closingRank: 1132 },
                FEMALE_ONLY: { openingRank: 2304, closingRank: 2304 }
            },
            "Electronics and Communication Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 725, closingRank: 910 },
                FEMALE_ONLY: { openingRank: 2145, closingRank: 2145 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2030, closingRank: 2195 },
                FEMALE_ONLY: { openingRank: 3768, closingRank: 3768 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 630, closingRank: 697 },
                FEMALE_ONLY: { openingRank: 1874, closingRank: 1874 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1592, closingRank: 1700 },
                FEMALE_ONLY: { openingRank: 3362, closingRank: 3386 }
            },
            "Metallurgical and Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2146, closingRank: 2216 },
                FEMALE_ONLY: { openingRank: 4022, closingRank: 4022 }
            }
        },
        "Indian Institute of Technology Roorkee": {
            "Architecture (5 Years, Bachelor of Architecture)": {
                GENDER_NEUTRAL: { openingRank: 2916, closingRank: 2926 },
                FEMALE_ONLY: { openingRank: 4599, closingRank: 4599 }
            },
            "Biosciences and Bioengineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1389, closingRank: 1398 },
                FEMALE_ONLY: { openingRank: 2617, closingRank: 2617 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 701, closingRank: 836 },
                FEMALE_ONLY: { openingRank: 1588, closingRank: 2059 }
            },
            "Chemical Sciences (5 Years, Bachelor of Science and Master of Science (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1647, closingRank: 1840 },
                FEMALE_ONLY: { openingRank: 3547, closingRank: 3547 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 863, closingRank: 1154 },
                FEMALE_ONLY: { openingRank: 2362, closingRank: 2537 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 56, closingRank: 90 },
                FEMALE_ONLY: { openingRank: 339, closingRank: 395 }
            },
            "Data Science and Artificial Intelligence (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 99, closingRank: 132 },
                FEMALE_ONLY: { openingRank: 477, closingRank: 477 }
            },
            "Economics (5 Years, Bachelor of Science and Master of Science (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 877, closingRank: 931 },
                FEMALE_ONLY: { openingRank: 2084, closingRank: 2084 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 287, closingRank: 385 },
                FEMALE_ONLY: { openingRank: 788, closingRank: 1042 }
            },
            "Electronics and Communication Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 181, closingRank: 265 },
                FEMALE_ONLY: { openingRank: 617, closingRank: 781 }
            },
            "Energy Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 909, closingRank: 1061 },
                FEMALE_ONLY: { openingRank: 2302, closingRank: 2302 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 762, closingRank: 1208 },
                FEMALE_ONLY: { openingRank: 2298, closingRank: 2298 }
            },
            "Geological Technology (5 Years, Integrated Master of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1505, closingRank: 1530 },
                FEMALE_ONLY: { openingRank: 3367, closingRank: 3367 }
            },
            "Geophysical Technology (5 Years, Integrated Master of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1233, closingRank: 1496 },
                FEMALE_ONLY: { openingRank: 3489, closingRank: 3489 }
            },
            "Mathematics & Computing (5 Years, Bachelor of Science and Master of Science (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 255, closingRank: 270 },
                FEMALE_ONLY: { openingRank: 876, closingRank: 876 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 513, closingRank: 686 },
                FEMALE_ONLY: { openingRank: 1879, closingRank: 2091 }
            },
            "Metallurgical and Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1185, closingRank: 1290 },
                FEMALE_ONLY: { openingRank: 2711, closingRank: 2838 }
            },
            "Physics (5 Years, Bachelor of Science and Master of Science (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1575, closingRank: 1619 },
                FEMALE_ONLY: { openingRank: 3729, closingRank: 3729 }
            },
            "Production and Industrial Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 891, closingRank: 1048 },
                FEMALE_ONLY: { openingRank: 2505, closingRank: 2505 }
            }
        },
        "Indian Institute of Technology (ISM) Dhanbad": {
            "Applied Geology (5 Years, Integrated Master of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2434, closingRank: 2459 },
                FEMALE_ONLY: { openingRank: 4733, closingRank: 4733 }
            },
            "Applied Geophysics (5 Years, Integrated Master of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2392, closingRank: 2502 },
                FEMALE_ONLY: { openingRank: 4591, closingRank: 4591 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1515, closingRank: 1674 },
                FEMALE_ONLY: { openingRank: 3300, closingRank: 3300 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1797, closingRank: 1950 },
                FEMALE_ONLY: { openingRank: 4263, closingRank: 4263 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 407, closingRank: 528 },
                FEMALE_ONLY: { openingRank: 1172, closingRank: 1361 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 970, closingRank: 1121 },
                FEMALE_ONLY: { openingRank: 2276, closingRank: 2283 }
            },
            "Electronics and Communication Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 759, closingRank: 880 },
                FEMALE_ONLY: { openingRank: 1855, closingRank: 2003 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1518, closingRank: 1557 },
                FEMALE_ONLY: { openingRank: 3510, closingRank: 3510 }
            },
            "Environmental Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2184, closingRank: 2355 },
                FEMALE_ONLY: { openingRank: 3917, closingRank: 3917 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 560, closingRank: 677 },
                FEMALE_ONLY: { openingRank: 2016, closingRank: 2016 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1354, closingRank: 1462 },
                FEMALE_ONLY: { openingRank: 2977, closingRank: 3036 }
            },
            "Mineral and Metallurgical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1992, closingRank: 2186 },
                FEMALE_ONLY: { openingRank: 3961, closingRank: 3961 }
            },
            "Mining Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2094, closingRank: 2282 },
                FEMALE_ONLY: { openingRank: 4285, closingRank: 4393 }
            },
            "Mining Machinery Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2177, closingRank: 2368 },
                FEMALE_ONLY: { openingRank: 4598, closingRank: 4598 }
            },
            "Petroleum Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1721, closingRank: 1919 },
                FEMALE_ONLY: { openingRank: 3342, closingRank: 3763 }
            }
        },
        "Indian Institute of Technology Ropar": {
            "Artificial Intelligence and Data Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 499, closingRank: 563 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1527, closingRank: 1631 },
                FEMALE_ONLY: { openingRank: 2873, closingRank: 2873 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1902, closingRank: 1949 },
                FEMALE_ONLY: { openingRank: 3714, closingRank: 3714 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 234, closingRank: 291 },
                FEMALE_ONLY: { openingRank: 818, closingRank: 1108 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 795, closingRank: 925 },
                FEMALE_ONLY: { openingRank: 2150, closingRank: 2438 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1543, closingRank: 1790 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 411, closingRank: 552 },
                FEMALE_ONLY: { openingRank: 1912, closingRank: 1912 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1241, closingRank: 1494 },
                FEMALE_ONLY: { openingRank: 3095, closingRank: 3095 }
            },
            "Metallurgical and Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2134, closingRank: 2208 }
            }
        },
        "Indian Institute of Technology (BHU) Varanasi": {
            "Architecture (5 Years, Bachelor of Architecture)": {
                GENDER_NEUTRAL: { openingRank: 3439, closingRank: 3467 }
            },
            "Biochemical Engineering with M.Tech. in Biochemical Engineering and Biotechnology (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1976, closingRank: 2090 }
            },
            "Bioengineering with M.Tech in Biomedical Technology (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 2061, closingRank: 2081 }
            },
            "Ceramic Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1838, closingRank: 2044 },
                FEMALE_ONLY: { openingRank: 3629, closingRank: 3629 }
            },
            "Ceramic Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 2222, closingRank: 2254 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1078, closingRank: 1314 },
                FEMALE_ONLY: { openingRank: 2608, closingRank: 2615 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1327, closingRank: 1426 },
                FEMALE_ONLY: { openingRank: 2829, closingRank: 2866 }
            },
            "Civil Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1646, closingRank: 1683 },
                FEMALE_ONLY: { openingRank: 3587, closingRank: 3587 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 142, closingRank: 187 },
                FEMALE_ONLY: { openingRank: 507, closingRank: 517 }
            },
            "Computer Science and Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 246, closingRank: 247 },
                FEMALE_ONLY: { openingRank: 1073, closingRank: 1073 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 505, closingRank: 604 },
                FEMALE_ONLY: { openingRank: 1411, closingRank: 1658 }
            },
            "Electrical Engineering with M.Tech. in Power Electronics (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 637, closingRank: 675 },
                FEMALE_ONLY: { openingRank: 2153, closingRank: 2153 }
            },
            "Electronics Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 401, closingRank: 492 },
                FEMALE_ONLY: { openingRank: 1119, closingRank: 1262 }
            },
            "Engineering Physics (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1692, closingRank: 1777 },
                FEMALE_ONLY: { openingRank: 4076, closingRank: 4076 }
            },
            "Industrial Chemistry (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 2077, closingRank: 2300 }
            },
            "Materials Science and Technology (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1827, closingRank: 1889 },
                FEMALE_ONLY: { openingRank: 3310, closingRank: 3310 }
            },
            "Mathematics and Computing (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 310, closingRank: 346 },
                FEMALE_ONLY: { openingRank: 1105, closingRank: 1105 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 865, closingRank: 1152 },
                FEMALE_ONLY: { openingRank: 2275, closingRank: 2594 }
            },
            "Mechanical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1244, closingRank: 1248 },
                FEMALE_ONLY: { openingRank: 3151, closingRank: 3151 }
            },
            "Metallurgical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1473, closingRank: 1714 },
                FEMALE_ONLY: { openingRank: 3003, closingRank: 3491 }
            },
            "Metallurgical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1888, closingRank: 1947 },
                FEMALE_ONLY: { openingRank: 4080, closingRank: 4080 }
            },
            "Mining Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1814, closingRank: 2014 },
                FEMALE_ONLY: { openingRank: 3647, closingRank: 3873 }
            },
            "Mining Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 2257, closingRank: 2351 }
            },
            "Pharmaceutical Engineering & Technology (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1900, closingRank: 2139 },
                FEMALE_ONLY: { openingRank: 3700, closingRank: 3994 }
            },
            "Pharmaceutical Engineering & Technology (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 2229, closingRank: 2363 }
            }
        },
        "Indian Institute of Technology Guwahati": {
            "Biosciences and Bioengineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1224, closingRank: 1522 },
                FEMALE_ONLY: { openingRank: 3055, closingRank: 3292 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 867, closingRank: 1046 },
                FEMALE_ONLY: { openingRank: 2203, closingRank: 2270 }
            },
            "Chemical Science and Technology (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1082, closingRank: 1198 },
                FEMALE_ONLY: { openingRank: 2349, closingRank: 2349 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1178, closingRank: 1300 },
                FEMALE_ONLY: { openingRank: 2545, closingRank: 2598 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 87, closingRank: 128 },
                FEMALE_ONLY: { openingRank: 419, closingRank: 419 }
            },
            "Data Science and Artificial Intelligence (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 134, closingRank: 157 },
                FEMALE_ONLY: { openingRank: 493, closingRank: 493 }
            },
            "Electronics and Communication Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 267, closingRank: 347 },
                FEMALE_ONLY: { openingRank: 915, closingRank: 990 }
            },
            "Electronics and Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 368, closingRank: 412 },
                FEMALE_ONLY: { openingRank: 1131, closingRank: 1131 }
            },
            "Energy Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1076, closingRank: 1109 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1007, closingRank: 1287 },
                FEMALE_ONLY: { openingRank: 2192, closingRank: 2192 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 161, closingRank: 180 },
                FEMALE_ONLY: { openingRank: 649, closingRank: 743 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 639, closingRank: 793 },
                FEMALE_ONLY: { openingRank: 1794, closingRank: 2141 }
            }
        },
        "Indian Institute of Technology Bhilai": {
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 914, closingRank: 1018 },
                FEMALE_ONLY: { openingRank: 2023, closingRank: 2023 }
            },
            "Data Science and Artificial Intelligence (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1086, closingRank: 1201 },
                FEMALE_ONLY: { openingRank: 2172, closingRank: 2172 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1516, closingRank: 1648 },
                FEMALE_ONLY: { openingRank: 2940, closingRank: 2940 }
            },
            "Electronics and Communication Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1265, closingRank: 1286 },
                FEMALE_ONLY: { openingRank: 2335, closingRank: 2335 }
            },
            "Materials Science and Metallurgical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2338, closingRank: 2378 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1787, closingRank: 2017 },
                FEMALE_ONLY: { openingRank: 3827, closingRank: 3827 }
            },
            "Mechatronics Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1739, closingRank: 1739 },
                FEMALE_ONLY: { openingRank: 3412, closingRank: 3412 }
            }
        },
            "Indian Institute of Technology Goa": {
                "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                    GENDER_NEUTRAL: { openingRank: 647, closingRank: 776 },
                    FEMALE_ONLY: { openingRank: 2155, closingRank: 2155 }
                },
                "Electrical Engineering (4 Years, Bachelor of Technology)": {
                    GENDER_NEUTRAL: { openingRank: 1366, closingRank: 1634 },
                    FEMALE_ONLY: { openingRank: 2597, closingRank: 2597 }
                },
                "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                    GENDER_NEUTRAL: { openingRank: 950, closingRank: 1138 }
                },
                "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                    GENDER_NEUTRAL: { openingRank: 1682, closingRank: 1781 },
                    FEMALE_ONLY: { openingRank: 3178, closingRank: 3178 }
                }
            },
            "Indian Institute of Technology Palakkad": {
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2242, closingRank: 2408 },
                FEMALE_ONLY: { openingRank: 4351, closingRank: 4351 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 794, closingRank: 819 },
                FEMALE_ONLY: { openingRank: 1841, closingRank: 1841 }
            },
            "Data Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1054, closingRank: 1176 },
                FEMALE_ONLY: { openingRank: 2033, closingRank: 2033 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1268, closingRank: 1498 },
                FEMALE_ONLY: { openingRank: 2247, closingRank: 2247 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1710, closingRank: 1897 },
                FEMALE_ONLY: { openingRank: 3701, closingRank: 3701 }
            }
        },
        "Indian Institute of Technology Tirupati": {
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2041, closingRank: 2324 },
                FEMALE_ONLY: { openingRank: 3426, closingRank: 3426 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2271, closingRank: 2374 },
                FEMALE_ONLY: { openingRank: 3528, closingRank: 3528 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 589, closingRank: 727 },
                FEMALE_ONLY: { openingRank: 913, closingRank: 913 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1271, closingRank: 1406 },
                FEMALE_ONLY: { openingRank: 2441, closingRank: 2441 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2123, closingRank: 2123 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1677, closingRank: 1758 },
                FEMALE_ONLY: { openingRank: 3045, closingRank: 3045 }
            }
        },
        "Indian Institute of Technology Jammu": {
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2104, closingRank: 2376 },
                FEMALE_ONLY: { openingRank: 3588, closingRank: 3588 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2391, closingRank: 2428 },
                FEMALE_ONLY: { openingRank: 4404, closingRank: 4404 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 831, closingRank: 945 },
                FEMALE_ONLY: { openingRank: 2119, closingRank: 2119 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1510, closingRank: 1745 },
                FEMALE_ONLY: { openingRank: 2830, closingRank: 2830 }
            },
            "Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2443, closingRank: 2472 },
                FEMALE_ONLY: { openingRank: 4659, closingRank: 4659 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1095, closingRank: 1191 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1925, closingRank: 1967 },
                FEMALE_ONLY: { openingRank: 3921, closingRank: 3921 }
            }
        },
        "Indian Institute of Technology Dharwad": {
            "Chemical and Biochemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2306, closingRank: 2463 },
                FEMALE_ONLY: { openingRank: 4558, closingRank: 4558 }
            },
            "Civil and Infrastructure Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2417, closingRank: 2422 },
                FEMALE_ONLY: { openingRank: 3922, closingRank: 3922 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 771, closingRank: 906 },
                FEMALE_ONLY: { openingRank: 1652, closingRank: 1652 }
            },
            "Electrical and Electronics Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1464, closingRank: 1567 },
                FEMALE_ONLY: { openingRank: 2840, closingRank: 2840 }
            },
            "Electronics and Communication Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1336, closingRank: 1458 },
                FEMALE_ONLY: { openingRank: 2122, closingRank: 2122 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2265, closingRank: 2339 },
                FEMALE_ONLY: { openingRank: 3749, closingRank: 3749 }
            },
            "Interdisciplinary Sciences (5 Years, Bachelor of Science and Master of Science (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 2473, closingRank: 2524 },
                FEMALE_ONLY: { openingRank: 4489, closingRank: 4489 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 885, closingRank: 1167 },
                FEMALE_ONLY: { openingRank: 2046, closingRank: 2046 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2024, closingRank: 2196 },
                FEMALE_ONLY: { openingRank: 3563, closingRank: 3563 }
            }
        }
    },
    OBC_NCL: {
        "Indian Institute of Technology Bhubaneswar": {
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4115, closingRank: 5231 },
                FEMALE_ONLY: { openingRank: 7450, closingRank: 8720 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 774, closingRank: 1237 },
                FEMALE_ONLY: { openingRank: 2107, closingRank: 3291 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2167, closingRank: 2876 },
                FEMALE_ONLY: { openingRank: 5899, closingRank: 6611 }
            },
            "Electronics and Communication Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1423, closingRank: 2026 },
                FEMALE_ONLY: { openingRank: 3327, closingRank: 3729 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3136, closingRank: 4378 },
                FEMALE_ONLY: { openingRank: 9267, closingRank: 9267 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3078, closingRank: 3885 },
                FEMALE_ONLY: { openingRank: 7053, closingRank: 7801 }
            },
            "Metallurgical and Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4730, closingRank: 5608 },
                FEMALE_ONLY: { openingRank: 9228, closingRank: 9228 }
            }
        },
        "Indian Institute of Technology Bombay": {
            "Aerospace Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 447, closingRank: 1577 },
                FEMALE_ONLY: { openingRank: 1935, closingRank: 3516 }
            },
            "BS in Mathematics (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 1106, closingRank: 1291 },
                FEMALE_ONLY: { openingRank: 3479, closingRank: 3479 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 953, closingRank: 1338 },
                FEMALE_ONLY: { openingRank: 2481, closingRank: 3197 }
            },
            "Chemistry (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 2780, closingRank: 3506 },
                FEMALE_ONLY: { openingRank: 7579, closingRank: 7754 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1076, closingRank: 1979 },
                FEMALE_ONLY: { openingRank: 3419, closingRank: 4709 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 5, closingRank: 50 },
                FEMALE_ONLY: { openingRank: 66, closingRank: 274 }
            },
            "Economics (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 618, closingRank: 1255 },
                FEMALE_ONLY: { openingRank: 1491, closingRank: 2705 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 131, closingRank: 325 },
                FEMALE_ONLY: { openingRank: 608, closingRank: 830 }
            },
            "Electrical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 379, closingRank: 571 },
                FEMALE_ONLY: { openingRank: 1006, closingRank: 1877 }
            },
            "Energy Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1300, closingRank: 1650 },
                FEMALE_ONLY: { openingRank: 3388, closingRank: 3824 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 970, closingRank: 1578 },
                FEMALE_ONLY: { openingRank: 2329, closingRank: 2854 }
            },
            "Environmental Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1601, closingRank: 2716 },
                FEMALE_ONLY: { openingRank: 5701, closingRank: 5973 }
            },
            "Industrial Engineering and Operations Research (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 401, closingRank: 1196 },
                FEMALE_ONLY: { openingRank: 2881, closingRank: 3817 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 462, closingRank: 958 },
                FEMALE_ONLY: { openingRank: 1265, closingRank: 2722 }
            },
            "Metallurgical Engineering and Materials Science (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1439, closingRank: 2207 },
                FEMALE_ONLY: { openingRank: 3446, closingRank: 5594 }
            }
        },
        "Indian Institute of Technology Mandi": {
            "B.Tech in General Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3195, closingRank: 4693 },
                FEMALE_ONLY: { openingRank: 7596, closingRank: 8700 }
            },
            "B.Tech in Materials Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 5151, closingRank: 5543 },
                FEMALE_ONLY: { openingRank: 8998, closingRank: 8998 }
            },
            "B.Tech in Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1441, closingRank: 1767 },
                FEMALE_ONLY: { openingRank: 3788, closingRank: 4641 }
            },
            "B.Tech in Microelectronics & VLSI (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2377, closingRank: 2943 },
                FEMALE_ONLY: { openingRank: 6343, closingRank: 6353 }
            },
            "Bio Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 5184, closingRank: 5698 }
            },
            "BS in Chemical Sciences (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 5803, closingRank: 6034 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4238, closingRank: 4726 },
                FEMALE_ONLY: { openingRank: 8450, closingRank: 9050 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 765, closingRank: 1274 },
                FEMALE_ONLY: { openingRank: 2698, closingRank: 3578 }
            },
            "Data Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1284, closingRank: 1679 },
                FEMALE_ONLY: { openingRank: 3683, closingRank: 4638 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2320, closingRank: 2932 },
                FEMALE_ONLY: { openingRank: 6754, closingRank: 7019 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4320, closingRank: 5006 },
                FEMALE_ONLY: { openingRank: 8869, closingRank: 8869 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3063, closingRank: 4112 },
                FEMALE_ONLY: { openingRank: 8440, closingRank: 8967 }
            }
        },
        "Indian Institute of Technology Delhi": {
            "Biotechnology and Biochemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1986, closingRank: 2749 },
                FEMALE_ONLY: { openingRank: 5747, closingRank: 7010 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 960, closingRank: 1303 },
                FEMALE_ONLY: { openingRank: 2912, closingRank: 3412 }
            },
            "Chemical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1424, closingRank: 2054 },
                FEMALE_ONLY: { openingRank: 3654, closingRank: 4525 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1056, closingRank: 2063 },
                FEMALE_ONLY: { openingRank: 4144, closingRank: 5280 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 39, closingRank: 89 },
                FEMALE_ONLY: { openingRank: 319, closingRank: 394 }
            },
            "Computer Science and Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 120, closingRank: 169 },
                FEMALE_ONLY: { openingRank: 417, closingRank: 587 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 237, closingRank: 422 },
                FEMALE_ONLY: { openingRank: 966, closingRank: 1549 }
            },
            "Electrical Engineering (Power and Automation) (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 428, closingRank: 510 },
                FEMALE_ONLY: { openingRank: 1595, closingRank: 1837 }
            },
            "Energy Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1362, closingRank: 1957 },
                FEMALE_ONLY: { openingRank: 4393, closingRank: 5132 }
            },
            "Engineering and Computational Mechanics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 190, closingRank: 640 },
                FEMALE_ONLY: { openingRank: 1854, closingRank: 2151 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1411, closingRank: 1917 },
                FEMALE_ONLY: { openingRank: 3523, closingRank: 4329 }
            },
            "Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2190, closingRank: 2504 },
                FEMALE_ONLY: { openingRank: 5821, closingRank: 6222 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 93, closingRank: 218 },
                FEMALE_ONLY: { openingRank: 589, closingRank: 757 }
            },
            "Mathematics and Computing (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 250, closingRank: 298 },
                FEMALE_ONLY: { openingRank: 779, closingRank: 1071 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 597, closingRank: 1010 },
                FEMALE_ONLY: { openingRank: 2267, closingRank: 3475 }
            },
            "Production and Industrial Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 879, closingRank: 2191 },
                FEMALE_ONLY: { openingRank: 5326, closingRank: 6191 }
            },
            "Textile Technology (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2665, closingRank: 3185 },
                FEMALE_ONLY: { openingRank: 5730, closingRank: 7737 }
            }
        },
        "Indian Institute of Technology Indore": {
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3015, closingRank: 3568 },
                FEMALE_ONLY: { openingRank: 6714, closingRank: 6965 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3390, closingRank: 3974 },
                FEMALE_ONLY: { openingRank: 6590, closingRank: 7849 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 301, closingRank: 649 },
                FEMALE_ONLY: { openingRank: 1053, closingRank: 1468 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1193, closingRank: 1648 },
                FEMALE_ONLY: { openingRank: 2688, closingRank: 4056 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3128, closingRank: 3618 },
                FEMALE_ONLY: { openingRank: 8144, closingRank: 8144 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 635, closingRank: 1064 },
                FEMALE_ONLY: { openingRank: 1807, closingRank: 2373 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2198, closingRank: 2993 },
                FEMALE_ONLY: { openingRank: 5542, closingRank: 6402 }
            },
            "Metallurgical Engineering and Materials Science (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3582, closingRank: 4524 },
                FEMALE_ONLY: { openingRank: 8322, closingRank: 8653 }
            },
            "Space Sciences and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1916, closingRank: 3159 },
                FEMALE_ONLY: { openingRank: 5795, closingRank: 5795 }
            }
        },
        "Indian Institute of Technology Kharagpur": {
            "Aerospace Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1741, closingRank: 2345 },
                FEMALE_ONLY: { openingRank: 4427, closingRank: 5661 }
            },
            "Agricultural and Food Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3191, closingRank: 4488 },
                FEMALE_ONLY: { openingRank: 8281, closingRank: 8557 }
            },
            "Applied Geology (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 4616, closingRank: 5493 }
            },
            "Architecture (5 Years, Bachelor of Architecture)": {
                GENDER_NEUTRAL: { openingRank: 6513, closingRank: 7772 }
            },
            "Artificial Intelligence (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 308, closingRank: 412 },
                FEMALE_ONLY: { openingRank: 924, closingRank: 1109 }
            },
            "Biotechnology and Biochemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3326, closingRank: 3797 },
                FEMALE_ONLY: { openingRank: 6514, closingRank: 7866 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1779, closingRank: 2388 },
                FEMALE_ONLY: { openingRank: 4348, closingRank: 5232 }
            },
            "Chemistry (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 4714, closingRank: 5375 },
                FEMALE_ONLY: { openingRank: 8798, closingRank: 9099 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2031, closingRank: 2991 },
                FEMALE_ONLY: { openingRank: 5456, closingRank: 6337 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 91, closingRank: 209 },
                FEMALE_ONLY: { openingRank: 396, closingRank: 601 }
            },
            "Economics (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 1941, closingRank: 2736 },
                FEMALE_ONLY: { openingRank: 5105, closingRank: 7383 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 719, closingRank: 944 },
                FEMALE_ONLY: { openingRank: 1657, closingRank: 2057 }
            },
            "Electronics and Electrical Communication Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 234, closingRank: 687 },
                FEMALE_ONLY: { openingRank: 977, closingRank: 1672 }
            },
            "Exploration Geophysics (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 4299, closingRank: 5104 },
                FEMALE_ONLY: { openingRank: 9049, closingRank: 9049 }
            },
            "Industrial and Systems Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1112, closingRank: 2307 },
                FEMALE_ONLY: { openingRank: 3669, closingRank: 5032 }
            },
            "Instrumentation Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1103, closingRank: 1302 },
                FEMALE_ONLY: { openingRank: 3385, closingRank: 3448 }
            },
            "Manufacturing Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2322, closingRank: 3292 },
                FEMALE_ONLY: { openingRank: 5944, closingRank: 6497 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 504, closingRank: 740 },
                FEMALE_ONLY: { openingRank: 1478, closingRank: 1883 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1137, closingRank: 1721 },
                FEMALE_ONLY: { openingRank: 3638, closingRank: 4493 }
            },
            "Metallurgical and Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2394, closingRank: 3378 },
                FEMALE_ONLY: { openingRank: 6844, closingRank: 7423 }
            },
            "Mining Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3031, closingRank: 4015 },
                FEMALE_ONLY: { openingRank: 8100, closingRank: 8519 }
            },
            "Ocean Engineering and Naval Architecture (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3313, closingRank: 4208 },
                FEMALE_ONLY: { openingRank: 7362, closingRank: 8540 }
            },
            "Physics (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 3604, closingRank: 4608 },
                FEMALE_ONLY: { openingRank: 7850, closingRank: 8776 }
            }
        },
        "Indian Institute of Technology Hyderabad": {
            "Artificial Intelligence (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 114, closingRank: 127 },
                FEMALE_ONLY: { openingRank: 372, closingRank: 372 }
            },
            "Biomedical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1502, closingRank: 1636 }
            },
            "Biotechnology and Bioinformatics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1551, closingRank: 1632 },
                FEMALE_ONLY: { openingRank: 2904, closingRank: 2904 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 889, closingRank: 1021 },
                FEMALE_ONLY: { openingRank: 2086, closingRank: 2086 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1044, closingRank: 1331 },
                FEMALE_ONLY: { openingRank: 2260, closingRank: 2260 }
            },
            "Computational Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 272, closingRank: 272 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 91, closingRank: 112 },
                FEMALE_ONLY: { openingRank: 356, closingRank: 356 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 290, closingRank: 387 },
                FEMALE_ONLY: { openingRank: 723, closingRank: 723 }
            },
            "Electrical Engineering (IC Design and Technology) (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 321, closingRank: 350 },
                FEMALE_ONLY: { openingRank: 868, closingRank: 868 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1004, closingRank: 1180 },
                FEMALE_ONLY: { openingRank: 1997, closingRank: 1997 }
            },
            "Engineering Science (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 536, closingRank: 654 },
                FEMALE_ONLY: { openingRank: 1830, closingRank: 1830 }
            },
            "Industrial Chemistry (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1755, closingRank: 1799 },
                FEMALE_ONLY: { openingRank: 3018, closingRank: 3018 }
            },
            "Materials Science and Metallurgical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1344, closingRank: 1422 },
                FEMALE_ONLY: { openingRank: 2499, closingRank: 2499 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 147, closingRank: 158 },
                FEMALE_ONLY: { openingRank: 502, closingRank: 502 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 689, closingRank: 786 },
                FEMALE_ONLY: { openingRank: 1868, closingRank: 1868 }
            }
        },
        "Indian Institute of Technology Jodhpur": {
            "Artificial Intelligence and Data Science (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1341, closingRank: 1722 },
                FEMALE_ONLY: { openingRank: 4169, closingRank: 4502 }
            },
            "Bio Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4754, closingRank: 5752 },
                FEMALE_ONLY: { openingRank: 9141, closingRank: 9141 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4259, closingRank: 4613 },
                FEMALE_ONLY: { openingRank: 8291, closingRank: 8539 }
            },
            "Chemistry with Specialization (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 5713, closingRank: 6013 }
            },
            "Civil and Infrastructure Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4108, closingRank: 4937 },
                FEMALE_ONLY: { openingRank: 9273, closingRank: 9273 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 735, closingRank: 1404 },
                FEMALE_ONLY: { openingRank: 2023, closingRank: 3361 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2316, closingRank: 2972 },
                FEMALE_ONLY: { openingRank: 6084, closingRank: 6785 }
            },
            "Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4948, closingRank: 5688 },
                FEMALE_ONLY: { openingRank: 8892, closingRank: 9279 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3320, closingRank: 4105 },
                FEMALE_ONLY: { openingRank: 8042, closingRank: 8755 }
            },
            "Physics with Specialization (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 4654, closingRank: 5792 }
            }
        },
        "Indian Institute of Technology Kanpur": {
            "Aerospace Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 863, closingRank: 1980 },
                FEMALE_ONLY: { openingRank: 3457, closingRank: 4326 }
            },
            "Biological Sciences and Bioengineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2995, closingRank: 3476 },
                FEMALE_ONLY: { openingRank: 6561, closingRank: 7371 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1402, closingRank: 2058 },
                FEMALE_ONLY: { openingRank: 3295, closingRank: 4628 }
            },
            "Chemistry (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 3173, closingRank: 4766 },
                FEMALE_ONLY: { openingRank: 7860, closingRank: 8578 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2168, closingRank: 2764 },
                FEMALE_ONLY: { openingRank: 5332, closingRank: 6704 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 61, closingRank: 132 },
                FEMALE_ONLY: { openingRank: 410, closingRank: 538 }
            },
            "Earth Sciences (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 3667, closingRank: 4562 },
                FEMALE_ONLY: { openingRank: 7778, closingRank: 8477 }
            },
            "Economics (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 1258, closingRank: 2051 },
                FEMALE_ONLY: { openingRank: 3436, closingRank: 4211 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 432, closingRank: 743 },
                FEMALE_ONLY: { openingRank: 1397, closingRank: 2426 }
            },
            "Materials Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2603, closingRank: 3126 },
                FEMALE_ONLY: { openingRank: 6390, closingRank: 7187 }
            },
            "Mathematics and Scientific Computing (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 352, closingRank: 673 },
                FEMALE_ONLY: { openingRank: 1295, closingRank: 2234 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1046, closingRank: 1392 },
                FEMALE_ONLY: { openingRank: 3631, closingRank: 4202 }
            },
            "Physics (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 2664, closingRank: 3602 },
                FEMALE_ONLY: { openingRank: 6209, closingRank: 7080 }
            },
            "Statistics and Data Science (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 486, closingRank: 714 },
                FEMALE_ONLY: { openingRank: 1611, closingRank: 1999 }
            }
        },
        "Indian Institute of Technology Madras": {
            "Aerospace Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 832, closingRank: 1655 },
                FEMALE_ONLY: { openingRank: 1452, closingRank: 3432 }
            },
            "Aerospace Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1395, closingRank: 1455 },
                FEMALE_ONLY: { openingRank: 3953, closingRank: 3953 }
            },
            "Artificial Intelligence and Data Analytics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 137, closingRank: 207 },
                FEMALE_ONLY: { openingRank: 306, closingRank: 503 }
            },
            "Biological Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2456, closingRank: 3364 },
                FEMALE_ONLY: { openingRank: 5526, closingRank: 6929 }
            },
            "Biological Science (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 4045, closingRank: 4682 },
                FEMALE_ONLY: { openingRank: 6950, closingRank: 7692 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 820, closingRank: 2042 },
                FEMALE_ONLY: { openingRank: 2636, closingRank: 3772 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1586, closingRank: 2592 },
                FEMALE_ONLY: { openingRank: 3477, closingRank: 5366 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 18, closingRank: 82 },
                FEMALE_ONLY: { openingRank: 288, closingRank: 344 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 122, closingRank: 407 },
                FEMALE_ONLY: { openingRank: 641, closingRank: 1063 }
            },
            "Engineering Design (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 933, closingRank: 1772 },
                FEMALE_ONLY: { openingRank: 2860, closingRank: 3896 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 385, closingRank: 1192 },
                FEMALE_ONLY: { openingRank: 2319, closingRank: 3046 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 509, closingRank: 1199 },
                FEMALE_ONLY: { openingRank: 2292, closingRank: 3442 }
            },
            "Metallurgical and Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2010, closingRank: 2463 },
                FEMALE_ONLY: { openingRank: 4498, closingRank: 5297 }
            },
            "Naval Architecture and Ocean Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2615, closingRank: 3210 },
                FEMALE_ONLY: { openingRank: 5654, closingRank: 6778 }
            },
            "Physics (5 Years, Bachelor of Science and Master of Science (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1804, closingRank: 2369 },
                FEMALE_ONLY: { openingRank: 5459, closingRank: 5459 }
            }
        },
        "Indian Institute of Technology Gandhinagar": {
            "Artificial Intelligence (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 908, closingRank: 1115 },
                FEMALE_ONLY: { openingRank: 2317, closingRank: 2534 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3134, closingRank: 3800 },
                FEMALE_ONLY: { openingRank: 6706, closingRank: 7934 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3093, closingRank: 4148 },
                FEMALE_ONLY: { openingRank: 8117, closingRank: 8173 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 411, closingRank: 750 },
                FEMALE_ONLY: { openingRank: 1602, closingRank: 1714 }
            },
            "Computer Science and Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 923, closingRank: 1048 },
                FEMALE_ONLY: { openingRank: 2950, closingRank: 2950 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1415, closingRank: 1930 },
                FEMALE_ONLY: { openingRank: 4489, closingRank: 4896 }
            },
            "Electrical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1806, closingRank: 2274 },
                FEMALE_ONLY: { openingRank: 5783, closingRank: 5783 }
            },
            "Integrated Circuit Design & Technology (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1347, closingRank: 2660 },
                FEMALE_ONLY: { openingRank: 4751, closingRank: 5545 }
            },
            "Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4192, closingRank: 4653 },
                FEMALE_ONLY: { openingRank: 8171, closingRank: 8171 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2646, closingRank: 3075 },
                FEMALE_ONLY: { openingRank: 6809, closingRank: 7095 }
            },
            "Mechanical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 3201, closingRank: 3498 },
                FEMALE_ONLY: { openingRank: 7139, closingRank: 7139 }
            }
        },
        "Indian Institute of Technology Patna": {
            "Artificial Intelligence and Data Science (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1209, closingRank: 1661 },
                FEMALE_ONLY: { openingRank: 3196, closingRank: 4132 }
            },
            "B. Tech in CE. - M. Tech. in Geotechnical Engineering (5 Years, B.Tech. + M.Tech./MS (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 5378, closingRank: 5517 }
            },
            "B. Tech in CE. - M. Tech. in Structural Engineering (5 Years, B.Tech. + M.Tech./MS (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 4591, closingRank: 5199 }
            },
            "B. Tech. (CSE) and M.Tech in CSE (5 Years, B.Tech. + M.Tech./MS (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1277, closingRank: 1541 }
            },
            "B. Tech. (ECE) -M. Tech. in VLSI (5 Years, B.Tech. + M.Tech./MS (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 2211, closingRank: 2215 },
                FEMALE_ONLY: { openingRank: 6902, closingRank: 6902 }
            },
            "B. Tech. (EEE)-M. Tech. in (Power & Control) (5 Years, B.Tech. + M.Tech./MS (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 3036, closingRank: 3084 },
                FEMALE_ONLY: { openingRank: 7167, closingRank: 7167 }
            },
            "B. Tech. (Mathematics & Computing) M. Tech. in (Mathematics & Computing) (5 Years, B.Tech. + M.Tech./MS (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 2014, closingRank: 2200 },
                FEMALE_ONLY: { openingRank: 4930, closingRank: 4930 }
            },
            "B. Tech. (ME) - M. Tech. in Mechatronics (5 Years, B.Tech. + M.Tech./MS (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 3449, closingRank: 3916 },
                FEMALE_ONLY: { openingRank: 8810, closingRank: 8810 }
            },
            "B.Tech (Artificial Intelligence and Data Science) - MBA in Digital Business Management (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1961, closingRank: 1961 },
                FEMALE_ONLY: { openingRank: 3612, closingRank: 3612 }
            },
            "B.Tech (Chemical Engineering) - MBA in Hospital and Health Care Management (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 4544, closingRank: 4544 }
            },
            "B.Tech (Chemical Science and Technology) - MBA in Hospital and Health Care Management (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 5396, closingRank: 5396 }
            },
            "B.Tech (Civil Engineering) - MBA (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 4971, closingRank: 4971 }
            },
            "B.Tech (Computer Science and Engineering) - MBA in Digital Business Management (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1183, closingRank: 1183 }
            },
            "B.Tech (Electrical and Electronics Engineering) - MBA (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 2622, closingRank: 2622 }
            },
            "B.Tech (Electronics and Communication Engineering) - MBA in Hospital and Healthcare Management (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 3094, closingRank: 3094 },
                FEMALE_ONLY: { openingRank: 4835, closingRank: 5603 }
            },
            "B.Tech (Engineering Physics) - MBA (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 4878, closingRank: 4878 }
            },
            "B.Tech (Mathematics and Computing) - MBA in Digital Business Management (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 2229, closingRank: 2229 },
                FEMALE_ONLY: { openingRank: 6341, closingRank: 6341 }
            },
            "B.Tech (Mechanical Engineering) - MBA (IIM Mumbai) (5 Years, Bachelor of Technology and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 2889, closingRank: 3250 },
                FEMALE_ONLY: { openingRank: 7457, closingRank: 7457 }
            },
            "B.Tech (Metallurgical and Materials Engineering) - MBA (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 4728, closingRank: 4728 }
            },
            "B.Tech. in Electronics and Communication Engineering and M.Tech. in Communication Systems (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 2372, closingRank: 2383 }
            },
            "BS in Economics with MBA (IIM Bodh Gaya) (5 Years, Bachelor of Science and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 3890, closingRank: 3890 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4236, closingRank: 4836 },
                FEMALE_ONLY: { openingRank: 8339, closingRank: 8805 }
            },
            "Chemical Science and Technology (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 5025, closingRank: 5437 },
                FEMALE_ONLY: { openingRank: 9036, closingRank: 9036 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4184, closingRank: 5194 },
                FEMALE_ONLY: { openingRank: 8731, closingRank: 9291 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 770, closingRank: 1135 },
                FEMALE_ONLY: { openingRank: 2522, closingRank: 2975 }
            },
            "Economics (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 4744, closingRank: 5527 }
            },
            "Electrical and Electronics Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2086, closingRank: 2695 },
                FEMALE_ONLY: { openingRank: 5822, closingRank: 6649 }
            },
            "Electronics and Communication Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1895, closingRank: 2197 },
                FEMALE_ONLY: { openingRank: 4835, closingRank: 5603 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4351, closingRank: 5206 },
                FEMALE_ONLY: { openingRank: 9150, closingRank: 9150 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1136, closingRank: 1939 },
                FEMALE_ONLY: { openingRank: 3657, closingRank: 4568 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3217, closingRank: 4099 },
                FEMALE_ONLY: { openingRank: 6356, closingRank: 8469 }
            },
            "Metallurgical and Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 5451, closingRank: 5706 }
            }
        },
        "Indian Institute of Technology Roorkee": {
            "Architecture (5 Years, Bachelor of Architecture)": {
                GENDER_NEUTRAL: { openingRank: 5379, closingRank: 6973 }
            },
            "Biosciences and Bioengineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3266, closingRank: 3549 },
                FEMALE_ONLY: { openingRank: 7685, closingRank: 8022 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1745, closingRank: 2386 },
                FEMALE_ONLY: { openingRank: 5014, closingRank: 5629 }
            },
            "Chemical Sciences (5 Years, Bachelor of Science and Master of Science (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 3438, closingRank: 4818 },
                FEMALE_ONLY: { openingRank: 8781, closingRank: 8990 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2210, closingRank: 2899 },
                FEMALE_ONLY: { openingRank: 6018, closingRank: 7570 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 165, closingRank: 236 },
                FEMALE_ONLY: { openingRank: 556, closingRank: 783 }
            },
            "Data Science and Artificial Intelligence (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 238, closingRank: 421 },
                FEMALE_ONLY: { openingRank: 936, closingRank: 1105 }
            },
            "Economics (5 Years, Bachelor of Science and Master of Science (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1747, closingRank: 2552 },
                FEMALE_ONLY: { openingRank: 4637, closingRank: 4949 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 768, closingRank: 1012 },
                FEMALE_ONLY: { openingRank: 2182, closingRank: 3072 }
            },
            "Electronics and Communication Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 514, closingRank: 732 },
                FEMALE_ONLY: { openingRank: 1247, closingRank: 1709 }
            },
            "Energy Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2018, closingRank: 2521 },
                FEMALE_ONLY: { openingRank: 6329, closingRank: 6329 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4351, closingRank: 5206 },
                FEMALE_ONLY: { openingRank: 9150, closingRank: 9150 }
            },
            "Geological Technology (5 Years, Integrated Master of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3931, closingRank: 4209 },
                FEMALE_ONLY: { openingRank: 8427, closingRank: 8470 }
            },
            "Geophysical Technology (5 Years, Integrated Master of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3487, closingRank: 3834 },
                FEMALE_ONLY: { openingRank: 8044, closingRank: 8416 }
            },
            "Mathematics & Computing (5 Years, Bachelor of Science and Master of Science (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 511, closingRank: 857 },
                FEMALE_ONLY: { openingRank: 2178, closingRank: 2529 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1097, closingRank: 1784 },
                FEMALE_ONLY: { openingRank: 3784, closingRank: 5050 }
            },
            "Metallurgical and Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2849, closingRank: 3349 },
                FEMALE_ONLY: { openingRank: 7420, closingRank: 7844 }
            },
            "Physics (5 Years, Bachelor of Science and Master of Science (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 2560, closingRank: 4243 },
                FEMALE_ONLY: { openingRank: 8317, closingRank: 8466 }
            },
            "Production and Industrial Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2540, closingRank: 2936 },
                FEMALE_ONLY: { openingRank: 5993, closingRank: 6543 }
            }
        },
        "Indian Institute of Technology (ISM) Dhanbad": {
            "Applied Geology (5 Years, Integrated Master of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3996, closingRank: 5756 }
            },
            "Applied Geophysics (5 Years, Integrated Master of Technology)": {
                GENDER_NEUTRAL: { openingRank: 5779, closingRank: 5890 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3961, closingRank: 4316 },
                FEMALE_ONLY: { openingRank: 7539, closingRank: 8205 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3690, closingRank: 4547 },
                FEMALE_ONLY: { openingRank: 7843, closingRank: 8938 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 758, closingRank: 1273 },
                FEMALE_ONLY: { openingRank: 1892, closingRank: 3220 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2127, closingRank: 2752 },
                FEMALE_ONLY: { openingRank: 4661, closingRank: 6161 }
            },
            "Electronics and Communication Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1257, closingRank: 2102 },
                FEMALE_ONLY: { openingRank: 3161, closingRank: 4377 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4049, closingRank: 4206 },
                FEMALE_ONLY: { openingRank: 8343, closingRank: 9217 }
            },
            "Environmental Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3755, closingRank: 5681 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1280, closingRank: 1663 },
                FEMALE_ONLY: { openingRank: 3565, closingRank: 4170 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3021, closingRank: 3698 },
                FEMALE_ONLY: { openingRank: 6948, closingRank: 7762 }
            },
            "Mineral and Metallurgical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4736, closingRank: 5445 }
            },
            "Mining Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4352, closingRank: 5446 },
                FEMALE_ONLY: { openingRank: 8429, closingRank: 9262 }
            },
            "Mining Machinery Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4644, closingRank: 5717 }
            },
            "Petroleum Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3586, closingRank: 4582 },
                FEMALE_ONLY: { openingRank: 7219, closingRank: 8736 }
            }
        },
        "Indian Institute of Technology Ropar": {
            "Artificial Intelligence and Data Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1116, closingRank: 1308 },
                FEMALE_ONLY: { openingRank: 3785, closingRank: 3785 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3836, closingRank: 4203 },
                FEMALE_ONLY: { openingRank: 8316, closingRank: 8382 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4186, closingRank: 4371 },
                FEMALE_ONLY: { openingRank: 8232, closingRank: 8904 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 450, closingRank: 1084 },
                FEMALE_ONLY: { openingRank: 1492, closingRank: 2227 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1936, closingRank: 2590 },
                FEMALE_ONLY: { openingRank: 4632, closingRank: 6437 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3886, closingRank: 4310 },
                FEMALE_ONLY: { openingRank: 9270, closingRank: 9270 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1267, closingRank: 1724 },
                FEMALE_ONLY: { openingRank: 2514, closingRank: 2514 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3113, closingRank: 3810 },
                FEMALE_ONLY: { openingRank: 7008, closingRank: 8395 }
            },
            "Metallurgical and Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4611, closingRank: 4968 },
                FEMALE_ONLY: { openingRank: 8970, closingRank: 9018 }
            }
        },
        "Indian Institute of Technology (BHU) Varanasi": {
            "Architecture (5 Years, Bachelor of Architecture)": {
                GENDER_NEUTRAL: { openingRank: 7644, closingRank: 8177 }
            },
            "Biochemical Engineering with M.Tech. in Biochemical Engineering and Biotechnology (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 5377, closingRank: 5680 }
            },
            "Bioengineering with M.Tech in Biomedical Technology (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 4763, closingRank: 5361 },
                FEMALE_ONLY: { openingRank: 8573, closingRank: 8573 }
            },
            "Ceramic Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3543, closingRank: 4895 }
            },
            "Ceramic Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 4991, closingRank: 5501 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2957, closingRank: 3404 },
                FEMALE_ONLY: { openingRank: 6033, closingRank: 7414 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3186, closingRank: 3819 },
                FEMALE_ONLY: { openingRank: 7465, closingRank: 8011 }
            },
            "Civil Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 3545, closingRank: 4123 },
                FEMALE_ONLY: { openingRank: 7141, closingRank: 8759 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 226, closingRank: 524 },
                FEMALE_ONLY: { openingRank: 880, closingRank: 1592 }
            },
            "Computer Science and Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 553, closingRank: 727 },
                FEMALE_ONLY: { openingRank: 2055, closingRank: 2237 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1107, closingRank: 1544 },
                FEMALE_ONLY: { openingRank: 3285, closingRank: 4181 }
            },
            "Electrical Engineering with M.Tech. in Power Electronics (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1607, closingRank: 1896 },
                FEMALE_ONLY: { openingRank: 4355, closingRank: 4433 }
            },
            "Electronics Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1027, closingRank: 1351 },
                FEMALE_ONLY: { openingRank: 2395, closingRank: 3268 }
            },
            "Engineering Physics (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 3447, closingRank: 3874 },
                FEMALE_ONLY: { openingRank: 8040, closingRank: 8040 }
            },
            "Industrial Chemistry (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 4645, closingRank: 5474 },
                FEMALE_ONLY: { openingRank: 8455, closingRank: 8455 }
            },
            "Materials Science and Technology (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 4849, closingRank: 5324 }
            },
            "Mathematics and Computing (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 780, closingRank: 1028 },
                FEMALE_ONLY: { openingRank: 2578, closingRank: 2726 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2060, closingRank: 2829 },
                FEMALE_ONLY: { openingRank: 5585, closingRank: 6731 }
            },
            "Mechanical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 2746, closingRank: 3138 },
                FEMALE_ONLY: { openingRank: 6603, closingRank: 6772 }
            },
            "Metallurgical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3739, closingRank: 4494 },
                FEMALE_ONLY: { openingRank: 8302, closingRank: 8551 }
            },
            "Metallurgical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 4471, closingRank: 4945 },
                FEMALE_ONLY: { openingRank: 9190, closingRank: 9190 }
            },
            "Mining Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4081, closingRank: 4990 },
                FEMALE_ONLY: { openingRank: 8101, closingRank: 9144 }
            },
            "Mining Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 5004, closingRank: 5454 }
            },
            "Pharmaceutical Engineering & Technology (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4175, closingRank: 5464 },
                FEMALE_ONLY: { openingRank: 8658, closingRank: 9257 }
            },
            "Pharmaceutical Engineering & Technology (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 5488, closingRank: 5622 }
            }
        },
        "Indian Institute of Technology Guwahati": {
            "Biosciences and Bioengineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3576, closingRank: 4051 },
                FEMALE_ONLY: { openingRank: 7828, closingRank: 8486 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2413, closingRank: 2630 },
                FEMALE_ONLY: { openingRank: 5621, closingRank: 6011 }
            },
            "Chemical Science and Technology (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2271, closingRank: 3307 },
                FEMALE_ONLY: { openingRank: 6121, closingRank: 6918 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2946, closingRank: 3258 },
                FEMALE_ONLY: { openingRank: 6204, closingRank: 7488 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 212, closingRank: 364 },
                FEMALE_ONLY: { openingRank: 862, closingRank: 950 }
            },
            "Data Science and Artificial Intelligence (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 360, closingRank: 479 },
                FEMALE_ONLY: { openingRank: 1151, closingRank: 1186 }
            },
            "Electronics and Communication Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 682, closingRank: 869 },
                FEMALE_ONLY: { openingRank: 2114, closingRank: 2462 }
            },
            "Electronics and Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 926, closingRank: 1040 },
                FEMALE_ONLY: { openingRank: 2364, closingRank: 3045 }
            },
            "Energy Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2328, closingRank: 2802 },
                FEMALE_ONLY: { openingRank: 6588, closingRank: 6588 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2648, closingRank: 3222 },
                FEMALE_ONLY: { openingRank: 4962, closingRank: 7221 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 372, closingRank: 614 },
                FEMALE_ONLY: { openingRank: 1179, closingRank: 1649 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1778, closingRank: 2139 },
                FEMALE_ONLY: { openingRank: 4122, closingRank: 5376 }
            }
        },
        "Indian Institute of Technology Bhilai": {
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2173, closingRank: 2470 },
                FEMALE_ONLY: { openingRank: 3453, closingRank: 5333 }
            },
            "Data Science and Artificial Intelligence (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2482, closingRank: 2811 },
                FEMALE_ONLY: { openingRank: 5797, closingRank: 5994 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3003, closingRank: 3999 },
                FEMALE_ONLY: { openingRank: 7109, closingRank: 8020 }
            },
            "Electronics and Communication Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2982, closingRank: 3539 },
                FEMALE_ONLY: { openingRank: 6070, closingRank: 7148 }
            },
            "Materials Science and Metallurgical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 5647, closingRank: 5810 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4449, closingRank: 4803 },
                FEMALE_ONLY: { openingRank: 8617, closingRank: 8930 }
            },
            "Mechatronics Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3016, closingRank: 4511 },
                FEMALE_ONLY: { openingRank: 7479, closingRank: 7479 }
            }
        },
        "Indian Institute of Technology Goa": {
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1756, closingRank: 2002 },
                FEMALE_ONLY: { openingRank: 4318, closingRank: 5336 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2992, closingRank: 3573 },
                FEMALE_ONLY: { openingRank: 7365, closingRank: 7435 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2103, closingRank: 2593 },
                FEMALE_ONLY: { openingRank: 5327, closingRank: 5977 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4133, closingRank: 4696 },
                FEMALE_ONLY: { openingRank: 9232, closingRank: 9256 }
            }
        },
        "Indian Institute of Technology Palakkad": {
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4276, closingRank: 5565 },
                FEMALE_ONLY: { openingRank: 9281, closingRank: 9281 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1567, closingRank: 2069 },
                FEMALE_ONLY: { openingRank: 3591, closingRank: 3962 }
            },
            "Data Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2412, closingRank: 2788 },
                FEMALE_ONLY: { openingRank: 4822, closingRank: 5639 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3180, closingRank: 3764 },
                FEMALE_ONLY: { openingRank: 6969, closingRank: 7181 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3458, closingRank: 4625 },
                FEMALE_ONLY: { openingRank: 7669, closingRank: 8130 }
            }
        },
        "Indian Institute of Technology Tirupati": {
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4996, closingRank: 5277 },
                FEMALE_ONLY: { openingRank: 6944, closingRank: 8251 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4477, closingRank: 5432 },
                FEMALE_ONLY: { openingRank: 7602, closingRank: 8332 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1242, closingRank: 1727 },
                FEMALE_ONLY: { openingRank: 2907, closingRank: 3342 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2177, closingRank: 3389 },
                FEMALE_ONLY: { openingRank: 4823, closingRank: 6912 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4535, closingRank: 4808 },
                FEMALE_ONLY: { openingRank: 9033, closingRank: 9033 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3807, closingRank: 4295 },
                FEMALE_ONLY: { openingRank: 7373, closingRank: 7833 }
            }
        },
        "Indian Institute of Technology Jammu": {
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 5259, closingRank: 5802 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 5386, closingRank: 5807 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1584, closingRank: 2341 },
                FEMALE_ONLY: { openingRank: 5389, closingRank: 6685 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3333, closingRank: 4237 },
                FEMALE_ONLY: { openingRank: 7429, closingRank: 7775 }
            },
            "Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 5856, closingRank: 6032 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2610, closingRank: 3141 },
                FEMALE_ONLY: { openingRank: 7179, closingRank: 7240 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4518, closingRank: 5048 }
            }
        },
        "Indian Institute of Technology Dharwad": {
            "Chemical and Biochemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 5243, closingRank: 5830 }
            },
            "Civil and Infrastructure Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 5268, closingRank: 5549 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1732, closingRank: 2225 },
                FEMALE_ONLY: { openingRank: 4785, closingRank: 5409 }
            },
            "Electrical and Electronics Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3470, closingRank: 3823 },
                FEMALE_ONLY: { openingRank: 7268, closingRank: 7297 }
            },
            "Electronics and Communication Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2762, closingRank: 3368 },
                FEMALE_ONLY: { openingRank: 5820, closingRank: 6982 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 5100, closingRank: 5258 }
            },
            "Interdisciplinary Sciences (5 Years, Bachelor of Science and Master of Science (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 5925, closingRank: 6185 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2613, closingRank: 2819 },
                FEMALE_ONLY: { openingRank: 6616, closingRank: 6867 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 4218, closingRank: 5082 },
                FEMALE_ONLY: { openingRank: 7628, closingRank: 9014 }
            }
        },
    },
    SC: {
        "Indian Institute of Technology Bhubaneswar": {
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2381, closingRank: 2587 },
                FEMALE_ONLY: { openingRank: 4031, closingRank: 4293 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 382, closingRank: 596 },
                FEMALE_ONLY: { openingRank: 1279, closingRank: 1313 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1105, closingRank: 1762 },
                FEMALE_ONLY: { openingRank: 2081, closingRank: 2081 }
            },
            "Electronics and Communication Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 914, closingRank: 1239 },
                FEMALE_ONLY: { openingRank: 1773, closingRank: 1915 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2045, closingRank: 2226 },
                FEMALE_ONLY: { openingRank: 4555, closingRank: 4555 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1907, closingRank: 2293 },
                FEMALE_ONLY: { openingRank: 2465, closingRank: 3941 }
            },
            "Metallurgical and Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2332, closingRank: 2774 },
                FEMALE_ONLY: { openingRank: 4396, closingRank: 4396 }
            }
        },
        "Indian Institute of Technology Bombay": {
            "Aerospace Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 136, closingRank: 678 },
                FEMALE_ONLY: { openingRank: 803, closingRank: 1493 }
            },
            "BS in Mathematics (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 521, closingRank: 545 },
                FEMALE_ONLY: { openingRank: 1438, closingRank: 1438 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 492, closingRank: 783 },
                FEMALE_ONLY: { openingRank: 1123, closingRank: 1498 }
            },
            "Chemistry (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 1688, closingRank: 2025 },
                FEMALE_ONLY: { openingRank: 3101, closingRank: 3101 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 580, closingRank: 1002 },
                FEMALE_ONLY: { openingRank: 770, closingRank: 1986 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1, closingRank: 32 },
                FEMALE_ONLY: { openingRank: 10, closingRank: 71 }
            },
            "Economics (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 280, closingRank: 722 },
                FEMALE_ONLY: { openingRank: 373, closingRank: 373 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 34, closingRank: 171 },
                FEMALE_ONLY: { openingRank: 196, closingRank: 368 }
            },
            "Electrical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 197, closingRank: 274 },
                FEMALE_ONLY: { openingRank: 584, closingRank: 1054 }
            },
            "Energy Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 706, closingRank: 990 },
                FEMALE_ONLY: { openingRank: 1673, closingRank: 1673 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 217, closingRank: 779 },
                FEMALE_ONLY: { openingRank: 1772, closingRank: 2347 }
            },
            "Environmental Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 622, closingRank: 1267 },
                FEMALE_ONLY: { openingRank: 1874, closingRank: 1874 }
            },
            "Industrial Engineering and Operations Research (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 588, closingRank: 999 },
                FEMALE_ONLY: { openingRank: 1052, closingRank: 1052 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 191, closingRank: 476 },
                FEMALE_ONLY: { openingRank: 142, closingRank: 1066 }
            },
            "Metallurgical Engineering and Materials Science (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 901, closingRank: 1369 },
                FEMALE_ONLY: { openingRank: 1500, closingRank: 2276 }
            }
        },
        "Indian Institute of Technology Mandi": {
            "B.Tech in General Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2375, closingRank: 2569 },
                FEMALE_ONLY: { openingRank: 4116, closingRank: 4116 }
            },
            "B.Tech in Materials Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2787, closingRank: 3050 },
                FEMALE_ONLY: { openingRank: 4427, closingRank: 4427 }
            },
            "B.Tech in Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 904, closingRank: 1086 },
                FEMALE_ONLY: { openingRank: 1940, closingRank: 1940 }
            },
            "B.Tech in Microelectronics & VLSI (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1531, closingRank: 1751 },
                FEMALE_ONLY: { openingRank: 3907, closingRank: 3907 }
            },
            "Bio Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2614, closingRank: 3144 },
                FEMALE_ONLY: { openingRank: 4590, closingRank: 4590 }
            },
            "BS in Chemical Sciences (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 3170, closingRank: 3198 },
                FEMALE_ONLY: { openingRank: 4482, closingRank: 4482 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2311, closingRank: 2546 },
                FEMALE_ONLY: { openingRank: 4406, closingRank: 4406 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 542, closingRank: 761 },
                FEMALE_ONLY: { openingRank: 1061, closingRank: 1732 }
            },
            "Data Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 731, closingRank: 977 },
                FEMALE_ONLY: { openingRank: 1897, closingRank: 1897 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1216, closingRank: 1650 },
                FEMALE_ONLY: { openingRank: 2943, closingRank: 3151 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2298, closingRank: 2631 },
                FEMALE_ONLY: { openingRank: 4734, closingRank: 4734 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1831, closingRank: 2133 },
                FEMALE_ONLY: { openingRank: 3471, closingRank: 3923 }
            }
        },
        "Indian Institute of Technology Delhi": {
            "Biotechnology and Biochemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1100, closingRank: 1548 },
                FEMALE_ONLY: { openingRank: 2663, closingRank: 2673 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 126, closingRank: 655 },
                FEMALE_ONLY: { openingRank: 974, closingRank: 1348 }
            },
            "Chemical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 764, closingRank: 887 },
                FEMALE_ONLY: { openingRank: 1576, closingRank: 2263 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 396, closingRank: 852 },
                FEMALE_ONLY: { openingRank: 1095, closingRank: 1937 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 23, closingRank: 50 },
                FEMALE_ONLY: { openingRank: 76, closingRank: 102 }
            },
            "Computer Science and Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 46, closingRank: 80 },
                FEMALE_ONLY: { openingRank: 169, closingRank: 169 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 56, closingRank: 230 },
                FEMALE_ONLY: { openingRank: 240, closingRank: 547 }
            },
            "Electrical Engineering (Power and Automation) (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 249, closingRank: 288 },
                FEMALE_ONLY: { openingRank: 739, closingRank: 829 }
            },
            "Electrical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 197, closingRank: 274 },
                FEMALE_ONLY: { openingRank: 584, closingRank: 1054 }
            },
            "Energy Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 875, closingRank: 1092 },
                FEMALE_ONLY: { openingRank: 2231, closingRank: 2231 }
            },
            "Engineering and Computational Mechanics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 256, closingRank: 407 },
                FEMALE_ONLY: { openingRank: 840, closingRank: 840 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 749, closingRank: 1117 },
                FEMALE_ONLY: { openingRank: 2413, closingRank: 2766 }
            },
            "Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1345, closingRank: 1408 },
                FEMALE_ONLY: { openingRank: 2545, closingRank: 2545 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 85, closingRank: 164 },
                FEMALE_ONLY: { openingRank: 214, closingRank: 470 }
            },
            "Mathematics and Computing (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 165, closingRank: 185 },
                FEMALE_ONLY: { openingRank: 667, closingRank: 667 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 116, closingRank: 500 },
                FEMALE_ONLY: { openingRank: 1140, closingRank: 1329 }
            },
            "Production and Industrial Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 825, closingRank: 1335 },
                FEMALE_ONLY: { openingRank: 1875, closingRank: 2391 }
            },
            "Textile Technology (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1579, closingRank: 1780 },
                FEMALE_ONLY: { openingRank: 2677, closingRank: 2889 }
            }
        },
        "Indian Institute of Technology Indore": {
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1513, closingRank: 1913 },
                FEMALE_ONLY: { openingRank: 2786, closingRank: 2786 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1600, closingRank: 1881 },
                FEMALE_ONLY: { openingRank: 3425, closingRank: 3731 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 245, closingRank: 329 },
                FEMALE_ONLY: { openingRank: 604, closingRank: 728 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 660, closingRank: 997 },
                FEMALE_ONLY: { openingRank: 1470, closingRank: 1704 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2066, closingRank: 2104 },
                FEMALE_ONLY: { openingRank: 4096, closingRank: 4096 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 575, closingRank: 719 },
                FEMALE_ONLY: { openingRank: 1041, closingRank: 1041 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1223, closingRank: 1702 },
                FEMALE_ONLY: { openingRank: 3160, closingRank: 3569 }
            },
            "Metallurgical Engineering and Materials Science (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2163, closingRank: 2597 },
                FEMALE_ONLY: { openingRank: 3223, closingRank: 4011 }
            },
            "Space Sciences and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1425, closingRank: 1668 },
                FEMALE_ONLY: { openingRank: 1731, closingRank: 1731 }
            }
        },
        "Indian Institute of Technology Kharagpur": {
            "Aerospace Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 502, closingRank: 1302 },
                FEMALE_ONLY: { openingRank: 2141, closingRank: 2606 }
            },
            "Agricultural and Food Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2067, closingRank: 2523 },
                FEMALE_ONLY: { openingRank: 3377, closingRank: 4242 }
            },
            "Applied Geology (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 2982, closingRank: 3092 },
                FEMALE_ONLY: { openingRank: 4560, closingRank: 4575 }
            },
            "Architecture (5 Years, Bachelor of Architecture)": {
                GENDER_NEUTRAL: { openingRank: 3797, closingRank: 4204 },
                FEMALE_ONLY: { openingRank: 4054, closingRank: 4054 }
            },
            "Artificial Intelligence (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 166, closingRank: 243 },
                FEMALE_ONLY: { openingRank: 780, closingRank: 782 }
            },
            "Biotechnology and Biochemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2034, closingRank: 2294 },
                FEMALE_ONLY: { openingRank: 1404, closingRank: 2475 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 497, closingRank: 1297 },
                FEMALE_ONLY: { openingRank: 1292, closingRank: 2540 }
            },
            "Chemistry (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 1740, closingRank: 3023 },
                FEMALE_ONLY: { openingRank: 3919, closingRank: 3919 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1232, closingRank: 1578 },
                FEMALE_ONLY: { openingRank: 1170, closingRank: 1474 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 17, closingRank: 137 },
                FEMALE_ONLY: { openingRank: 151, closingRank: 414 }
            },
            "Economics (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 1632, closingRank: 2027 },
                FEMALE_ONLY: { openingRank: 3690, closingRank: 3724 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 415, closingRank: 544 },
                FEMALE_ONLY: { openingRank: 1244, closingRank: 1307 }
            },
            "Electronics and Electrical Communication Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 157, closingRank: 390 },
                FEMALE_ONLY: { openingRank: 664, closingRank: 1135 }
            },
            "Exploration Geophysics (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 2708, closingRank: 3004 },
                FEMALE_ONLY: { openingRank: 4168, closingRank: 4168 }
            },
            "Industrial and Systems Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1171, closingRank: 1653 },
                FEMALE_ONLY: { openingRank: 2378, closingRank: 2552 }
            },
            "Instrumentation Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 609, closingRank: 895 },
                FEMALE_ONLY: { openingRank: 1880, closingRank: 1880 }
            },
            "Manufacturing Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1820, closingRank: 2076 },
                FEMALE_ONLY: { openingRank: 3147, closingRank: 3665 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 229, closingRank: 509 },
                FEMALE_ONLY: { openingRank: 1149, closingRank: 1405 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 607, closingRank: 966 },
                FEMALE_ONLY: { openingRank: 1567, closingRank: 2369 }
            },
            "Metallurgical and Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1523, closingRank: 2109 },
                FEMALE_ONLY: { openingRank: 2762, closingRank: 2994 }
            },
            "Mining Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1678, closingRank: 2285 },
                FEMALE_ONLY: { openingRank: 3003, closingRank: 4060 }
            },
            "Ocean Engineering and Naval Architecture (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2174, closingRank: 2357 },
                FEMALE_ONLY: { openingRank: 3618, closingRank: 3976 }
            },
            "Physics (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 2394, closingRank: 2664 },
                FEMALE_ONLY: { openingRank: 3740, closingRank: 3740 }
            }
        },
        "Indian Institute of Technology Hyderabad": {
            "Artificial Intelligence (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 20, closingRank: 251 },
                FEMALE_ONLY: { openingRank: 334, closingRank: 334 }
            },
            "Biomedical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1969, closingRank: 2563 },
                FEMALE_ONLY: { openingRank: 3820, closingRank: 3820 }
            },
            "Biotechnology and Bioinformatics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2300, closingRank: 2324 },
                FEMALE_ONLY: { openingRank: 3479, closingRank: 3479 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1331, closingRank: 1588 },
                FEMALE_ONLY: { openingRank: 2215, closingRank: 2215 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1229, closingRank: 1789 },
                FEMALE_ONLY: { openingRank: 1301, closingRank: 2852 }
            },
            "Computational Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 529, closingRank: 657 },
                FEMALE_ONLY: { openingRank: 878, closingRank: 878 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 93, closingRank: 182 },
                FEMALE_ONLY: { openingRank: 363, closingRank: 386 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 464, closingRank: 614 },
                FEMALE_ONLY: { openingRank: 873, closingRank: 1218 }
            },
            "Electrical Engineering (IC Design and Technology) (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 401, closingRank: 463 },
                FEMALE_ONLY: { openingRank: 528, closingRank: 528 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1690, closingRank: 1818 },
                FEMALE_ONLY: { openingRank: 3009, closingRank: 3009 }
            },
            "Engineering Science (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 863, closingRank: 1125 },
                FEMALE_ONLY: { openingRank: 1512, closingRank: 1512 }
            },
            "Industrial Chemistry (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2199, closingRank: 2370 },
                FEMALE_ONLY: { openingRank: 3889, closingRank: 3889 }
            },
            "Materials Science and Metallurgical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1841, closingRank: 2196 },
                FEMALE_ONLY: { openingRank: 3360, closingRank: 3360 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 238, closingRank: 301 },
                FEMALE_ONLY: { openingRank: 519, closingRank: 519 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 836, closingRank: 1116 },
                FEMALE_ONLY: { openingRank: 2205, closingRank: 2270 }
            }
        },
        "Indian Institute of Technology Jodhpur": {
            "Artificial Intelligence and Data Science (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 797, closingRank: 1081 },
                FEMALE_ONLY: { openingRank: 1528, closingRank: 2082 }
            },
            "Bio Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3063, closingRank: 3167 },
                FEMALE_ONLY: { openingRank: 4617, closingRank: 4686 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2292, closingRank: 2688 },
                FEMALE_ONLY: { openingRank: 4029, closingRank: 4029 }
            },
            "Chemistry with Specialization (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 3184, closingRank: 3228 },
                FEMALE_ONLY: { openingRank: 4853, closingRank: 4853 }
            },
            "Civil and Infrastructure Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2495, closingRank: 2619 },
                FEMALE_ONLY: { openingRank: 4172, closingRank: 4201 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 503, closingRank: 789 },
                FEMALE_ONLY: { openingRank: 1247, closingRank: 1421 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1379, closingRank: 1835 },
                FEMALE_ONLY: { openingRank: 2929, closingRank: 3114 }
            },
            "Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2790, closingRank: 2950 },
                FEMALE_ONLY: { openingRank: 4235, closingRank: 4235 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2006, closingRank: 2330 },
                FEMALE_ONLY: { openingRank: 3733, closingRank: 4132 }
            },
            "Physics with Specialization (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 2817, closingRank: 3182 },
                FEMALE_ONLY: { openingRank: 4697, closingRank: 4697 }
            }
        },
        "Indian Institute of Technology Kanpur": {
            "Aerospace Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 705, closingRank: 987 },
                FEMALE_ONLY: { openingRank: 1805, closingRank: 2655 }
            },
            "Biological Sciences and Bioengineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1623, closingRank: 2071 },
                FEMALE_ONLY: { openingRank: 3355, closingRank: 3462 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 855, closingRank: 1185 },
                FEMALE_ONLY: { openingRank: 1635, closingRank: 2062 }
            },
            "Chemistry (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 2460, closingRank: 2667 },
                FEMALE_ONLY: { openingRank: 4596, closingRank: 4614 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 982, closingRank: 1509 },
                FEMALE_ONLY: { openingRank: 2680, closingRank: 2969 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 55, closingRank: 96 },
                FEMALE_ONLY: { openingRank: 133, closingRank: 397 }
            },
            "Earth Sciences (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 1636, closingRank: 2567 },
                FEMALE_ONLY: { openingRank: 4511, closingRank: 4511 }
            },
            "Economics (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 806, closingRank: 1430 },
                FEMALE_ONLY: { openingRank: 2897, closingRank: 3401 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 281, closingRank: 452 },
                FEMALE_ONLY: { openingRank: 769, closingRank: 1152 }
            },
            "Materials Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1544, closingRank: 1853 },
                FEMALE_ONLY: { openingRank: 3140, closingRank: 3639 }
            },
            "Mathematics and Scientific Computing (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 212, closingRank: 372 },
                FEMALE_ONLY: { openingRank: 1148, closingRank: 1341 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 586, closingRank: 834 },
                FEMALE_ONLY: { openingRank: 1541, closingRank: 2026 }
            },
            "Physics (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 1980, closingRank: 2363 },
                FEMALE_ONLY: { openingRank: 3812, closingRank: 3812 }
            },
            "Statistics and Data Science (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 402, closingRank: 534 },
                FEMALE_ONLY: { openingRank: 1035, closingRank: 1035 }
            }
        },
        "Indian Institute of Technology Madras": {
            "Aerospace Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 299, closingRank: 900 },
                FEMALE_ONLY: { openingRank: 1522, closingRank: 1699 }
            },
            "Aerospace Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 995, closingRank: 995 }
            },
            "Artificial Intelligence and Data Analytics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 119, closingRank: 198 },
                FEMALE_ONLY: { openingRank: 237, closingRank: 237 }
            },
            "Biological Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1727, closingRank: 2266 },
                FEMALE_ONLY: { openingRank: 2942, closingRank: 2942 }
            },
            "Biological Science (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 2517, closingRank: 2778 },
                FEMALE_ONLY: { openingRank: 4048, closingRank: 4048 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 724, closingRank: 1237 },
                FEMALE_ONLY: { openingRank: 1434, closingRank: 2010 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1044, closingRank: 1324 },
                FEMALE_ONLY: { openingRank: 1802, closingRank: 2445 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 36, closingRank: 72 },
                FEMALE_ONLY: { openingRank: 12, closingRank: 106 }
            },
            "Earth Sciences (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 1636, closingRank: 2567 },
                FEMALE_ONLY: { openingRank: 4511, closingRank: 4511 }
            },
            "Economics (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 806, closingRank: 1430 },
                FEMALE_ONLY: { openingRank: 2897, closingRank: 3401 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 114, closingRank: 378 },
                FEMALE_ONLY: { openingRank: 121, closingRank: 563 }
            },
            "Engineering Design (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 778, closingRank: 1571 },
                FEMALE_ONLY: { openingRank: 2110, closingRank: 2280 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1003, closingRank: 1326 },
                FEMALE_ONLY: { openingRank: 685, closingRank: 685 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 375, closingRank: 792 },
                FEMALE_ONLY: { openingRank: 647, closingRank: 1467 }
            },
            "Metallurgical and Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1328, closingRank: 1679 },
                FEMALE_ONLY: { openingRank: 1564, closingRank: 2722 }
            },
            "Naval Architecture and Ocean Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1355, closingRank: 2224 },
                FEMALE_ONLY: { openingRank: 2720, closingRank: 3007 }
            },
            "Physics (5 Years, Bachelor of Science and Master of Science (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1784, closingRank: 1784 },
                FEMALE_ONLY: { openingRank: 3152, closingRank: 3152 }
            }
        },
        "Indian Institute of Technology Gandhinagar": {
            "Artificial Intelligence (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 512, closingRank: 649 },
                FEMALE_ONLY: { openingRank: 989, closingRank: 989 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1460, closingRank: 2125 },
                FEMALE_ONLY: { openingRank: 3126, closingRank: 3126 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2065, closingRank: 2356 },
                FEMALE_ONLY: { openingRank: 3416, closingRank: 3416 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 259, closingRank: 338 },
                FEMALE_ONLY: { openingRank: 828, closingRank: 828 }
            },
            "Computer Science and Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 418, closingRank: 490 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1028, closingRank: 1354 },
                FEMALE_ONLY: { openingRank: 1984, closingRank: 1984 }
            },
            "Electrical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1468, closingRank: 1633 }
            },
            "Integrated Circuit Design & Technology (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1015, closingRank: 1558 },
                FEMALE_ONLY: { openingRank: 2918, closingRank: 2918 }
            },
            "Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2374, closingRank: 2741 },
                FEMALE_ONLY: { openingRank: 2821, closingRank: 2821 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 666, closingRank: 1725 },
                FEMALE_ONLY: { openingRank: 3892, closingRank: 3892 }
            },
            "Mechanical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1998, closingRank: 2060 },
                FEMALE_ONLY: { openingRank: 3637, closingRank: 3637 }
            },
            "Artificial Intelligence and Data Science (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 773, closingRank: 1012 },
                FEMALE_ONLY: { openingRank: 1056, closingRank: 1056 }
            },
            "B. Tech in CE. - M. Tech. in Geotechnical Engineering (5 Years, B.Tech. + M.Tech./MS (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 2753, closingRank: 2753 }
            },
            "B. Tech in CE. - M. Tech. in Structural Engineering (5 Years, B.Tech. + M.Tech./MS (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 2526, closingRank: 2613 }
            },
            "B. Tech. (CSE) and M.Tech in CSE (5 Years, B.Tech. + M.Tech./MS (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 921, closingRank: 921 },
                FEMALE_ONLY: { openingRank: 1917, closingRank: 1917 }
            },
            "B. Tech. (ECE) -M. Tech. in VLSI (5 Years, B.Tech. + M.Tech./MS (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1281, closingRank: 1281 }
            },
            "B. Tech. (EEE)-M. Tech. in (Power & Control) (5 Years, B.Tech. + M.Tech./MS (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1705, closingRank: 1890 }
            },
            "B. Tech. (Mathematics & Computing) M. Tech. in (Mathematics & Computing) (5 Years, B.Tech. + M.Tech./MS (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1303, closingRank: 1303 }
            },
            "B. Tech. (ME) - M. Tech. in Mechatronics (5 Years, B.Tech. + M.Tech./MS (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 2303, closingRank: 2303 }
            },
            "B.Tech (Artificial Intelligence and Data Science) - MBA in Digital Business Management (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1160, closingRank: 1160 }
            },
            "B.Tech (Chemical Engineering) - MBA in Hospital and Health Care Management (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 2697, closingRank: 2697 }
            },
            "B.Tech (Civil Engineering) - MBA (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 2668, closingRank: 2668 }
            },
            "B.Tech (Computer Science and Engineering) - MBA in Digital Business Management (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 941, closingRank: 941 }
            },
            "B.Tech (Electrical and Electronics Engineering) - MBA (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1826, closingRank: 1826 }
            },
            "B.Tech (Engineering Physics) - MBA (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 2684, closingRank: 2684 }
            },
            "B.Tech (Mathematics and Computing) - MBA in Digital Business Management (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1309, closingRank: 1309 }
            },
            "B.Tech (Mechanical Engineering) - MBA (IIM Mumbai) (5 Years, Bachelor of Technology and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 2122, closingRank: 2351}
            },
            "B.Tech (Metallurgical and Materials Engineering) - MBA (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 2341, closingRank: 2341 }
            },
            "B.Tech. in Electronics and Communication Engineering and M.Tech. in Communication Systems (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1670, closingRank: 1670 },
                FEMALE_ONLY: { openingRank: 2945, closingRank: 2945 }
            },
            "BS in Economics with MBA (IIM Bodh Gaya) (5 Years, Bachelor of Science and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 2678, closingRank: 2678 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2195, closingRank: 2592 },
                FEMALE_ONLY: { openingRank: 4041, closingRank: 4097 }
            },
            "Chemical Science and Technology (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2713, closingRank: 3075 },
                FEMALE_ONLY: { openingRank: 3964, closingRank: 3964 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2430, closingRank: 2648 },
                FEMALE_ONLY: { openingRank: 3991, closingRank: 4292 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 499, closingRank: 681 },
                FEMALE_ONLY: { openingRank: 837, closingRank: 1887 }
            },
            "Economics (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 2219, closingRank: 2770 },
                FEMALE_ONLY: { openingRank: 3751, closingRank: 3751 }
            },
            "Electrical and Electronics Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1417, closingRank: 1689 },
                FEMALE_ONLY: { openingRank: 2763, closingRank: 2763 }
            },
            "Electronics and Communication Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1209, closingRank: 1312 },
                FEMALE_ONLY: { openingRank: 2041, closingRank: 2041 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2433, closingRank: 2806 },
                FEMALE_ONLY: { openingRank: 4290, closingRank: 4290 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 805, closingRank: 1187 },
                FEMALE_ONLY: { openingRank: 2161, closingRank: 2161 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1994, closingRank: 2380 },
                FEMALE_ONLY: { openingRank: 3713, closingRank: 3905 }
            },
            "Metallurgical and Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2848, closingRank: 3071 },
                FEMALE_ONLY: { openingRank: 4504, closingRank: 4504 }
            }
        },
        "Indian Institute of Technology Roorkee": {
            "Architecture (5 Years, Bachelor of Architecture)": {
                GENDER_NEUTRAL: { openingRank: 3473, closingRank: 3792 },
                FEMALE_ONLY: { openingRank: 1739, closingRank: 1739 }
            },
            "Biosciences and Bioengineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1876, closingRank: 2148 },
                FEMALE_ONLY: { openingRank: 3393, closingRank: 3393 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 902, closingRank: 1264 },
                FEMALE_ONLY: { openingRank: 1630, closingRank: 2665 }
            },
            "Chemical Sciences (5 Years, Bachelor of Science and Master of Science (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 2042, closingRank: 2581 },
                FEMALE_ONLY: { openingRank: 4418, closingRank: 4418 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 374, closingRank: 1478 },
                FEMALE_ONLY: { openingRank: 2007, closingRank: 2823 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 41, closingRank: 144 },
                FEMALE_ONLY: { openingRank: 460, closingRank: 474 }
            },
            "Data Science and Artificial Intelligence (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 195, closingRank: 226 },
                FEMALE_ONLY: { openingRank: 694, closingRank: 694 }
            },
            "Economics (5 Years, Bachelor of Science and Master of Science (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1268, closingRank: 1879 },
                FEMALE_ONLY: { openingRank: 3203, closingRank: 3203 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 358, closingRank: 560 },
                FEMALE_ONLY: { openingRank: 1079, closingRank: 1402 }
            },
            "Electronics and Communication Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 174, closingRank: 398 },
                FEMALE_ONLY: { openingRank: 784, closingRank: 932 }
            },
            "Energy Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1242, closingRank: 1416 },
                FEMALE_ONLY: { openingRank: 2831, closingRank: 2831 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1122, closingRank: 1642 },
                FEMALE_ONLY: { openingRank: 3074, closingRank: 3315 }
            },
            "Geological Technology (5 Years, Integrated Master of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1082, closingRank: 2491 },
                FEMALE_ONLY: { openingRank: 3707, closingRank: 3707 }
            },
            "Geophysical Technology (5 Years, Integrated Master of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2254, closingRank: 2505 },
                FEMALE_ONLY: { openingRank: 3833, closingRank: 3833 }
            },
            "Mathematics & Computing (5 Years, Bachelor of Science and Master of Science (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 266, closingRank: 611 },
                FEMALE_ONLY: { openingRank: 912, closingRank: 912 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 813, closingRank: 1010 },
                FEMALE_ONLY: { openingRank: 1604, closingRank: 2287 }
            },
            "Metallurgical and Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1569, closingRank: 2001 },
                FEMALE_ONLY: { openingRank: 2927, closingRank: 3119 }
            },
            "Physics (5 Years, Bachelor of Science and Master of Science (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1898, closingRank: 2327 },
                FEMALE_ONLY: { openingRank: 3836, closingRank: 3836 }
            },
            "Production and Industrial Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1568, closingRank: 1749 },
                FEMALE_ONLY: { openingRank: 3168, closingRank: 3317 }
            }
        },
        "Indian Institute of Technology (ISM) Dhanbad": {
            "Applied Geology (5 Years, Integrated Master of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3132, closingRank: 3162 },
                FEMALE_ONLY: { openingRank: 4671, closingRank: 4671 }
            },
            "Applied Geophysics (5 Years, Integrated Master of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2794, closingRank: 2996 },
                FEMALE_ONLY: { openingRank: 4789, closingRank: 4789 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2118, closingRank: 2384 },
                FEMALE_ONLY: { openingRank: 3770, closingRank: 3770 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2030, closingRank: 2412 },
                FEMALE_ONLY: { openingRank: 2857, closingRank: 4115 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 427, closingRank: 699 },
                FEMALE_ONLY: { openingRank: 754, closingRank: 1552 }
            },
            "Data Science and Artificial Intelligence (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 195, closingRank: 226 },
                FEMALE_ONLY: { openingRank: 694, closingRank: 694 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1062, closingRank: 1595 },
                FEMALE_ONLY: { openingRank: 2366, closingRank: 2870 }
            },
            "Electronics and Communication Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 707, closingRank: 1214 },
                FEMALE_ONLY: { openingRank: 2091, closingRank: 2421 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2077, closingRank: 2547 },
                FEMALE_ONLY: { openingRank: 4420, closingRank: 4420 }
            },
            "Environmental Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2925, closingRank: 3113 },
                FEMALE_ONLY: { openingRank: 4628, closingRank: 4628 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 759, closingRank: 1000 },
                FEMALE_ONLY: { openingRank: 1999, closingRank: 1999 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1711, closingRank: 2117 },
                FEMALE_ONLY: { openingRank: 3410, closingRank: 3695 }
            },
            "Mineral and Metallurgical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2466, closingRank: 2960 },
                FEMALE_ONLY: { openingRank: 4110, closingRank: 4110 }
            },
            "Mining Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1787, closingRank: 2977 },
                FEMALE_ONLY: { openingRank: 3779, closingRank: 4552 }
            },
            "Mining Machinery Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2534, closingRank: 3102 },
                FEMALE_ONLY: { openingRank: 4730, closingRank: 4792 }
            },
            "Petroleum Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1976, closingRank: 2559 },
                FEMALE_ONLY: { openingRank: 4001, closingRank: 4266 }
            }
        },
        "Indian Institute of Technology Ropar": {
            "Artificial Intelligence and Data Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 738, closingRank: 781 },
                FEMALE_ONLY: { openingRank: 1888, closingRank: 1888 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1955, closingRank: 2227 },
                FEMALE_ONLY: { openingRank: 3910, closingRank: 3910 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2309, closingRank: 2419 },
                FEMALE_ONLY: { openingRank: 3778, closingRank: 3778 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 388, closingRank: 548 },
                FEMALE_ONLY: { openingRank: 1389, closingRank: 1641 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1099, closingRank: 1593 },
                FEMALE_ONLY: { openingRank: 2172, closingRank: 2382 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2143, closingRank: 2573 },
                FEMALE_ONLY: { openingRank: 4477, closingRank: 4477 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 807, closingRank: 930 },
                FEMALE_ONLY: { openingRank: 1451, closingRank: 1451 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1825, closingRank: 2128 },
                FEMALE_ONLY: { openingRank: 3154, closingRank: 3800 }
            },
            "Metallurgical and Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2652, closingRank: 2662 },
                FEMALE_ONLY: { openingRank: 4385, closingRank: 4385 }
            }
        },
        "Indian Institute of Technology (BHU) Varanasi": {
            "Architecture (5 Years, Bachelor of Architecture)": {
                GENDER_NEUTRAL: { openingRank: 3540, closingRank: 4321 },
                FEMALE_ONLY: { openingRank: 4991, closingRank: 4991 }
            },
            "Biochemical Engineering with M.Tech. in Biochemical Engineering and Biotechnology (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 2686, closingRank: 2954 },
                FEMALE_ONLY: { openingRank: 4522, closingRank: 4522 }
            },
            "Bioengineering with M.Tech in Biomedical Technology (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 2635, closingRank: 3125 },
                FEMALE_ONLY: { openingRank: 4763, closingRank: 4763 }
            },
            "Ceramic Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2245, closingRank: 2976 },
                FEMALE_ONLY: { openingRank: 4619, closingRank: 4675 }
            },
            "Ceramic Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 3005, closingRank: 3020 },
                FEMALE_ONLY: { openingRank: 4860, closingRank: 4860 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1637, closingRank: 2078 },
                FEMALE_ONLY: { openingRank: 3129, closingRank: 3940 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1733, closingRank: 2064 },
                FEMALE_ONLY: { openingRank: 3128, closingRank: 3721 }
            },
            "Civil Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1956, closingRank: 2144 },
                FEMALE_ONLY: { openingRank: 3888, closingRank: 3888 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 192, closingRank: 262 },
                FEMALE_ONLY: { openingRank: 527, closingRank: 851 }
            },
            "Computer Science and Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 300, closingRank: 340 },
                FEMALE_ONLY: { openingRank: 1453, closingRank: 1453 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 642, closingRank: 916 },
                FEMALE_ONLY: { openingRank: 1013, closingRank: 2086 }
            },
            "Electrical Engineering with M.Tech. in Power Electronics (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1157, closingRank: 1350 },
                FEMALE_ONLY: { openingRank: 2830, closingRank: 2830 }
            },
            "Electronics Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 524, closingRank: 808 },
                FEMALE_ONLY: { openingRank: 1683, closingRank: 2050 }
            },
            "Engineering Physics (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 2087, closingRank: 2255 },
                FEMALE_ONLY: { openingRank: 4467, closingRank: 4467 }
            },
            "Industrial Chemistry (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 2983, closingRank: 3046 },
                FEMALE_ONLY: { openingRank: 4487, closingRank: 4487 }
            },
            "Materials Science and Technology (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 2637, closingRank: 2797 },
                FEMALE_ONLY: { openingRank: 4376, closingRank: 4439 }
            },
            "Mathematics and Computing (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 501, closingRank: 672 },
                FEMALE_ONLY: { openingRank: 675, closingRank: 675 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1141, closingRank: 1654 },
                FEMALE_ONLY: { openingRank: 2993, closingRank: 3610 }
            },
            "Mechanical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1671, closingRank: 1790 }
            },
            "Metallurgical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2177, closingRank: 2477 },
                FEMALE_ONLY: { openingRank: 3929, closingRank: 4295 }
            },
            "Metallurgical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 2721, closingRank: 2744 },
                FEMALE_ONLY: { openingRank: 4086, closingRank: 4086 }
            },
            "Mining Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2435, closingRank: 2924 },
                FEMALE_ONLY: { openingRank: 4563, closingRank: 4767 }
            },
            "Mining Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 2850, closingRank: 3054 },
                FEMALE_ONLY: { openingRank: 4884, closingRank: 4884 }
            },
            "Pharmaceutical Engineering & Technology (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2748, closingRank: 3118 },
                FEMALE_ONLY: { openingRank: 4816, closingRank: 4827 }
            },
            "Pharmaceutical Engineering & Technology (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 3135, closingRank: 3141 },
                FEMALE_ONLY: { openingRank: 4524, closingRank: 4524 }
            }
        },
        "Indian Institute of Technology Guwahati": {
            "Biosciences and Bioengineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2139, closingRank: 2616 },
                FEMALE_ONLY: { openingRank: 3345, closingRank: 4053 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1224, closingRank: 1442 },
                FEMALE_ONLY: { openingRank: 2450, closingRank: 2736 }
            },
            "Chemical Science and Technology (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1554, closingRank: 1868 },
                FEMALE_ONLY: { openingRank: 3483, closingRank: 3516 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1577, closingRank: 1761 },
                FEMALE_ONLY: { openingRank: 3091, closingRank: 3290 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 134, closingRank: 181 },
                FEMALE_ONLY: { openingRank: 481, closingRank: 677 }
            },
            "Data Science and Artificial Intelligence (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 228, closingRank: 293 },
                FEMALE_ONLY: { openingRank: 847, closingRank: 847 }
            },
            "Electronics and Communication Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 351, closingRank: 485 },
                FEMALE_ONLY: { openingRank: 1230, closingRank: 1422 }
            },
            "Electronics and Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 556, closingRank: 585 },
                FEMALE_ONLY: { openingRank: 1423, closingRank: 1429 }
            },
            "Energy Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1495, closingRank: 1682 },
                FEMALE_ONLY: { openingRank: 2698, closingRank: 2698 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1839, closingRank: 2061 },
                FEMALE_ONLY: { openingRank: 3264, closingRank: 3913 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 272, closingRank: 393 },
                FEMALE_ONLY: { openingRank: 952, closingRank: 1164 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 613, closingRank: 1126 },
                FEMALE_ONLY: { openingRank: 2687, closingRank: 2978 }
            }
        },
        "Indian Institute of Technology Bhilai": {
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 879, closingRank: 1021 },
                FEMALE_ONLY: { openingRank: 2083, closingRank: 2194 }
            },
            "Data Science and Artificial Intelligence (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1191, closingRank: 1332 },
                FEMALE_ONLY: { openingRank: 2443, closingRank: 2443 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1803, closingRank: 2207 },
                FEMALE_ONLY: { openingRank: 3134, closingRank: 3408 }
            },
            "Electronics and Communication Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1814, closingRank: 1904 },
                FEMALE_ONLY: { openingRank: 2952, closingRank: 2952 }
            },
            "Materials Science and Metallurgical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3057, closingRank: 3089 },
                FEMALE_ONLY: { openingRank: 4676, closingRank: 4676 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2360, closingRank: 2609 },
                FEMALE_ONLY: { openingRank: 4142, closingRank: 4142 }
            },
            "Mechatronics Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1872, closingRank: 2189 }
            }
        },
        "Indian Institute of Technology Palakkad": {
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2633, closingRank: 2845 },
                FEMALE_ONLY: { openingRank: 4304, closingRank: 4304 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 475, closingRank: 1097 },
                FEMALE_ONLY: { openingRank: 1821, closingRank: 1821 }
            },
            "Data Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1371, closingRank: 1602 },
                FEMALE_ONLY: { openingRank: 2742, closingRank: 2742 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1886, closingRank: 2040 },
                FEMALE_ONLY: { openingRank: 2488, closingRank: 2488 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2018, closingRank: 2440 },
                FEMALE_ONLY: { openingRank: 3546, closingRank: 3546 }
            }
        },
        "Indian Institute of Technology Tirupati": {
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2406, closingRank: 2979 },
                FEMALE_ONLY: { openingRank: 4007, closingRank: 4007 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2565, closingRank: 2754 },
                FEMALE_ONLY: { openingRank: 4324, closingRank: 4324 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 343, closingRank: 1057 },
                FEMALE_ONLY: { openingRank: 1419, closingRank: 1419 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1508, closingRank: 1851 },
                FEMALE_ONLY: { openingRank: 2499, closingRank: 2809 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3026, closingRank: 3026 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2322, closingRank: 2558 },
                FEMALE_ONLY: { openingRank: 2923, closingRank: 3875 }
            }
        },
        "Indian Institute of Technology Jammu": {
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2939, closingRank: 3043 },
                FEMALE_ONLY: { openingRank: 4151, closingRank: 4151 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2843, closingRank: 3015 },
                FEMALE_ONLY: { openingRank: 4510, closingRank: 4510 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 923, closingRank: 1093 },
                FEMALE_ONLY: { openingRank: 2147, closingRank: 2147 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1824, closingRank: 2208 },
                FEMALE_ONLY: { openingRank: 3716, closingRank: 3716 }
            },
            "Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2674, closingRank: 3164 },
                FEMALE_ONLY: { openingRank: 4851, closingRank: 4851 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1273, closingRank: 1566 },
                FEMALE_ONLY: { openingRank: 2239, closingRank: 2750 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2470, closingRank: 2650 },
                FEMALE_ONLY: { openingRank: 3839, closingRank: 3839 }
            }
        },
        "Indian Institute of Technology Dharwad": {
            "Chemical and Biochemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 3058, closingRank: 3121 },
                FEMALE_ONLY: { openingRank: 4059, closingRank: 4059 }
            },
            "Civil and Infrastructure Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2627, closingRank: 2856 },
                FEMALE_ONLY: { openingRank: 4513, closingRank: 4513 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 975, closingRank: 1295 },
                FEMALE_ONLY: { openingRank: 1716, closingRank: 2129 }
            },
            "Electrical and Electronics Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1828, closingRank: 2080 },
                FEMALE_ONLY: { openingRank: 2964, closingRank: 2964 }
            },
            "Electronics and Communication Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1443, closingRank: 1712 },
                FEMALE_ONLY: { openingRank: 2734, closingRank: 2734 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 2948, closingRank: 3133 },
                FEMALE_ONLY: { openingRank: 4066, closingRank: 4066 }
            },
            "Interdisciplinary Sciences (5 Years, Bachelor of Science and Master of Science (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 3183, closingRank: 3302 },
                FEMALE_ONLY: { openingRank: 4768, closingRank: 4859 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1090, closingRank: 1479 },
                FEMALE_ONLY: { openingRank: 2799, closingRank: 2799 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1327, closingRank: 2629 },
                FEMALE_ONLY: { openingRank: 4302, closingRank: 4303 }
            }
        }
    },
    ST: {
        "Indian Institute of Technology Bhubaneswar": {
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 753, closingRank: 977 },
                FEMALE_ONLY: { openingRank: 1718, closingRank: 1750 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 241, closingRank: 356 },
                FEMALE_ONLY: { openingRank: 546, closingRank: 649 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 667, closingRank: 792 },
                FEMALE_ONLY: { openingRank: 1179, closingRank: 1179 }
            },
            "Electronics and Communication Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 384, closingRank: 538 },
                FEMALE_ONLY: { openingRank: 910, closingRank: 910 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1333, closingRank: 1333 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 918, closingRank: 1041 },
                FEMALE_ONLY: { openingRank: 1735, closingRank: 1735 }
            },
            "Metallurgical and Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1102, closingRank: 1223 },
                FEMALE_ONLY: { openingRank: 330, closingRank: 602 }
            }
        },
        "Indian Institute of Technology Bombay": {
            "Aerospace Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 184, closingRank: 501 },
                FEMALE_ONLY: { openingRank: 424, closingRank: 424 }
            },
            "BS in Mathematics (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 247, closingRank: 247 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 301, closingRank: 413 },
                FEMALE_ONLY: { openingRank: 344, closingRank: 742 }
            },
            "Chemistry (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 1007, closingRank: 1036 },
                FEMALE_ONLY: { openingRank: 1498, closingRank: 1498 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 41, closingRank: 331 },
                FEMALE_ONLY: { openingRank: 601, closingRank: 623 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1, closingRank: 13 },
                FEMALE_ONLY: { openingRank: 16, closingRank: 40 }
            },
            "Economics (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 130, closingRank: 222 },
                FEMALE_ONLY: { openingRank: 714, closingRank: 714 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 36, closingRank: 79 },
                FEMALE_ONLY: { openingRank: 84, closingRank: 176 }
            },
            "Electrical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 131, closingRank: 221 },
                FEMALE_ONLY: { openingRank: 363, closingRank: 363 }
            },
            "Energy Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 552, closingRank: 669 },
                FEMALE_ONLY: { openingRank: 1473, closingRank: 1473 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 15, closingRank: 682 },
                FEMALE_ONLY: { openingRank: 1047, closingRank: 1047 }
            },
            "Environmental Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 680, closingRank: 830 },
                FEMALE_ONLY: { openingRank: 1587, closingRank: 1587 }
            },
            "Industrial Engineering and Operations Research (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 323, closingRank: 351 },
                FEMALE_ONLY: { openingRank: 1404, closingRank: 1404 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 61, closingRank: 309 },
                FEMALE_ONLY: { openingRank: 466, closingRank: 516 }
            },
            "Metallurgical Engineering and Materials Science (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 514, closingRank: 641 },
                FEMALE_ONLY: { openingRank: 1154, closingRank: 1251 }
            }
        },
        "Indian Institute of Technology Mandi": {
            "B.Tech in General Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1394, closingRank: 1400 }
            },
            "B.Tech in Materials Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1416, closingRank: 1453 }
            },
            "B.Tech in Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 621, closingRank: 678 }
            },
            "B.Tech in Microelectronics & VLSI (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1084, closingRank: 1096 }
            },
            "Bio Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1331, closingRank: 1502 }
            },
            "BS in Chemical Sciences (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 1493, closingRank: 1529 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 717, closingRank: 795 },
                FEMALE_ONLY: { openingRank: 1526, closingRank: 1526 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 293, closingRank: 371 },
                FEMALE_ONLY: { openingRank: 870, closingRank: 870 }
            },
            "Data Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 378, closingRank: 615 },
                FEMALE_ONLY: { openingRank: 983, closingRank: 983 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 772, closingRank: 833 },
                FEMALE_ONLY: { openingRank: 1632, closingRank: 1632 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1037, closingRank: 1342 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 677, closingRank: 974 },
                FEMALE_ONLY: { openingRank: 397, closingRank: 397 }
            }
        },
        "Indian Institute of Technology Delhi": {
            "Biotechnology and Biochemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 496, closingRank: 819 },
                FEMALE_ONLY: { openingRank: 1310, closingRank: 1310 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 423, closingRank: 481 },
                FEMALE_ONLY: { openingRank: 771, closingRank: 771 }
            },
            "Chemical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 233, closingRank: 572 },
                FEMALE_ONLY: { openingRank: 604, closingRank: 604 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 18, closingRank: 188 },
                FEMALE_ONLY: { openingRank: 235, closingRank: 312 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 14, closingRank: 23 },
                FEMALE_ONLY: { openingRank: 51, closingRank: 52 }
            },
            "Computer Science and Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 25, closingRank: 42 },
                FEMALE_ONLY: { openingRank: 171, closingRank: 171 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 24, closingRank: 95 },
                FEMALE_ONLY: { openingRank: 190, closingRank: 205 }
            },
            "Electrical Engineering (Power and Automation) (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 99, closingRank: 159 },
                FEMALE_ONLY: { openingRank: 345, closingRank: 345 }
            },
            "Energy Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 586, closingRank: 645 },
                FEMALE_ONLY: { openingRank: 1481, closingRank: 1481 }
            },
            "Engineering and Computational Mechanics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 214, closingRank: 245 },
                FEMALE_ONLY: { openingRank: 562, closingRank: 562 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 535, closingRank: 746 },
                FEMALE_ONLY: { openingRank: 1016, closingRank: 1016 }
            },
            "Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 797, closingRank: 813 },
                FEMALE_ONLY: { openingRank: 1341, closingRank: 1341 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 50, closingRank: 97 },
                FEMALE_ONLY: { openingRank: 55, closingRank: 55 }
            },
            "Mathematics and Computing (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 117, closingRank: 170 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 208, closingRank: 310 },
                FEMALE_ONLY: { openingRank: 408, closingRank: 408 }
            },
            "Production and Industrial Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 688, closingRank: 810 },
                FEMALE_ONLY: { openingRank: 1159, closingRank: 1159 }
            },
            "Textile Technology (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 836, closingRank: 991 },
                FEMALE_ONLY: { openingRank: 1386, closingRank: 1538 }
            }
        },
        "Indian Institute of Technology Indore": {
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 848, closingRank: 922 },
                FEMALE_ONLY: { openingRank: 1642, closingRank: 1642 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 566, closingRank: 631 },
                FEMALE_ONLY: { openingRank: 1363, closingRank: 1363 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 113, closingRank: 168 },
                FEMALE_ONLY: { openingRank: 154, closingRank: 154 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 350, closingRank: 467 },
                FEMALE_ONLY: { openingRank: 656, closingRank: 656 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1173, closingRank: 1173 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 260, closingRank: 287 },
                FEMALE_ONLY: { openingRank: 563, closingRank: 563 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 573, closingRank: 747 },
                FEMALE_ONLY: { openingRank: 1636, closingRank: 1636 }
            },
            "Metallurgical Engineering and Materials Science (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1175, closingRank: 1225 },
                FEMALE_ONLY: { openingRank: 1734, closingRank: 1734 }
            },
            "Space Sciences and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 719, closingRank: 719 }
            }
        },
        "Indian Institute of Technology Kharagpur": {
            "Aerospace Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 557, closingRank: 799 },
                FEMALE_ONLY: { openingRank: 1219, closingRank: 1219 }
            },
            "Agricultural and Food Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1053, closingRank: 1129 },
                FEMALE_ONLY: { openingRank: 343, closingRank: 343 }
            },
            "Applied Geology (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 1387, closingRank: 1462 },
                FEMALE_ONLY: { openingRank: 768, closingRank: 768 }
            },
            "Architecture (5 Years, Bachelor of Architecture)": {
                GENDER_NEUTRAL: { openingRank: 1094, closingRank: 1755 },
                FEMALE_ONLY: { openingRank: 1656, closingRank: 1656 }
            },
            "Artificial Intelligence (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 123, closingRank: 135 },
                FEMALE_ONLY: { openingRank: 256, closingRank: 256 }
            },
            "Biotechnology and Biochemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 806, closingRank: 1002 },
                FEMALE_ONLY: { openingRank: 1731, closingRank: 1731 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 683, closingRank: 740 },
                FEMALE_ONLY: { openingRank: 375, closingRank: 938 }
            },
            "Chemistry (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 1413, closingRank: 1496 },
                FEMALE_ONLY: { openingRank: 576, closingRank: 576 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 405, closingRank: 541 },
                FEMALE_ONLY: { openingRank: 960, closingRank: 1158 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 33, closingRank: 67 },
                FEMALE_ONLY: { openingRank: 183, closingRank: 206 }
            },
            "Economics (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 637, closingRank: 818 },
                FEMALE_ONLY: { openingRank: 1444, closingRank: 1444 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 225, closingRank: 257 },
                FEMALE_ONLY: { openingRank: 551, closingRank: 618 }
            },
            "Electronics and Electrical Communication Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 110, closingRank: 219 },
                FEMALE_ONLY: { openingRank: 372, closingRank: 448 }
            },
            "Exploration Geophysics (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 1483, closingRank: 1497 },
                FEMALE_ONLY: { openingRank: 457, closingRank: 457 }
            },
            "Industrial and Systems Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 567, closingRank: 840 },
                FEMALE_ONLY: { openingRank: 1200, closingRank: 1200 }
            },
            "Instrumentation Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 505, closingRank: 583 },
                FEMALE_ONLY: { openingRank: 1540, closingRank: 1540 }
            },
            "Manufacturing Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 952, closingRank: 1034 },
                FEMALE_ONLY: { openingRank: 1677, closingRank: 1677 }
            },
                "Mathematics and Computing (4 Years, Bachelor of Science)": {
                    GENDER_NEUTRAL: { openingRank: 161, closingRank: 267 },
                    FEMALE_ONLY: { openingRank: 415, closingRank: 415 }
            }
        },
        "Indian Institute of Technology Hyderabad": {
            "Artificial Intelligence (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 88, closingRank: 89 }
            },
            "Biomedical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1040, closingRank: 1197 }
            },
            "Biotechnology and Bioinformatics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1074, closingRank: 1099 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 646, closingRank: 783 },
                FEMALE_ONLY: { openingRank: 1328, closingRank: 1328 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 640, closingRank: 697 },
                FEMALE_ONLY: { openingRank: 1302, closingRank: 1302 }
            },
            "Computational Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 305, closingRank: 441 },
                FEMALE_ONLY: { openingRank: 348, closingRank: 348 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 53, closingRank: 82 },
                FEMALE_ONLY: { openingRank: 107, closingRank: 107 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 276, closingRank: 292 },
                FEMALE_ONLY: { openingRank: 545, closingRank: 545 }
            },
            "Electrical Engineering (IC Design and Technology) (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 277, closingRank: 373 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1024, closingRank: 1066 }
            },
            "Engineering Science (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 498, closingRank: 592 },
                FEMALE_ONLY: { openingRank: 1028, closingRank: 1028 }
            },
            "Industrial Chemistry (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1177, closingRank: 1240 }
            },
            "Materials Science and Metallurgical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 817, closingRank: 945 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 178, closingRank: 178 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 387, closingRank: 570 },
                FEMALE_ONLY: { openingRank: 881, closingRank: 881 }
            }
        },
        "Indian Institute of Technology Jodhpur": {
            "Artificial Intelligence and Data Science (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 450, closingRank: 589 },
                FEMALE_ONLY: { openingRank: 863, closingRank: 863 }
            },
            "Bio Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1250, closingRank: 1452 },
                FEMALE_ONLY: { openingRank: 1049, closingRank: 1049 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 995, closingRank: 1120 },
                FEMALE_ONLY: { openingRank: 707, closingRank: 707 }
            },
            "Chemistry with Specialization (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 1553, closingRank: 1553 },
                FEMALE_ONLY: { openingRank: 1059, closingRank: 1059 }
            },
            "Civil and Infrastructure Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 901, closingRank: 980 },
                FEMALE_ONLY: { openingRank: 1799, closingRank: 1799 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 244, closingRank: 396 },
                FEMALE_ONLY: { openingRank: 327, closingRank: 327 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 791, closingRank: 875 },
                FEMALE_ONLY: { openingRank: 1505, closingRank: 1560 }
            },
            "Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1346, closingRank: 1419 },
                FEMALE_ONLY: { openingRank: 1026, closingRank: 1026 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 968, closingRank: 1071 },
                FEMALE_ONLY: { openingRank: 198, closingRank: 332 }
            },
            "Physics with Specialization (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 1510, closingRank: 1510 },
                FEMALE_ONLY: { openingRank: 1032, closingRank: 1032 }
            }
        },
        "Indian Institute of Technology Kanpur": {
            "Aerospace Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 146, closingRank: 681 },
                FEMALE_ONLY: { openingRank: 768, closingRank: 768 }
            },
            "Biological Sciences and Bioengineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 829, closingRank: 1168 },
                FEMALE_ONLY: { openingRank: 1790, closingRank: 1790 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 547, closingRank: 684 },
                FEMALE_ONLY: { openingRank: 1043, closingRank: 1062 }
            },
            "Chemistry (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 1348, closingRank: 1434 },
                FEMALE_ONLY: { openingRank: 250, closingRank: 250 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 290, closingRank: 482 },
                FEMALE_ONLY: { openingRank: 668, closingRank: 837 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 30, closingRank: 54 },
                FEMALE_ONLY: { openingRank: 127, closingRank: 141 }
            },
            "Earth Sciences (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 1280, closingRank: 1369 },
                FEMALE_ONLY: { openingRank: 702, closingRank: 702 }
            },
            "Economics (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 521, closingRank: 725 },
                FEMALE_ONLY: { openingRank: 1645, closingRank: 1645 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 98, closingRank: 203 },
                FEMALE_ONLY: { openingRank: 414, closingRank: 518 }
            },
            "Materials Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 859, closingRank: 1080 },
                FEMALE_ONLY: { openingRank: 1412, closingRank: 1412 }
            },
            "Mathematics and Scientific Computing (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 182, closingRank: 343 },
                FEMALE_ONLY: { openingRank: 632, closingRank: 632 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 426, closingRank: 509 },
                FEMALE_ONLY: { openingRank: 582, closingRank: 776 }
            },
            "Physics (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 1176, closingRank: 1277 },
                FEMALE_ONLY: { openingRank: 1765, closingRank: 1765 }
            },
            "Statistics and Data Science (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 220, closingRank: 224 }
            }
        },
        "Indian Institute of Technology Madras": {
            "Aerospace Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 173, closingRank: 478 },
                FEMALE_ONLY: { openingRank: 661, closingRank: 661 }
            },
            "Aerospace Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 503, closingRank: 503 }
            },
            "Artificial Intelligence and Data Analytics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 38, closingRank: 83 },
                FEMALE_ONLY: { openingRank: 218, closingRank: 218 }
            },
            "Biological Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1057, closingRank: 1090 },
                FEMALE_ONLY: { openingRank: 1566, closingRank: 1566 }
            },
            "Biological Science (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 1325, closingRank: 1359 },
                FEMALE_ONLY: { openingRank: 1691, closingRank: 1691 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 291, closingRank: 617 },
                FEMALE_ONLY: { openingRank: 851, closingRank: 895 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 401, closingRank: 522 },
                FEMALE_ONLY: { openingRank: 648, closingRank: 652 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 5, closingRank: 29 },
                FEMALE_ONLY: { openingRank: 68, closingRank: 68 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 39, closingRank: 149 },
                FEMALE_ONLY: { openingRank: 297, closingRank: 336 }
            },
            "Engineering Design (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 998, closingRank: 1133 },
                FEMALE_ONLY: { openingRank: 979, closingRank: 979 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 908, closingRank: 1022 },
                FEMALE_ONLY: { openingRank: 1429, closingRank: 1429 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 150, closingRank: 369 },
                FEMALE_ONLY: { openingRank: 458, closingRank: 715 }
            },
            "Metallurgical and Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 629, closingRank: 784 },
                FEMALE_ONLY: { openingRank: 1339, closingRank: 1339 }
            },
            "Naval Architecture and Ocean Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 770, closingRank: 1056 },
                FEMALE_ONLY: { openingRank: 139, closingRank: 139 }
            },
            "Physics (5 Years, Bachelor of Science and Master of Science (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1149, closingRank: 1149 }
            }
        },
        "Indian Institute of Technology Gandhinagar": {
            "Artificial Intelligence (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 125, closingRank: 249 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1075, closingRank: 1146 },
                FEMALE_ONLY: { openingRank: 159, closingRank: 159 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 485, closingRank: 651 },
                FEMALE_ONLY: { openingRank: 1199, closingRank: 1199 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 155, closingRank: 207 },
                FEMALE_ONLY: { openingRank: 374, closingRank: 374 }
            },
            "Computer Science and Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 367, closingRank: 367 },
                FEMALE_ONLY: { openingRank: 644, closingRank: 644 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 500, closingRank: 534 },
                FEMALE_ONLY: { openingRank: 955, closingRank: 955 }
            },
            "Electrical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 710, closingRank: 710 },
                FEMALE_ONLY: { openingRank: 1021, closingRank: 1021 }
            },
            "Integrated Circuit Design & Technology (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1014, closingRank: 1069 }
            },
            "Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1227, closingRank: 1269 },
                FEMALE_ONLY: { openingRank: 806, closingRank: 806 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 759, closingRank: 780 },
                FEMALE_ONLY: { openingRank: 1407, closingRank: 1407 }
            },
            "Mechanical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 944, closingRank: 944 }
            }
        },
        "Indian Institute of Technology Patna": {
            "Artificial Intelligence and Data Science (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 469, closingRank: 575 },
                FEMALE_ONLY: { openingRank: 1125, closingRank: 1125 }
            },
            "B. Tech in CE. - M. Tech. in Geotechnical Engineering (5 Years, B.Tech. + M.Tech./MS (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1188, closingRank: 1188 }
            },
            "B. Tech. (CSE) and M.Tech in CSE (5 Years, B.Tech. + M.Tech./MS (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 729, closingRank: 729 }
            },
            "B. Tech. (ECE) -M. Tech. in VLSI (5 Years, B.Tech. + M.Tech./MS (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1005, closingRank: 1005 }
            },
            "B. Tech. (Mathematics & Computing) M. Tech. in (Mathematics & Computing) (5 Years, B.Tech. + M.Tech./MS (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 721, closingRank: 721 }
            },
            "B. Tech. (ME) - M. Tech. in Mechatronics (5 Years, B.Tech. + M.Tech./MS (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1244, closingRank: 1244 }
            },
            "B.Tech (Computer Science and Engineering) - MBA in Digital Business Management (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 581, closingRank: 581 }
            },
            "B.Tech (Mechanical Engineering) - MBA (IIM Mumbai) (5 Years, Bachelor of Technology and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1194, closingRank: 1194 }
            },
            "B.Tech (Metallurgical and Materials Engineering) - MBA (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1273, closingRank: 1273 }
            },
            "B.Tech. in Electronics and Communication Engineering and M.Tech. in Communication Systems (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 882, closingRank: 882 }
            },
            "BS in Economics with MBA (IIM Bodh Gaya) (5 Years, Bachelor of Science and MBA (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1329, closingRank: 1329 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1135, closingRank: 1245 },
                FEMALE_ONLY: { openingRank: 1722, closingRank: 1722 }
            },
            "Chemical Science and Technology (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1239, closingRank: 1252 },
                FEMALE_ONLY: { openingRank: 1016, closingRank: 1016 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 989, closingRank: 1110 },
                FEMALE_ONLY: { openingRank: 141, closingRank: 141 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 306, closingRank: 404 },
                FEMALE_ONLY: { openingRank: 444, closingRank: 444 }
            },
            "Economics (4 Years, Bachelor of Science)": {
                GENDER_NEUTRAL: { openingRank: 1489, closingRank: 1489 }
            },
            "Electrical and Electronics Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 805, closingRank: 876 },
                FEMALE_ONLY: { openingRank: 1446, closingRank: 1446 }
            },
            "Electronics and Communication Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 672, closingRank: 803 },
                FEMALE_ONLY: { openingRank: 1372, closingRank: 1372 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1248, closingRank: 1482 },
                FEMALE_ONLY: { openingRank: 824, closingRank: 824 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 625, closingRank: 849 },
                FEMALE_ONLY: { openingRank: 1361, closingRank: 1361 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 953, closingRank: 1114 },
                FEMALE_ONLY: { openingRank: 1770, closingRank: 1770 }
            },
            "Metallurgical and Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1287, closingRank: 1324 },
                FEMALE_ONLY: { openingRank: 953, closingRank: 953 }
            }
        },
        "Indian Institute of Technology Roorkee": {
            "Architecture (5 Years, Bachelor of Architecture)": {
                GENDER_NEUTRAL: { openingRank: 76, closingRank: 315 }
            },
            "Biosciences and Bioengineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1184, closingRank: 1229 },
                FEMALE_ONLY: { openingRank: 144, closingRank: 144 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 594, closingRank: 748 },
                FEMALE_ONLY: { openingRank: 1253, closingRank: 1532 }
            },
            "Chemical Sciences (5 Years, Bachelor of Science and Master of Science (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1003, closingRank: 1137 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 358, closingRank: 457 },
                FEMALE_ONLY: { openingRank: 1029, closingRank: 1122 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 56, closingRank: 75 },
                FEMALE_ONLY: { openingRank: 192, closingRank: 229 }
            },
            "Data Science and Artificial Intelligence (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 101, closingRank: 103 },
                FEMALE_ONLY: { openingRank: 326, closingRank: 326 }
            },
            "Economics (5 Years, Bachelor of Science and Master of Science (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 992, closingRank: 1009 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 124, closingRank: 298 },
                FEMALE_ONLY: { openingRank: 446, closingRank: 654 }
            },
            "Electronics and Communication Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 109, closingRank: 217 },
                FEMALE_ONLY: { openingRank: 474, closingRank: 484 }
            },
            "Energy Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 835, closingRank: 835 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1025, closingRank: 1118 },
                FEMALE_ONLY: { openingRank: 824, closingRank: 824 }
            },
            "Geological Technology (5 Years, Integrated Master of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1233, closingRank: 1332 },
                FEMALE_ONLY: { openingRank: 699, closingRank: 699 }
            },
            "Geophysical Technology (5 Years, Integrated Master of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1162, closingRank: 1371 },
                FEMALE_ONLY: { openingRank: 928, closingRank: 928 }
            },
            "Mathematics & Computing (5 Years, Bachelor of Science and Master of Science (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 261, closingRank: 338 },
                FEMALE_ONLY: { openingRank: 823, closingRank: 823 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 397, closingRank: 515 },
                FEMALE_ONLY: { openingRank: 659, closingRank: 860 }
            },
            "Metallurgical and Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 885, closingRank: 958 },
                FEMALE_ONLY: { openingRank: 1609, closingRank: 1609 }
            },
            "Physics (5 Years, Bachelor of Science and Master of Science (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1426, closingRank: 1426 }
            },
            "Production and Industrial Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 864, closingRank: 904 },
                FEMALE_ONLY: { openingRank: 1588, closingRank: 1588 }
            }
        },
        "Indian Institute of Technology (ISM) Dhanbad": {
            "Applied Geology (5 Years, Integrated Master of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1458, closingRank: 1458 }
            },
            "Applied Geophysics (5 Years, Integrated Master of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1451, closingRank: 1451 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1081, closingRank: 1152 },
                FEMALE_ONLY: { openingRank: 1513, closingRank: 1513 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 765, closingRank: 912 },
                FEMALE_ONLY: { openingRank: 1548, closingRank: 1548 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 197, closingRank: 304 },
                FEMALE_ONLY: { openingRank: 394, closingRank: 439 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 550, closingRank: 801 },
                FEMALE_ONLY: { openingRank: 1308, closingRank: 1459 }
            },
            "Electronics and Communication Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 486, closingRank: 673 },
                FEMALE_ONLY: { openingRank: 758, closingRank: 1020 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1270, closingRank: 1360 }
            },
            "Environmental Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1351, closingRank: 1441 },
                FEMALE_ONLY: { openingRank: 390, closingRank: 390 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 340, closingRank: 603 },
                FEMALE_ONLY: { openingRank: 642, closingRank: 642 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 674, closingRank: 1064 },
                FEMALE_ONLY: { openingRank: 1322, closingRank: 1639 }
            },
            "Mineral and Metallurgical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1243, closingRank: 1340 },
                FEMALE_ONLY: { openingRank: 489, closingRank: 489 }
            },
            "Mining Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1082, closingRank: 1171 },
                FEMALE_ONLY: { openingRank: 552, closingRank: 687 }
            },
            "Mining Machinery Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1174, closingRank: 1338 },
                FEMALE_ONLY: { openingRank: 540, closingRank: 540 }
            },
            "Petroleum Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 716, closingRank: 1112 },
                FEMALE_ONLY: { openingRank: 1543, closingRank: 1543 }
            }
        },
        "Indian Institute of Technology Ropar": {
            "Artificial Intelligence and Data Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 440, closingRank: 449 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1127, closingRank: 1238 },
                FEMALE_ONLY: { openingRank: 1703, closingRank: 1703 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 706, closingRank: 744 },
                FEMALE_ONLY: { openingRank: 1699, closingRank: 1699 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 242, closingRank: 419 },
                FEMALE_ONLY: { openingRank: 773, closingRank: 773 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 554, closingRank: 764 },
                FEMALE_ONLY: { openingRank: 1427, closingRank: 1427 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1368, closingRank: 1391 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 599, closingRank: 620 },
                FEMALE_ONLY: { openingRank: 1316, closingRank: 1316 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 782, closingRank: 935 },
                FEMALE_ONLY: { openingRank: 71, closingRank: 71 }
            },
            "Metallurgical and Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1366, closingRank: 1366 },
                FEMALE_ONLY: { openingRank: 936, closingRank: 936 }
            }
        },
        "Indian Institute of Technology (BHU) Varanasi": {
            "Architecture (5 Years, Bachelor of Architecture)": {
                GENDER_NEUTRAL: { openingRank: 616, closingRank: 764 }
            },
            "Biochemical Engineering with M.Tech. in Biochemical Engineering and Biotechnology (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1350, closingRank: 1465 }
            },
            "Bioengineering with M.Tech in Biomedical Technology (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1461, closingRank: 1461 }
            },
            "Ceramic Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1297, closingRank: 1430 },
                FEMALE_ONLY: { openingRank: 788, closingRank: 788 }
            },
            "Ceramic Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1456, closingRank: 1456 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 828, closingRank: 973 },
                FEMALE_ONLY: { openingRank: 1802, closingRank: 44 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 491, closingRank: 633 },
                FEMALE_ONLY: { openingRank: 1355, closingRank: 1472 }
            },
            "Civil Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 712, closingRank: 800 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 77, closingRank: 163 },
                FEMALE_ONLY: { openingRank: 254, closingRank: 254 }
            },
            "Computer Science and Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 210, closingRank: 279 },
                FEMALE_ONLY: { openingRank: 278, closingRank: 278 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 353, closingRank: 497 },
                FEMALE_ONLY: { openingRank: 754, closingRank: 920 }
            },
            "Electrical Engineering with M.Tech. in Power Electronics (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 468, closingRank: 468 },
                FEMALE_ONLY: { openingRank: 1307, closingRank: 1307 }
            },
            "Electronics Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 324, closingRank: 421 },
                FEMALE_ONLY: { openingRank: 917, closingRank: 981 }
            },
            "Engineering Physics (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1256, closingRank: 1271 }
            },
            "Industrial Chemistry (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1380, closingRank: 1476 }
            },
            "Materials Science and Technology (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1448, closingRank: 1448 }
            },
            "Mathematics and Computing (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 316, closingRank: 385 },
                FEMALE_ONLY: { openingRank: 831, closingRank: 831 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 600, closingRank: 763 },
                FEMALE_ONLY: { openingRank: 1409, closingRank: 1585 }
            },
            "Mechanical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 970, closingRank: 1006 },
                FEMALE_ONLY: { openingRank: 267, closingRank: 267 }
            },
            "Metallurgical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1115, closingRank: 1296 },
                FEMALE_ONLY: { openingRank: 358, closingRank: 386 }
            },
            "Mining Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1186, closingRank: 1300 },
                FEMALE_ONLY: { openingRank: 496, closingRank: 728 }
            },
            "Mining Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1140, closingRank: 1140 },
                FEMALE_ONLY: { openingRank: 905, closingRank: 905 }
            },
            "Pharmaceutical Engineering & Technology (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1241, closingRank: 1449 },
                FEMALE_ONLY: { openingRank: 500, closingRank: 500 }
            },
            "Pharmaceutical Engineering & Technology (5 Years, Bachelor and Master of Technology (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1478, closingRank: 1515 }
            }
        },
        "Indian Institute of Technology Guwahati": {
            "Biosciences and Bioengineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1198, closingRank: 1318 },
                FEMALE_ONLY: { openingRank: 1766, closingRank: 1766 }
            },
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 743, closingRank: 811 },
                FEMALE_ONLY: { openingRank: 1317, closingRank: 1398 }
            },
            "Chemical Science and Technology (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 869, closingRank: 993 },
                FEMALE_ONLY: { openingRank: 916, closingRank: 916 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 361, closingRank: 624 },
                FEMALE_ONLY: { openingRank: 670, closingRank: 1246 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 74, closingRank: 100 },
                FEMALE_ONLY: { openingRank: 231, closingRank: 263 }
            },
            "Data Science and Artificial Intelligence (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 140, closingRank: 160 },
                FEMALE_ONLY: { openingRank: 379, closingRank: 379 }
            },
            "Electronics and Communication Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 204, closingRank: 282 },
                FEMALE_ONLY: { openingRank: 556, closingRank: 556 }
            },
            "Electronics and Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 108, closingRank: 328 },
                FEMALE_ONLY: { openingRank: 663, closingRank: 663 }
            },
            "Energy Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 720, closingRank: 720 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1130, closingRank: 1216 },
                FEMALE_ONLY: { openingRank: 1719, closingRank: 1719 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 195, closingRank: 227 },
                FEMALE_ONLY: { openingRank: 533, closingRank: 533 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 453, closingRank: 579 },
                FEMALE_ONLY: { openingRank: 947, closingRank: 1436 }
            }
        },
        "Indian Institute of Technology Bhilai": {
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 209, closingRank: 612 }
            },
            "Data Science and Artificial Intelligence (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 613, closingRank: 687 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 826, closingRank: 1068 },
                FEMALE_ONLY: { openingRank: 1521, closingRank: 1521 }
            },
            "Electronics and Communication Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 777, closingRank: 902 },
                FEMALE_ONLY: { openingRank: 1506, closingRank: 1506 }
            },
            "Materials Science and Metallurgical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1379, closingRank: 1379 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1169, closingRank: 1230 },
                FEMALE_ONLY: { openingRank: 306, closingRank: 306 }
            },
            "Mechatronics Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1204, closingRank: 1327 },
                FEMALE_ONLY: { openingRank: 622, closingRank: 622 }
            }
        },
        "Indian Institute of Technology Goa": {
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 399, closingRank: 519 },
                FEMALE_ONLY: { openingRank: 1272, closingRank: 1272 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 926, closingRank: 961 },
                FEMALE_ONLY: { openingRank: 1660, closingRank: 1660 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 787, closingRank: 814 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1065, closingRank: 1151 },
                FEMALE_ONLY: { openingRank: 544, closingRank: 544 }
            }
        },
        "Indian Institute of Technology Palakkad": {
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1153, closingRank: 1153 },
                FEMALE_ONLY: { openingRank: 275, closingRank: 275 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 537, closingRank: 564 },
                FEMALE_ONLY: { openingRank: 834, closingRank: 834 }
            },
            "Data Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 718, closingRank: 722 },
                FEMALE_ONLY: { openingRank: 1275, closingRank: 1275 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 896, closingRank: 965 },
                FEMALE_ONLY: { openingRank: 1552, closingRank: 1552 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1119, closingRank: 1187 },
                FEMALE_ONLY: { openingRank: 1786, closingRank: 1786 }
            }
        },
        "Indian Institute of Technology Tirupati": {
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1263, closingRank: 1291 },
                FEMALE_ONLY: { openingRank: 1789, closingRank: 1789 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 994, closingRank: 994 },
                FEMALE_ONLY: { openingRank: 236, closingRank: 236 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 129, closingRank: 492 },
                FEMALE_ONLY: { openingRank: 750, closingRank: 750 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 845, closingRank: 951 },
                FEMALE_ONLY: { openingRank: 1364, closingRank: 1364 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1190, closingRank: 1190 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1000, closingRank: 1117 }
            }
        },
        "Indian Institute of Technology Jammu": {
            "Chemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1257, closingRank: 1330 },
                FEMALE_ONLY: { openingRank: 787, closingRank: 787 }
            },
            "Civil Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 914, closingRank: 1073 },
                FEMALE_ONLY: { openingRank: 480, closingRank: 480 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 525, closingRank: 635 }
            },
            "Electrical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1039, closingRank: 1155 }
            },
            "Materials Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1390, closingRank: 1512 },
                FEMALE_ONLY: { openingRank: 941, closingRank: 941 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 892, closingRank: 1087 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1208, closingRank: 1236 },
                FEMALE_ONLY: { openingRank: 733, closingRank: 733 }
            }
        },
        "Indian Institute of Technology Dharwad": {
            "Chemical and Biochemical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1301, closingRank: 1337 }
            },
            "Civil and Infrastructure Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1017, closingRank: 1147 }
            },
            "Computer Science and Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 422, closingRank: 607 },
                FEMALE_ONLY: { openingRank: 1044, closingRank: 1044 }
            },
            "Electrical and Electronics Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 872, closingRank: 906 }
            },
            "Electronics and Communication Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 732, closingRank: 850 },
                FEMALE_ONLY: { openingRank: 1347, closingRank: 1347 }
            },
            "Engineering Physics (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 1405, closingRank: 1442 }
            },
            "Interdisciplinary Sciences (5 Years, Bachelor of Science and Master of Science (Dual Degree))": {
                GENDER_NEUTRAL: { openingRank: 1503, closingRank: 1549 },
                FEMALE_ONLY: { openingRank: 1036, closingRank: 1036 }
            },
            "Mathematics and Computing (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 596, closingRank: 788 }
            },
            "Mechanical Engineering (4 Years, Bachelor of Technology)": {
                GENDER_NEUTRAL: { openingRank: 664, closingRank: 1213 },
                FEMALE_ONLY: { openingRank: 1687, closingRank: 1687 }
            }
        }
    }

}
      

const importData = async () => {
    try {
      await connectDB();
      await IIT.create({ institutes: iitData });
      console.log("Data Imported Successfully!");
      process.exit();
    } catch (error) {
      console.error("Error importing data:", error);
      process.exit(1);
    }
  };
  
  importData();
  