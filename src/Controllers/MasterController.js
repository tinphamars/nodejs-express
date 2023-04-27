const { where } = require('sequelize')
const Master = require('../Models/Master')

class MasterController {

  async index(req, res) {
    const masters = await Master.findAll()
    res.render('master', { masters })
  }

  async detail(req, res) {
    const master = await Master.findOne({ where: { 'id': req.params.id } })
    res.render('masterDetail', { master })
  }

  create(req, res) {
    res.render('masterCreate')
  }

  async createMaster(req, res) {
    if (req.body) {
      const ser = await Master.create(req.body)
      if (ser) {
        res.redirect('/master')
      }
    }
  }

  async updateMaster(req, res) {
    const masterId = req.params.id
    const { name, avatar } = req.body;
    const number = await Master.update({ name, avatar }, { where: { 'id': masterId } })
    if (number == 1) {
      return res.redirect('/master')
    }
  }

  async getIdUpdate(req, res) {
    const masterId = req.params.id
    const edit = await Master.findOne({ where: { 'id': masterId } })
    console.log('getIdUpdate', masterId)
    res.render('masterEdit', { edit })
  }

  async delete(req, res) {
    Master.destroy({
      where: { id: req.body.id }
    }).then(function (deletedUser) {
      if (deletedUser) {
        return res.redirect('/master');
      }
    })
  }
}

module.exports = new MasterController()