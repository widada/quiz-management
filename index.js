const PORT = process.env.PORT || 3000;
const app = require('./app');

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}