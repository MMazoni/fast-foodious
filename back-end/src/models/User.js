const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    }, {
      sequelize
    });
  }

  static associate(models) {
    this.belongsTo(models.Role, { foreignKey: 'role_id', as: 'role' });
    this.hasOne(models.Market, { foreignKey: 'user_id', as: 'market' });
    this.hasOne(models.Courier, { foreignKey: 'user_id', as: 'courier' });
  }
}

module.exports = User;