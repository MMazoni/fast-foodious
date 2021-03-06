const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Role = require('../models/Role');
const Market = require('../models/Market');
const Courier = require('../models/Courier');
const Order = require('../models/Order');
const Status = require('../models/Status');


const conn = new Sequelize(dbConfig);

User.init(conn);
Role.init(conn);
Market.init(conn);
Courier.init(conn);
Order.init(conn);
Status.init(conn);

Role.associate(conn.models);
User.associate(conn.models);
Market.associate(conn.models);
Courier.associate(conn.models);
Order.associate(conn.models);
Status.associate(conn.models);



module.exports = conn;