const express = require('express')
const HotelController = require('../Controllers/HotelController')
const router = express.Router()

router.get('/', HotelController.index)

module.exports = router