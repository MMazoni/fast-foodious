const Market = require('../models/Market');
const User = require('../models/User');

module.exports = {
  async index(re, res) {
    const markets = await Market.findAll();

    return res.status(200).json(markets);
  },

  async store(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found.' });
    }
    if (user.courier_id || user.role_id == 1) {
      return res.status(400).json({ error: 'User can\'t be a courier.' });
    }

    const market = await Market.create({ user_id });

    return res.status(201).json({ message: 'Market succesfully created.' });
  }
}