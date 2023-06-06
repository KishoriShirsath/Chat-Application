require("dotenv").config("../.env");

module.exports = {
  username: "default",
  password: "kSlVz0MB2otu",
  database: "verceldb",
  host: "ep-young-violet-330131-pooler.us-east-1.postgres.vercel-storage.com",
  dialect: "postgres",
  logging: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: true, // You can set this to false if needed
    },
  },
};
