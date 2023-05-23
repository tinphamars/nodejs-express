const Master = require('../Models/Master')
const client = require("../redis");

class MasterController {

  index = async (req, res) => {
    const cacheMaster = await client.get('master')

    if (cacheMaster) {
      console.log('in cache')
      const masters = JSON.parse(cacheMaster);

      return res.render('master', { masters });
    } else {
      const masters = await Master.findAll();
      await client.set('master', JSON.stringify(masters));
      return res.render('master', { masters });
    }
  };
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
        await client.del('master');
        res.redirect('/master')
      }
    }
  }

  async updateMaster(req, res) {
    const masterId = req.params.id
    const { name, avatar } = req.body;
    const number = await Master.update({ name, avatar }, { where: { 'id': masterId } })
    if (number == 1) {
      await client.del('master');
      return res.redirect('/master')
    }
  }

  async getIdUpdate(req, res) {
    const masterId = req.params.id
    const edit = await Master.findOne({ where: { 'id': masterId } })
    res.render('masterEdit', { edit })
  }

  async delete(req, res) {
    try {
      const deletedUser = await Master.destroy({
        where: { id: req.body.id }
      });
      if (deletedUser) {
        await client.del('master');
        return res.redirect('/master');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    }
  }
}

module.exports = new MasterController()