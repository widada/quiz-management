const express = require('express');
const { 
  createQuestion,
  updateQuestion,
  getAllQuestions,
  getQuestionById,
  deleteQuestion
} = require('../controllers/questionController');
const validate = require('../middlewares/validate');
const questionSchema = require('../schemas/questionSchema');

const router = express.Router();

router.post('/', validate(questionSchema), createQuestion);
router.get('/', getAllQuestions);
router.put('/:id', validate(questionSchema), updateQuestion);
router.get('/:id', getQuestionById);
router.delete('/:id', deleteQuestion);

module.exports = router;
