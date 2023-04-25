const user = require("./user");
const IndexController = require('../Controllers/IndexController')

const webRoute = (appExpress) => {
  appExpress.get('/', IndexController.index)
  appExpress.use('/user', user)
}

module.exports = webRoute