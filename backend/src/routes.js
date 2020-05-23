const express = require('express');
const routes = express.Router();

const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');
const TodoController = require('./app/controllers/TodoController');

const authMiddleware = require('./app/middleware/auth');

routes.post('/users', UserController.storage);
routes.post('/sessions', SessionController.storage);

// routes.use(authMiddleware);

routes.get('/todos', TodoController.index);
routes.post('/todos', TodoController.storage);
routes.delete('/todos/:id', TodoController.delete);

module.exports = routes;