const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/terms', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'terms-conditions.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/experiences', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'experiences.html'));
});
app.get('/guides', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'guides.html'));
  });
  app.get('/quote', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'quote.html'));
  });
  app.get('/book-with-confidence', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'book-with-confidence.html'));
  });


app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});
app.get('/tours', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'tours.html'));
});
app.get('/guided-small-tours', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'guided-small-tours.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Riq-to-Link is running at http://localhost:${PORT}`);
});
