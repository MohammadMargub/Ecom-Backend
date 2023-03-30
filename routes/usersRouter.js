const express = require('express');
const usersRouter = express.Router()

const { addUser } = require('../controller/usersController')

usersRouter.post('/addusers', addUser)

module.exports = usersRouter;