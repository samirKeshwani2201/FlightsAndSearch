'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.City, {
        foreignKey: 'cityId',
        onDelete: 'CASCADE'
      });
    }
  }
  Airport.init({

    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    address: DataTypes.STRING,
    cityId: { allowNull: false, type: DataTypes.INTEGER }
  }, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};