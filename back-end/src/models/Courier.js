const { Model, DataTypes } = require('sequelize')

class Courier extends Model {
  static init(sequelize) {
    super.init({}, {
      sequelize
    });
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.hasMany(models.Order, { foreignKey: 'courier_id', as: 'orders' });

  }
}

module.exports = Courier;