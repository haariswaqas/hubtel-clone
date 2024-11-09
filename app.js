const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Set up the public directory to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
