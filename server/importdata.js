require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const InstituteType = require('./models/instituteType');

// Connect to MongoDB
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
}

// Import data from JSON files
async function importData(filePath, instituteType) {
  try {
    // Delete existing data for the given institute type
    await InstituteType.deleteMany({ instituteType });
    console.log(`Previous data for ${instituteType} deleted.`);

    const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    const categories = Object.keys(jsonData).map(categoryName => ({
      category: categoryName,
      institutes: Object.entries(jsonData[categoryName]).map(([instituteName, programs]) => ({
        name: instituteName,
        programs: Object.entries(programs).map(([programName, genderRanks]) => ({
          name: programName,
          genderRanks
        }))
      }))
    }));

    const instituteTypeData = new InstituteType({ instituteType, categories });

    await instituteTypeData.save();
    console.log(`${instituteType} data imported successfully`);
  } catch (error) {
    console.error(`Error importing ${instituteType} data:`, error);
  }
}

// Run import for all files
async function run() {
  await connectDB();
  await importData('./data/output1.json', 'IIT');
  await importData('./data/output3.json', 'IIIT');
  mongoose.connection.close();
}

run();