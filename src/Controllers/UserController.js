const User = require('../Models/User')

class UserController {

  async index(req, res) {
    const users = await User.findAll()
    res.render('user', { users })
  }

  async getId(req, res) {
    const user = await User.findOne({ 'id': req.params.id })
    res.render('userDetail', { user })
  }

  create(req, res) {
    res.render('userCreate')
  }

  async createPost(req, res) {
    console.log(req.body)
  }
}

module.exports = new UserController()