import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
  createHttpLink,
  split,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

// createHttpLink is a function  used to create an Apollo Link instance for making HTTP requests.
// The uri option is used to specify the URL endpoint for the GraphQL server you want to connect to.
let httpLink = createHttpLink({
  // uri: "http://localhost:4000",
  uri: "https://chat-application-server-git-master-kishorishirsath.vercel.app/",
});

// Apollo Client, setContext is a function that allows you to modify the context of an Apollo Link instance.
// The context is an object that can hold  headers to be included with every GraphQL request made by Apollo Client.
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

httpLink = authLink.concat(httpLink);

const host = window.location.host;

console.log("host", host);
// establish a WebSocket connection between Apollo Client and your GraphQL server.
// This is particularly useful when working with real - time data through GraphQL subscriptions,
// as it enables bi - directional communication between the client and the server.
const wsLink = new WebSocketLink({
  // uri: `ws://localhost:4000/`,
  uri: "https://chat-application-server-git-master-kishorishirsath.vercel.app/",
  options: {
    reconnect: true,
    connectionParams: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default function ApolloProvider(props) {
  return <Provider client={client} {...props} />;
}
