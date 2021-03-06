const Order = require('../models/Order');
const Market = require('../models/Market');
const Courier = require('../models/Courier');

module.exports = {
  async index(req, res) {
    const orders = await Order.findAll({
      include: [
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

  async orderByMarket(req, res) {
    const { user_id } = req.params;
    const market = await Market.findOne({
      where: { user_id }
    });

    if (!market) {
      return res.status(404).json({ message: 'Market not found.' });
    }

    const order = await Order.findAll(
      {
        include: [{
          association: 'market'
        },
        {
          association: 'courier',
          include: {
            association: 'user',
            attributes: {
              exclude: ['id', 'password']
            }
          }
        },
        {
          association: 'status'
        }
        ]
      }, {
      where: {
        market_id: market.id
      }
    });

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    return res.status(200).json(order);
  },

  async orderByStatus(req, res) {
    const { status_id } = req.params;
    const order = await Order.findAll(
      {
        where: {
          status_id
        }
      });

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    return res.status(200).json(order);
  },

  async store(req, res) {
    const { market_id, product_name, quantity, expiration_date, location } = req.body;

    await Order.create({
      market_id,
      product_name,
      quantity,
      expiration_date,
      location
    });

    return res.status(201).json({ message: 'Order succesfully created.' });
  },

  async colectOrder(req, res) {
    const { order_id } = req.params;

    const { user_id } = req.body;

    const order = await Order.findByPk(order_id);

    const courier = await Courier.findOne({
      where: { user_id }
    });

    if (!courier) {
      return res.status(404).json({ message: 'Courier not found.' });
    }

    if (!order) {
      return res.status(404).json({ message: 'Order not found.' });
    }

    await Order.update({
      courier_id: courier.id,
      status_id: 2
    }, {
      where: {
        id: order_id
      }
    });

    return res.status(200).json({ message: 'Order in progress.' });
  },

  async ordersWithCourier(req, res) {
    const { user_id } = req.params;
    const courier = await Courier.findOne({
      where: { user_id }
    });

    console.log(JSON.parse(JSON.stringify(courier)))

    if (!courier) {
      return res.status(404).json({ message: 'Courier not found.' });
    }

    const order = await Order.findAll(
      {
        where: {
          courier_id: courier.id,
          status_id: 2
        }
      });

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    return res.status(200).json(order);
  }
}