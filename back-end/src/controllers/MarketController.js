const Market = require('../models/Market');
const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const markets = await Market.findAll({ include: { association: 'user' } });

    return res.status(200).json(markets);
  },

  async show(req, res) {
    const { market_id } = req.params;

    const market = await Market.findByPk(market_id, {
      include: {
        association: 'user',
        attributes: {
          exclude: ['id', 'password']
        }
      }
    });

    if (!market) {
      return res.status(404).json({ message: 'Market not found.'});
    }

    return res.status(200).json(market);
  }
}