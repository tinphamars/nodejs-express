const express = require('express');
const route = express.Router();
const MasterController = require('../Controllers/MasterController');

route.get('/', MasterController.index)
route.get('/create', MasterController.create)
route.post('/create', MasterController.createMaster)
route.get('/:id', MasterController.detail)
route.get('/update/:id', MasterController.getIdUpdate)
route.post('/update/:id', MasterController.updateMaster)
route.post('/delete', MasterController.delete)

module.exports = route