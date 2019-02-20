// Create sample Web Server With nodejs

// Get http module from nodejs APIs
const http = require('http');

//Create hostname
const hostname = '127.0.0.1';

// Create PORT
const port = 500;

// Create server 
const server = http.createServer((req, res) => {
    // Create status code
    res.statusCode = 200;

    // Create header
    res.setHeader('Content-Type', 'text/plain');

    // End of response server
    res.end('Hello Nodejs from app.js');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});