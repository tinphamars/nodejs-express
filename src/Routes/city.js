const express = require('express')
const CityController = require('../Controllers/CityController')
const route = express.Router()

route.get('/', CityController.index)

module.exports = route