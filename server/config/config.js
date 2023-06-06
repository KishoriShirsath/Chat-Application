require("dotenv").config("../.env");

console.log("process.env.DB_USERNAME", process.env.DB_USERNAME);

module.exports = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  logging: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // You can set this to false if needed
    },
  },
};
