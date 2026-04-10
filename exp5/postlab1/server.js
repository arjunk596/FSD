const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, etc.) from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Handle POST request from the form
app.post('/submit', (req, res) => {
    const { studentName, branch, year } = req.body;

    // Display the submitted information
    res.send(`
                <p><strong>Student Name:</strong> ${studentName}</p>
                <p><strong>Branch:</strong> ${branch}</p>
                <p><strong>Year:</strong> ${year}</p>
    `);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});