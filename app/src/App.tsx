import React, { Component, FC } from "react";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import { RestLink } from "apollo-link-rest";
import Person from "./Person";

const restLink = new RestLink({
  uri: "http://localhost:3091/api/",
  headers: {
    Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.",
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  },
});

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to Apollo Rest Link Example</h1>
      </header>
      <Person />
    </div>
  );
};

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default ApolloApp;
