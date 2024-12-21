const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const Question = require('../models/Question');

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
  await mongoose.connection.close();
});

beforeEach(async () => {
  await Question.deleteMany();
});

describe('API Tests for Questions', () => {
  // Test GET all questions with pagination
  it('GET /questions - should return a list of questions with pagination', async () => {
    const response = await request(app).get('/questions?page=1&limit=2');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
    expect(response.body.data).toBeInstanceOf(Array);
  });

  // Test POST create question
  it('POST /questions - should create a new question', async () => {
    const newQuestion = {
      Question: 'What is the capital of France?',
      Solution: 'The correct answer is Paris.',
      CorrectAnswer: 'Paris',
      Options: ['Berlin', 'Paris', 'Madrid', 'Rome'],
      Steps: [],
      ImageUrl: 'https://example.com/question.png',
    };

    const response = await request(app).post('/questions').send(newQuestion);
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('message', 'Question created successfully!');
    expect(response.body.data).toHaveProperty('_id');
    expect(response.body.data.Question).toBe(newQuestion.Question);
  });

  // Test GET question by ID
  it('GET /questions/:id - should return the details of a specific question', async () => {
    const newQuestion = {
      Question: 'What is the capital of Japan?',
      Solution: 'The correct answer is Tokyo.',
      CorrectAnswer: 'Tokyo',
      Options: ['Tokyo', 'Osaka', 'Nagoya', 'Kyoto'],
      Steps: [],
      ImageUrl: 'https://example.com/question2.png',
    };

    const postResponse = await request(app).post('/questions').send(newQuestion);
    const questionId = postResponse.body.data._id;

    const getResponse = await request(app).get(`/questions/${questionId}`);
    expect(getResponse.status).toBe(200);
    expect(getResponse.body).toHaveProperty('message', 'Question retrieved successfully!');
    expect(getResponse.body.data.Question).toBe(newQuestion.Question);
  });

  // Test PUT update question
  it('PUT /questions/:id - should update the details of a question', async () => {
    const newQuestion = {
      Question: 'What is the capital of Italy?',
      Solution: 'The correct answer is Rome.',
      CorrectAnswer: 'Rome',
      Options: ['Milan', 'Rome', 'Naples', 'Venice'],
      Steps: [],
      ImageUrl: 'https://example.com/question3.png',
    };

    const postResponse = await request(app).post('/questions').send(newQuestion);
    const questionId = postResponse.body.data._id;

    const updatedData = {
      Question: 'Updated: What is the capital of Italy?',
      Solution: 'Updated: The correct answer is Rome.',
      CorrectAnswer: 'Rome',
      Options: ['Milan', 'Rome', 'Naples', 'Venice'],
      Steps: [],
      ImageUrl: 'https://example.com/question3-updated.png',
    };

    const putResponse = await request(app).put(`/questions/${questionId}`).send(updatedData);
    expect(putResponse.status).toBe(200);
    expect(putResponse.body).toHaveProperty('message', 'Question updated successfully!');
    expect(putResponse.body.data.Question).toBe(updatedData.Question);

    const getResponse = await request(app).get(`/questions/${questionId}`);
    expect(getResponse.body.data.Question).toBe(updatedData.Question);
    expect(getResponse.body.data.ImageUrl).toBe(updatedData.ImageUrl);
  });

  // Test DELETE question
  it('DELETE /questions/:id - should delete a question by ID', async () => {
    const newQuestion = {
      Question: 'What is the capital of Germany?',
      Solution: 'The correct answer is Berlin.',
      CorrectAnswer: 'Berlin',
      Options: ['Berlin', 'Paris', 'Madrid', 'Rome'],
      Steps: [],
      ImageUrl: 'https://example.com/question.png',
    };

    const postResponse = await request(app).post('/questions').send(newQuestion);
    const questionId = postResponse.body.data._id;

    const deleteResponse = await request(app).delete(`/questions/${questionId}`);
    expect(deleteResponse.status).toBe(200);
    expect(deleteResponse.body).toHaveProperty('message', 'Question deleted successfully!');
  });
});
