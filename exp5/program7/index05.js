// index.js - Route-Specific Middleware
import express from 'express';

const app = express();
const port = 3000;

// 🔴 Middleware that runs only for specific routes

// Middleware for admin routes
function adminAuth(req, res, next) {
    console.log('🔐 Admin authentication check');
    const isAdmin = true; // In real app, check session/token
    if (isAdmin) {
        next();
    } else {
        res.status(403).send('Access Denied');
    }
}

// Middleware for API routes
function apiLogger(req, res, next) {
    console.log(`📡 API Request: ${req.method} ${req.url}`);
    next();
}

// Public routes (no middleware)
app.get('/', (req, res) => {
    res.send('<h1>Public Home Page</h1>');
});

// Admin routes (with adminAuth middleware)
app.get('/admin/dashboard', adminAuth, (req, res) => {
    res.send('<h1>Admin Dashboard</h1>');
});

app.get('/admin/users', adminAuth, (req, res) => {
    res.send('<h1>Admin Users Page</h1>');
});

// API routes (with apiLogger middleware)
app.get('/api/users', apiLogger, (req, res) => {
    res.json([{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]);
});

app.post('/api/users', apiLogger, (req, res) => {
    res.status(201).json({ message: 'User created' });
});

app.listen(port, () => {
    console.log(`🚀 Server at http://localhost:${port}`);
    console.log('📌 Try these routes:');
    console.log('   GET  /');
    console.log('   GET  /admin/dashboard');
    console.log('   GET  /admin/users');
    console.log('   GET  /api/users');
});