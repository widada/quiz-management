require('dotenv').config();
const mongoose = require('mongoose');
const Question = require('../models/Question');

const seedQuestions = [
  {
    Question: 'What is 2 + 2?',
    Solution: 'The correct answer is 4.',
    CorrectAnswer: '4',
    Options: ['1', '2', '4', '5'],
    Steps: [
      {
        Title: 'Step 1',
        Result: 'Analyze the problem.',
        ImageUrl: 'https://example.com/step1.png',
      },
    ],
    ImageUrl: 'https://example.com/question.png',
  },
  {
    Question: 'What is the capital of France?',
    Solution: 'The correct answer is Paris.',
    CorrectAnswer: 'Paris',
    Options: ['Berlin', 'Paris', 'Madrid', 'Rome'],
    Steps: [],
    ImageUrl: 'https://example.com/question2.png',
  },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log('Connected to MongoDB');

    await Question.deleteMany();
    console.log('Cleared the Question collection.');

    await Question.insertMany(seedQuestions);
    console.log('Seeded the Question collection.');

    mongoose.connection.close();
    console.log('Database seeding completed and connection closed.');
  } catch (error) {
    console.error('Error seeding the database:', error);
    mongoose.connection.close();
  }
};

seedDatabase();
