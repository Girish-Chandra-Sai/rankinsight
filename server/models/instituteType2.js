const mongoose = require('mongoose');

// Schema for storing rank data with Home State (HS) and Other State (OS)
const rankSchema = new mongoose.Schema({
  openingRank: { type: Number, required: true },
  closingRank: { type: Number, required: true }
});

const genderSchema = new mongoose.Schema({
  GENDER_NEUTRAL: { type: rankSchema, default: null },
  FEMALE_ONLY: { type: rankSchema, default: null }
});

const programSchema = new mongoose.Schema({
  name: { type: String, required: true },
  HS: { type: genderSchema, default: () => ({}) },
  OS: { type: genderSchema, default: () => ({}) }
});

const instituteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  programs: [programSchema]
});

const categorySchema = new mongoose.Schema({
  category: { type: String, required: true },
  institutes: [instituteSchema]
});

const instituteTypeSchema = new mongoose.Schema({
  instituteType: { type: String, required: true },
  categories: [categorySchema]
});

const InstituteType2 = mongoose.model('InstituteType2', instituteTypeSchema);

module.exports = InstituteType2;
