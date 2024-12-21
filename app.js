require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const questionRoutes = require('./routes/questionRoutes');
const swaggerDocs = require('./swagger');

const app = express();

app.use(cors());
app.use(bodyParser.json());
swaggerDocs(app);

const mongoUri = process.env.MONGO_URI;
mongoose.connect(mongoUri)
  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

app.get('/', (req, res) => {
  res.send('Question Management API is running!');
});

app.use('/questions', questionRoutes);

module.exports = app;
