const DataTypes = require('sequelize')
const sequelize = require('../config/database')

const Tran = sequelize.define(
  'trans',
  {
    table_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    column_names: {
      type: DataTypes.STRING,
      allowNull: false
    },
    foreign_key: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    locale: {
      type: DataTypes.STRING,
      allowNull: false
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, { timestamps: false }
)

module.exports = Tran 