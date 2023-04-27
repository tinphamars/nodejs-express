const DataTypes = require('sequelize')
const sequelize = require('../config/database')

const Master = sequelize.define(
  "masters",
  {
    name : {
      type: DataTypes.STRING,
      allowNull: true,
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  { timestamps: false }
);

module.exports = Master;
