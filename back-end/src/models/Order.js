const { Model, DataTypes } = require('sequelize');

class Order extends Model {
  static init(sequelize) {
    super.init({
      product_name: DataTypes.STRING,
      expiration_date: DataTypes.DATE,
      location: DataTypes.STRING,
      market_id: DataTypes.INTEGER,
      courier_id: DataTypes.INTEGER,
      status_id: DataTypes.INTEGER
    }, {
      sequelize
    });
  }

  static associate(models) {
    this.belongsTo(models.Status, { foreignKey: 'status_id', as: 'status' });
    this.belongsTo(models.Market, { foreignKey: 'market_id', as: 'market' });
    this.belongsTo(models.Courier, { foreignKey: 'courier_id', as: 'courier' });
  }
}

module.exports = Order;