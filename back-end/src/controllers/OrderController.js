const Order = require('../models/Order');
const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const orders = await Order.findAll({
      include: [{
          association: 'market'
        },
        {
          association: 'courier'
        },
        {
          association: 'status'
        }
      ]
    });

    return res.status(200).json(orders);
  },

  async show(req, res) {
    const { market_id } = req.params;
    const order = await Order.findOne({
      where: {
        market_id
      }
    }, {
      include: [{
          association: 'market'
        },
        {
          association: 'courier'
        },
        {
          association: 'status'
        }
      ]
    });

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    return res.status(200).json(order);
  },

  async store(req, res) {
    const { market_id, product_name, expiration_date, location } = req.body;

    const order = await Order.create({
      market_id,
      product_name,
      expiration_date,
      location
    });

    return res.status(201).json({ message: 'Order succesfully created.' });
  },

  async colectOrder(req, res) {
    const { order_id } = req.params;

    const { courier_id } = req.body;

    const order = Order.findByPk(order_id);

    if (!order) {
      return res.status(404).json({ message: 'Order not found.' });
    }

    const newOrder = Order.update({
      courier_id,
      status_id: 2
    }, {
      where: {
        id: order_id
      }
    });

    return res.status(200).json({ message: 'Order succesfully collected.' });

  }
}