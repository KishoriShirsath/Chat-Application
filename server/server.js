/**
 * Entry point  for your GraphQL server
 */

const { ApolloServer } = require("apollo-server");
require("dotenv").config();
const { sequelize } = require("./models");
const resolvers = require("./graphql/resolvers");
const typeDefs = require("./graphql/typeDefs");
const contextMiddleware = require("./util/contextMiddleware");

// Create a new instance of the ApolloServer class
const server = new ApolloServer({
  typeDefs, //GraphQL schema definition
  resolvers, //Implementation of resolvers
  context: contextMiddleware,
  subscriptions: { path: "/" },
});

// The server.listen() function is called to start the server and begin accepting incoming requests.
server.listen().then(({ url, subscriptionsUrl }) => {
  console.log(`🚀 Server ready at ${url}`);
  console.log(`🚀 Susbscription ready at ${subscriptionsUrl}`);

  // sequelize.authenticate() to establish a connection to the database using Sequelize.
  sequelize
    .authenticate()
    .then(() => console.log("Database connected!!"))
    .catch((err) => console.log(err));
});
