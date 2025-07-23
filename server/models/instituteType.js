const mongoose = require('mongoose');

// Schema for storing rank data
const rankSchema = new mongoose.Schema({
  openingRank: { type: Number, required: true },
  closingRank: { type: Number, required: true }
});

// Schema for gender-based rank data
const genderSchema = new mongoose.Schema({
  GENDER_NEUTRAL: { type: rankSchema, default: null },
  FEMALE_ONLY: { type: rankSchema, default: null }
});

// Schema for academic programs
const programSchema = new mongoose.Schema({
  name: { type: String, required: true },
  genderRanks: { type: genderSchema, default: () => ({}) }
});

// Schema for institutes
const instituteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  programs: [programSchema]
});

// Dynamic category schema using key-value pairs
const categorySchema = new mongoose.Schema({
  category: { type: String, required: true }, // OPEN, OBC-NCL, SC, ST, etc.
  institutes: [instituteSchema]
});

const instituteTypeSchema = new mongoose.Schema({
  instituteType: { type: String, required: true },
  categories: [categorySchema]
});

const instituteType = mongoose.model('instituteType', instituteTypeSchema);

module.exports = instituteType;
