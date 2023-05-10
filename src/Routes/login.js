const express = require("express");
const LoginController = require('../Controllers/LoginController')
const route = express.Router();

route.get('/', LoginController.login)
route.post('/', LoginController.postLogin)

module.exports = route