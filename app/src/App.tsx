import React, { FC } from "react";
import { ApolloProvider } from "react-apollo";
import Restaurant from "./Restaurant";
import { Grid } from "./components/Grid/Grid";
import { client } from "./client";
import { Card } from "./components/Card/Card";
import { Title } from "./components/Title/Title";
import { Button } from "./components/Button/Button";

const CardActions: FC = () => {
  return (
    <div className="-mt-px flex divide-x divide-gray-200">
      <div className="w-0 flex-1 flex p-4">
        <Button>hello</Button>
      </div>
    </div>
  );
};

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to Apollo Rest Link Example</h1>
      </header>
      <Restaurant />
      <Grid />
      <Card actions={<CardActions />}>Body</Card>
      <Title type={1}>title</Title>
    </div>
  );
};

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default ApolloApp;
