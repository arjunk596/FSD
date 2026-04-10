const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the directory where views are stored
app.set('views', path.join(__dirname, 'views'));

// Route to render the profile page with dynamic data
app.get('/profile', (req, res) => {
    const student = {
        name: "Joshua",
        branch: "Computer Engineering",
        year: "SE"
    };
    res.render('index', student);
});

// Home route (optional)
app.get('/', (req, res) => {
    res.send('<h1>Welcome</h1><a href="/profile">View Student Profile</a>');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});