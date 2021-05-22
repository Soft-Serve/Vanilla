import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "./client";
import { Restaurant } from "@presentational";

const App = () => (
  <ApolloProvider client={client}>
    <Restaurant />
  </ApolloProvider>
);

export default App;
