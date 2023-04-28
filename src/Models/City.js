const DataTypes = require('sequelize')
const sequelize = require('../config/database')
const Tran = require('../Models/Tran')

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

City.hasMany(Tran, {
  foreignKey: 'foreign_key'
})

module.exports = City;
