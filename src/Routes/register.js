const express = require("express");
const RegisterController = require('../Controllers/RegisterController')
const route = express.Router();

route.get('/', RegisterController.view)
route.post('/', RegisterController.register)

module.exports = route