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

}