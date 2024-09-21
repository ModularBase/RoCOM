const express = require('express');
const app = express();
const port = 3000;

// Basic route that returns a simple message
app.get('/', (req, res) => {
  res.json({ message: "Welcome to the testing API!" });
});

// Route to test GET requests
app.get('/test-get', (req, res) => {
  res.json({ response: "GET request successful! hi" });
});

// Route to test POST requests
app.post('/test-post', (req, res) => {
  res.json({ response: "POST request successful!" });
});

// Start the server
app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
