const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  Question: {
    type: String,
    required: true,
  },
  Solution: {
    type: String,
    required: true,
  },
  CorrectAnswer: {
    type: String,
    required: true,
  },
  Options: {
    type: [String],
    required: true,
  },
  Steps: [
    {
      Title: { type: String, required: true },
      Result: { type: String, required: true },
      ImageUrl: { type: String, required: false },
    },
  ],
  ImageUrl: {
    type: String,
    required: false,
  },
}, { timestamps: true });

module.exports = mongoose.model('Question', QuestionSchema);
