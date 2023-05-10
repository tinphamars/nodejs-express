const User = require('../Models/User')
class LoginController {

  login (req, res) {
    res.render('login')
  }

  postLogin (req, res) {
    res.send('Hello Login');
  }
}

module.exports = new LoginController();