const user = require("./user")
const city = require("./city")
const login = require("./login")
const hotel = require("./hotel")
const master = require("./master")
const register = require("./register")

const IndexController = require('../Controllers/IndexController')

const webRoute = (appExpress) => {
  appExpress.get('/', IndexController.index)
  appExpress.use('/user', user)
  appExpress.use('/master', master)
  appExpress.use('/city', city)
  appExpress.use('/hotel', hotel)
  appExpress.use('/login',checkNotAuthenticated, login)
  appExpress.use('/register', checkNotAuthenticated, register)

  function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect("/hotel");
    }
    next();
  }

  function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    return res.redirect("/login");
  }

}
module.exports = webRoute

