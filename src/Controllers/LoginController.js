const User = require('../Models/User')
const passport = require("passport");
class LoginController {

  login(req, res) {
    res.render('login')
  }

  postLogin(req, res, next) {
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.redirect("/login");
      }
      req.logIn(user, err => {
        if (err) {
          return next(err);
        }
        return res.redirect("/");
      });
    })(req, res, next);
  }

}

module.exports = new LoginController();