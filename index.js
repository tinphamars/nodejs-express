const express = require('express')
const dotenv = require('dotenv')
const webRoute = require('./src/Routes/index')
const path = require('path')
const bodyParser = require('body-parser')
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

dotenv.config()
const app = express()
const port = process.env.APP_PORT || 3333

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Set up session middleware
app.use(session({
  secret: "secret-key",
  resave: false,
  saveUninitialized: false
}));

// Set up passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Create a local strategy for passport to use
passport.use(new LocalStrategy(
  (username, password, done) => {
    // TODO: validate username and password against a database
    if (username === "user" && password === "password") {
      return done(null, { id: 1, username: "user" });
    } else {
      return done(null, false, { message: "Invalid username or password" });
    }
  }
));

//set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'))

//routes
webRoute(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})