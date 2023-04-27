const express = require('express')
const dotenv = require('dotenv')
const webRoute = require('./src/Routes/index')
const path = require('path')
const bodyParser = require('body-parser')

dotenv.config()
const app = express()
const port = process.env.APP_PORT || 3333

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'))

//routes
webRoute(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})