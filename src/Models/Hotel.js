const City = require('./City')
const Tran = require('./Tran')
const DataTypes = require('sequelize')
const sequelize = require('../config/database')

sequelize.sync({ force: false })

const Hotel = sequelize.define(
  "hotels",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1
    },
    city_id: {
      type: DataTypes.INTEGER,
      references: {
        model: City,
        key: 'id'
      }
    }
  },
  { timestamps: false }
)

Hotel.belongsTo(City, {
  foreignKey: 'city_id',
  onDelete: 'SET NULL',
  onUpdate: 'CASCADE'
})

Hotel.hasMany(Tran, {
  foreignKey: 'foreign_key'
})

module.exports = Hotel