const http = require('http');

const server = http.createServer((req, res) => {
  res.end('It works!');
});

server.listen(5000, () => {
  console.log('Basic server running on http://localhost:5000');
});
