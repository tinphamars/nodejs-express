const express = require("express");
const UserController = require('../Controllers/UserController')
const route = express.Router();

route.get('/', UserController.index)
route.get('/create', UserController.create)
route.post('/create', UserController.createPost)
route.get('/:id', UserController.getId)

module.exports = route