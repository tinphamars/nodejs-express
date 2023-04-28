const Hotel = require('../Models/Hotel')
const City = require('../Models/City')
const Tran = require('../Models/Tran')

class HotelController {

  async index(req, res) {
    const hotels = await Hotel.findAll({
      include: City
    })

    res.render('hotelIndex', { hotels })
  }

}
module.exports = new HotelController()