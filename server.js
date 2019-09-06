const express = require('express');
const userRouter = require('./users/userRouter.js');
const postRouter = require('./posts/postRouter.js');

const server = express();

server.use(express.json());
server.use(logger);
// server.use('/api/posts', postRouter);
server.use('/api/users', userRouter);

// server.use('/', (req, res, next) => {
//   console.log('In another middleware');
//   res.send('<h1>Hello from Express</h1>');
// });

server.get('/', logger, (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware

function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${ req.method } to ${ req.originalUrl } from ${ req.get('Origin') }`
  );
  next();
};

module.exports = server;
