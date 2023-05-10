const user = require("./user")
const city = require("./city")
const login = require("./login")
const hotel = require("./hotel")
const master = require("./master")

const IndexController = require('../Controllers/IndexController')

const webRoute = (appExpress) => {
  appExpress.get('/', IndexController.index)
  appExpress.use('/user', user)
  appExpress.use('/master', master)
  appExpress.use('/city', city)
  appExpress.use('/hotel', hotel)
  appExpress.use('/login', login)
}

module.exports = webRoute

