const express = require('express');

const server = express();

server.use(express.json());

server.use('/add-product', (req, res, next) => {
  console.log('In another middleware');
  res.send('<h1>The "Add Product" Page</h1>');
});
server.use('/', (req, res, next) => {
  console.log('In another middleware');
  res.send('<h1>Hello from Express</h1>');
});

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware

// function logger(req, res, next) {
//   console.log(req.params)
// };

module.exports = server;
