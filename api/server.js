const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const authenticate = require('../auth/authenticate-middleware.js')

const usersRouter = require('../users/users-router.js');
const authRouter = require('../auth/auth-router.js');
const quoteRouter = require('../quotes/quotes-router.js')
const todoRouter = require('../todo/todo-Router.js')

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/users', usersRouter);
server.use('/api/auth', authRouter);
server.use('/api/quote', quoteRouter);
server.use('/api/todo', todoRouter);

server.get('/', (req, res) => {
    res.send("It's working?? maybe.")
})

module.exports = server;