import React, { FC } from "react";
import { ApolloProvider } from "react-apollo";
import Restaurant from "./Restaurant";
import { Grid } from "./components/Grid/Grid";
import { client } from "./client";

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to Apollo Rest Link Example</h1>
      </header>
      <Restaurant />
      <Grid />
    </div>
  );
};

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default ApolloApp;
