const express = require("express");
const UserController = require('../Controllers/UserController')
const route = express.Router();

route.get('/', UserController.index)
route.get('/:id', UserController.getId)

module.exports = route