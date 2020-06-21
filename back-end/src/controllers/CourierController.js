const Courier = require('../models/Courier');
const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const couriers = await Courier.findAll({
      include: {
        association: 'user',
        attributes: {
          exclude: ['id', 'password']
        }
      },

    });

    return res.json(couriers);
  },

  async show(req, res) {
    const { courier_id } = req.params;

    const courier = await Courier.findByPk(courier_id, {
      include: {
        association: 'user',
        attributes: {
          exclude: ['id', 'password']
        }
      }
    });

    if (!courier) {
      return res.status(404).json({ message: 'Market not found.'});
    }

    return res.status(200).json(courier);
  }

}