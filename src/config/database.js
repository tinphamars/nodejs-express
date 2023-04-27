const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE || 'tuong_app',
  process.env.DB_USERNAME || 'root',
  process.env.DB_PASSWORD || 'root',
  {
    dialect: "mysql",
    host: "0.0.0.0",
    port: 3307,
    dialectOptions : {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci'
    }
  },
);

sequelize.sync();

(async () => {
  try {
    //check user login
    // await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
