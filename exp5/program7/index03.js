// index.js - Multiple Middleware
import express from 'express';
import morgan from 'morgan';

const app = express();
const port = 3000;

// 🟢 Middleware 1: Morgan (logging)
app.use(morgan('combined'));

// 🟢 Middleware 2: Custom timestamp
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    console.log(`Request at: ${req.requestTime}`);
    next();
});

// 🟢 Middleware 3: Authentication check (example)
app.use((req, res, next) => {
    console.log('Checking authentication...');
    // In real app, you'd check for tokens/sessions
    req.isAuthenticated = true; // Simulating authenticated user
    next();
});

// 🟢 Middleware 4: Add custom header
app.use((req, res, next) => {
    res.setHeader('X-Powered-By', 'Express-Middleware-Demo');
    next();
});

// Routes
app.get('/', (req, res) => {
    res.send(`
        <h1>Multiple Middleware Demo</h1>
        <p>Request Time: ${req.requestTime}</p>
        <p>Authenticated: ${req.isAuthenticated ? '✅ Yes' : '❌ No'}</p>
        <p>Check terminal to see all middleware in action!</p>
    `);
});

app.listen(port, () => {
    console.log(`🚀 Server at http://localhost:${port}`);
});