require("dotenv").config("../.env");

module.exports = {
  username: "default",
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
