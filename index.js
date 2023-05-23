const express = require('express')
const dotenv = require('dotenv')
const webRoute = require('./src/Routes/index')
const path = require('path')
const bodyParser = require('body-parser')
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require('./src/Models/User')
const bcrypt = require('bcrypt')

dotenv.config()
const app = express()
const port = process.env.APP_PORT || 3333
require('./src/redis')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Set up session middleware
app.use(session({
  secret: "howtoinstallsddddd",
  saveUninitialized: false,
  resave: false
}));

// Set up passport middleware
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findOne({ where: { id: id } })
    .then(function (user) {
      done(null, user);
    })
    .catch(function (err) {
      done(err);
    });
});

passport.use(
  new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    try {
      const user = await User.findOne({ where: { email: email } })
      if (!user) {
        return done(null, false, { message: 'Incorrect username and password' });
      }
      bcrypt.compare(password, user.password, function (err, result) {
        console.log(err)
        if (err) { return done(err); }
        if (!result) {
          return done(null, false, { message: 'Incorrect username and password' });
        }
        return done(null, user);
      })
    } catch (err) {
      return done(err);
    }
  })
);

//set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'))

//routes
webRoute(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})