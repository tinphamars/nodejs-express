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
    if (req.body) {
      const ser = await User.create(req.body)
      console.log(ser)
      // res.redirect('/master')
    }
  }
}

module.exports = new UserController()