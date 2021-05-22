import React from "react";
import { ApolloProvider } from "react-apollo";
import { client } from "./client";
import { Restaurant } from "@presentational";

const App = () => (
  <ApolloProvider client={client}>
    <Restaurant />
  </ApolloProvider>
);

export default App;
