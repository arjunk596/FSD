// index.js - Using Morgan
import express from 'express';
import morgan from 'morgan';

const app = express();
const port = 3000;

// 🟢 Use Morgan middleware for logging
app.use(morgan('combined')); //detailed logs.

app.get('/', (req, res) => {
    res.send('<h1>Home with Morgan Logger</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>');
});

app.get('/contact', (req, res) => {
    res.send('<h1>Contact Page</h1>');
});

app.listen(port, () => {
    console.log(`🚀 Server at http://localhost:${port}`);
});