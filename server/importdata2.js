require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const InstituteType2 = require('./models/instituteType2');

// Connect to MongoDB async function
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
}

// Import data from JSON files for NITs
async function importNITData(filePath) {
  try {
    // Delete existing NIT data
    await InstituteType2.deleteMany({ instituteType: 'NIT' });
    console.log('Previous NIT data deleted.');

    // Read JSON file
    const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    // Transform data to match the schema
    const categories = Object.keys(jsonData).map(categoryName => ({
      category: categoryName,
      institutes: Object.entries(jsonData[categoryName]).map(([instituteName, programs]) => ({
        name: instituteName,
        programs: Object.entries(programs).map(([programName, stateData]) => ({
          name: programName,
          HS: {
            GENDER_NEUTRAL: stateData.HS?.GENDER_NEUTRAL || null,
            FEMALE_ONLY: stateData.HS?.FEMALE_ONLY || null
          },
          OS: {
            GENDER_NEUTRAL: stateData.OS?.GENDER_NEUTRAL || null,
            FEMALE_ONLY: stateData.OS?.FEMALE_ONLY || null
          }
        }))
      }))
    }));

    // Create and save the NIT institute type document
    const nitData = new InstituteType2({ 
      instituteType: 'NIT', 
      categories 
    });

    await nitData.save();
    console.log('NIT data imported successfully');
  } catch (error) {
    console.error('Error importing NIT data:', error);
  }
}

// Run import function
async function run() {
  await connectDB();
  await importNITData('./data/output2.json');
  mongoose.connection.close();
}

run();