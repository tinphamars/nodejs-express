const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')
const Tran = require('../Models/Tran');

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


// REDIS là một cơ sở dự liệu được lưu ở trong memory or ổ cứng.
// redis: hộ trợ bền bĩ của dự liệu (có thể lưu ở trong ở cứng)
// redis: sử dụng mô hình đơn luồng
// redis có bao nhiêu cấu trúc dự liệu cơ bản như (set, get, )
// cơ chế dự liệu cũ thì nó sẽ tự động remove
// memory
// hành động xoá redis rất quan trọng, thời điểm xoá cần phải chọn đúng thời gian.

// làm sao để nhất quán cơ sở dự liêu và redis

// cách giải quyết vấn đề cạnh tranh trong redis. (khoá phân tán) 




