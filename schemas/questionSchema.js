const questionSchema = {
  type: 'object',
  properties: {
    Question: { type: 'string', minLength: 1 },
    Solution: { type: 'string', minLength: 1 },
    CorrectAnswer: { type: 'string', minLength: 1 },
    Options: {
      type: 'array',
      items: { type: 'string' },
      minItems: 1,
    },
    Steps: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          Title: { type: 'string', minLength: 1 },
          Result: { type: 'string', minLength: 1 },
          ImageUrl: { type: 'string', format: 'url', nullable: true },
        },
        required: ['Title', 'Result'],
        additionalProperties: false,
      },
    },
    ImageUrl: { type: 'string', format: 'url', nullable: true },
  },
  required: ['Question', 'Solution', 'CorrectAnswer', 'Options'],
  additionalProperties: false,
};

module.exports = questionSchema;
