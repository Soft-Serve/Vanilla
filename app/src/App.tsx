import React, { FC } from "react";
import { ApolloProvider } from "react-apollo";
import Restaurant from "./Restaurant";
import { client } from "./client";

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to Apollo Rest Link Example</h1>
      </header>
      <Restaurant />
    </div>
  );
};

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default ApolloApp;
