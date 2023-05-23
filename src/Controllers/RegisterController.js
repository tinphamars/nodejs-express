const User = require('../Models/User');
const passport = require("passport");
const bcrypt = require("bcrypt");

class RegisterController {

  view(req, res) {
    res.render('register')
  }

  async register(req, res, next) {
    const password = await bcrypt.hash('password', 10)

    const ser = await User.create({
      role_id: 1,
      name: req.body.name,
      email: req.body.email,
      password: password,
      remember_token: password,
    })

    if (ser) {
      res.redirect('/login')
    }
  }
}

module.exports = new RegisterController();