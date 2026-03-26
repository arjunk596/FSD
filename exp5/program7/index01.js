// index.js - Custom Logger Middleware
import express from 'express';

const app = express();
const port = 3000;

// This runs for EVERY request
function logger(req, res, next) { //creates middleware funciton
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${timestamp}] ${req.method} request to ${req.url}`);
    next(); // Move to next route
}

app.use(logger); //activates the logger

// Routes
app.get('/', (req, res) => {
    console.log('🏠 Home route reached');
    res.send('<h1>Home Page</h1><p>Check your terminal for logs</p>');
});

app.get('/about', (req, res) => {
    console.log('📖 About route reached');
    res.send('<h1>About Page</h1>');
});

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});

//flow 
// 1. Browser → http://localhost:3000/about
// 2. LOGGER MIDDLEWARE activates
//    - Prints: "Someone visited: /about"
//    ─ Calls next()
// 3. ABOUT ROUTE activates
//    ─ Sends: "About Page" to browser
// 4. Browser displays the page

