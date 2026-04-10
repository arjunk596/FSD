const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());        // to parse JSON request bodies
app.use(morgan('dev'));         // log requests to console

// ------------------- ROUTES -------------------

// GET / - Welcome message
app.get('/', (req, res) => {
    res.send('Welcome to the Student Information Server!');
});

// GET /about - Student details
app.get('/about', (req, res) => {
    const student = {
        name: 'Arjun Kharche',
        rollNo: 10609,
        course: 'Computer Engineering'
    };
    res.send(`
    Name: ${student.name}<br>
    Roll No: ${student.rollNo}<br>
    Course: ${student.course}
  `);
});

// GET /contact - Contact info
app.get('/contact', (req, res) => {
    res.send(`
    Email: arjunkharche06@gmail.com<br>
    Phone: +91 9619541475
  `);
});

// POST /register - Register student
app.post('/register', (req, res) => {
    // You can optionally use req.body to get student data
    res.status(201).send('Student registered successfully!');
});

// PUT /update - Update student info
app.put('/update', (req, res) => {
    // You can optionally update data using req.body
    res.status(200).send('Student information updated!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});