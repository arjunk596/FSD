// Import express
import express from 'express';

// Create an express app
const app = express();

// Define the port
const port = 3000;

// Create a route for home page
app.get('/', (req, res) => {
    res.send('<h1>Hello from Express!</h1>');
});

// Start the server
app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});