const { Model, DataTypes } = require('sequelize')

class Market extends Model {
  static init(sequelize) {
    super.init({}, {
      sequelize
    });
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

module.exports = Market;