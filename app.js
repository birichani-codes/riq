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

app.get('/privately-guided-tours', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'privately-guided-tours.html'));
});

app.get('/about-us', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about-us.html'));
});

app.get('/summer-tours', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'summer.html'));
});app.get('/winter-tours', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'winter.html'));
});

app.get('/Natural-Wonders-of-Iceland', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Natural-Wonders-of-Iceland.html'));
});
app.get('/guided-small-tours', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'guided-small-tours.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Riq-to-Link is running at http://localhost:${PORT}`);
});
