const City = require('../Models/City')
class CityController {

  index (req, res) {
    res.send('Hello city');
  }
}

module.exports = new CityController();