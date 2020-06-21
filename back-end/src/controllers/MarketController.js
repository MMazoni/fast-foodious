const Market = require('../models/Market');
const User = require('../models/User');

module.exports = {
  async index(re, res) {
    const markets = await Market.findAll({ include: { association: 'user' } });

    return res.status(200).json(markets);
  },
}