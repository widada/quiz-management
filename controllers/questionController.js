const Question = require('../models/Question');

const createQuestion = async (req, res) => {
  try {
    const {
      Question: questionText,
      Solution,
      CorrectAnswer,
      Options,
      Steps,
      ImageUrl,
    } = req.body;

    if (!questionText || !Solution || !CorrectAnswer || !Options || Options.length < 1) {
      return res.status(400).json({ message: 'Invalid data. Please provide all required fields.' });
    }

    const newQuestion = new Question({
      Question: questionText,
      Solution,
      CorrectAnswer,
      Options,
      Steps,
      ImageUrl,
    });
    await newQuestion.save();

    res.status(201).json({ message: 'Question created successfully!', data: newQuestion });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while creating the question.', error });
  }
};

const updateQuestion = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedQuestion = await Question.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedQuestion) {
      return res.status(404).json({ message: 'Question not found' });
    }

    res.status(200).json({ message: 'Question updated successfully!', data: updatedQuestion });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while updating the question.', error });
  }
};

const getQuestionById = async (req, res) => {
  try {
    const { id } = req.params;

    const question = await Question.findById(id);

    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }

    res.status(200).json({ message: 'Question retrieved successfully!', data: question });
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(400).json({ message: 'Invalid question ID.' });
    }

    res.status(500).json({ message: 'An error occurred while retrieving the question.', error });
  }
};

const getAllQuestions = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);

    if (isNaN(pageNumber) || isNaN(limitNumber) || pageNumber <= 0 || limitNumber <= 0) {
      return res.status(400).json({ message: 'Invalid pagination parameters.' });
    }

    const questions = await Question.find({}, '_id Question')
      .skip((pageNumber - 1) * limitNumber)
      .limit(limitNumber);

    const totalQuestions = await Question.countDocuments();

    res.status(200).json({
      message: 'Questions retrieved successfully!',
      data: questions,
      pagination: {
        total: totalQuestions,
        page: pageNumber,
        limit: limitNumber,
        totalPages: Math.ceil(totalQuestions / limitNumber),
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred while retrieving questions.', error });
  }
};

const deleteQuestion = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedQuestion = await Question.findByIdAndDelete(id);

    if (!deletedQuestion) {
      return res.status(404).json({ message: 'Question not found' });
    }

    res.status(200).json({ message: 'Question deleted successfully!', data: deletedQuestion });
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(400).json({ message: 'Invalid question ID.' });
    }

    res.status(500).json({ message: 'An error occurred while deleting the question.', error });
  }
};


module.exports = {
  createQuestion,
  updateQuestion,
  getQuestionById,
  getAllQuestions,
  deleteQuestion
};
