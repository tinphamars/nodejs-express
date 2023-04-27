const DataTypes = require('sequelize')
const sequelize = require('../config/database')

const City = sequelize.define(
  "cities",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  { timestamps: false }
);

module.exports = City;
