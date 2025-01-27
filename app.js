const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});
app.get('/guides', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'guides.html'));
  });

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/tours', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'tours.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Riq-to-Link is running at http://localhost:${PORT}`);
});
