const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Role = require('../models/Role');
const Market = require('../models/Market');
const Courier = require('../models/Courier');

const conn = new Sequelize(dbConfig);

User.init(conn);
Role.init(conn);
Market.init(conn);
Courier.init(conn);


User.associate(conn.models);
Role.associate(conn.models);
Market.associate(conn.models);
Courier.associate(conn.models);



module.exports = conn;