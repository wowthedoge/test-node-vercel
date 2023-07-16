const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.json()); // Middleware to parse JSON request bodies

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳');
});

app.get('/about', (req, res) => {
  res.send('This is my about route..... ');
});

app.post('/', (req, res) => {
  res.send('Just posted a request');
});

// Export the Express API
module.exports = app;
