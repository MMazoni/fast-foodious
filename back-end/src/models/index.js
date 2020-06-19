const config = require('../config/db.config.js');

const Sequelize = require('sequelize');
const connection = new Sequelize(config);

const db = {};

db.Sequelize = Sequelize;
db.connection = connection;

db.user = require('./user.model.js')(connection, Sequelize);
db.role = require("./role.model.js")(connection, Sequelize);

db.role.belongsToMany(db.user, {
    through: 'user_roles',
    foreignKey: 'roleId',
    otherKey: 'userId'
});

db.user.belongsToMany(db.role, {
    through: 'user_roles',
    foreignKey: 'userId',
    otherKey: 'roleId'
});

db.ROLES = ['entregador', 'mercado'];

module.exports = db;