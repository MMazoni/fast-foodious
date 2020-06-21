const { Model, DataTypes } = require('sequelize')

class Status extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING
    }, {
      sequelize,
      tableName: 'status'
    });
  }

  static associate(models) {
    this.hasMany(models.Order, { foreignKey: 'status_id', as: 'orders' });
  }
}

module.exports = Status;