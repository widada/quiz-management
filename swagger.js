const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Question Management API',
      version: '1.0.0',
      description: 'API for managing questions with pagination and CRUD operations',
    },
    servers: [
      {
        url: process.env.APP_URL,
        description: 'Local server',
      },
    ],
  },
  apis: ['./docs/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = swaggerDocs;
