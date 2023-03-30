const express = require('express');
const rootrouter = express.Router();
const addUsers = require("./controller/usersController")

rootrouter.use('/', addUsers)


module.exports = rootrouter;