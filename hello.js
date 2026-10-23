// 1. Import the built-in HTTP module
const http = require('http');

// 2. Define the server host and port number
const hostname = '127.0.0.1'; // localhost
const port = 3000;

// 3. Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the response status code and content type header
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // Send the response body text
  res.end('Hello, World!\n');
});

// 4. Start the server and listen for incoming requests
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});