// index.js - Band Name Generator
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;
let bandName = "";

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

// 🔴 Custom Middleware: Band Name Generator
function bandNameGenerator(req, res, next) {
    console.log('🎸 Generating band name...');
    if (req.body.street && req.body.pet) {
        bandName = req.body.street + ' ' + req.body.pet;
        console.log(`   Band name: ${bandName}`);
    }
    next();
}

// Apply middleware to all routes
app.use(bandNameGenerator);

// Serve form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Handle form submission
app.post('/submit', (req, res) => {
    res.send(`
        <h1>Your Band Name is:</h1>
        <h2>🎸 ${bandName} 🎸</h2>
        <a href="/">Generate Another</a>
    `);
});

app.listen(port, () => {
    console.log(`🚀 Server at http://localhost:${port}`);
});