const { Model, DataTypes } = require('sequelize')

class Market extends Model {
  static init(sequelize) {
    super.init({}, {
      sequelize
    });
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.hasMany(models.Order, { foreignKey: 'market_id', as: 'orders' });
  }
}

module.exports = Market;