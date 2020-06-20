const Courier = require('../models/Courier');
const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const couriers = await Courier.findAll();

    return res.json(couriers);
  },

  async store(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id);


    if (!user) {
      return res.status(400).json({ error: 'User not found.' });
    }
    if (user.market_id || user.role_id == 1) {
      return res.status(400).json({ error: 'User can\'t be a courier.' });
    }

    const courier = await Market.create({ user_id });

    return res.status(201).json({ message: 'Courier succesfully created.' });
  }
}