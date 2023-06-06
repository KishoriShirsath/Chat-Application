require("dotenv").config("../.env");

module.exports = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  port: process.env.DB_PORT,
  logging: false,
  // dialectOptions: {
  //   ssl: {
  //     require: true,
  //     rejectUnauthorized: true, // You can set this to false if needed
  //   },
  // },
};

// module.exports = {
//   username: "root",
//   password: "kSlVz0MB2otu",
//   database: "verceldb",
//   host: "ep-young-violet-330131-pooler.us-east-1.postgres.vercel-storage.com",
//   dialect: "postgres",
//   logging: true,
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: true, // You can set this to false if needed
//     },
//   },
// };
