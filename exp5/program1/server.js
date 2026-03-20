// Import http module to create server
import http from 'http';

// Create server
const server = http.createServer((req, res) => { //Function that runs for every request
    // Get the URL path
    const url = req.url;
    
    console.log('Request received for:', url);
    
    // Simple routing
    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' }); //res.writehead() - Sets status code (200=OK, 404=Not Found)
        res.end('<h1>Home Page</h1><p>Welcome to Node.js!</p>'); //res.end() - Sends response back to browser
    }
    else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>About Page</h1><p>This is a simple server</p>');
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1><p>Page does not exist</p>');
    }
});

// Start server
server.listen(3000, () => { //Starts server on port 3000
    console.log('Server running at http://localhost:3000');
});