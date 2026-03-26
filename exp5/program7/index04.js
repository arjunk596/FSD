// index.js - Built-in Middleware
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// 🟢 1. express.json() - Parse JSON bodies
app.use(express.json());

// 🟢 2. express.urlencoded() - Parse form data
app.use(express.urlencoded({ extended: true }));

// 🟢 3. express.static() - Serve static files
app.use(express.static('public'));

// Route that receives JSON
app.post('/api/data', (req, res) => {
    console.log('JSON Data received:', req.body);
    res.json({ 
        message: 'Data received!', 
        data: req.body 
    });
});

// Route that receives form data
app.post('/submit-form', (req, res) => {
    console.log('Form Data:', req.body);
    res.send(`
        <h1>Form Submitted!</h1>
        <p>Name: ${req.body.name}</p>
        <p>Email: ${req.body.email}</p>
    `);
});

// Create a simple HTML form
app.get('/form', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Form</title>
        </head>
        <body>
            <h1>Submit Form</h1>
            <form action="/submit-form" method="POST">
                <input type="text" name="name" placeholder="Name"><br>
                <input type="email" name="email" placeholder="Email"><br>
                <button type="submit">Submit</button>
            </form>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`🚀 Server at http://localhost:${port}`);
});