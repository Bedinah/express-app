// test-api.js
const http = require('http');

const data = JSON.stringify({
  name: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  status: 'available'
});

const options = {
  hostname: 'localhost',
  port: 3000, // Replace with your actual port
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = http.request(options, (res) => {
  let responseData = '';
  
  res.on('data', (chunk) => {
    responseData += chunk;
  });
  
  res.on('end', () => {
    console.log('Status Code:', res.status);
    console.log('Response:', JSON.parse(responseData));
  });
});

req.on('error', (error) => {
  console.error('Error:', error.message);
});

req.write(data);
req.end();