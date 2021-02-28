import React, { FC } from "react";
import { ApolloProvider } from "react-apollo";
import Restaurant from "./Restaurant";
import { Grid } from "./components/Grid/Grid";
import { client } from "./client";
import { Card } from "./components/Card/Card";
import { Title } from "./components/Title/Title";
import { Button } from "./components/Button/Button";
import { RoundButton } from "./components/RoundButton/RoundButton";
import { PlusSvg } from "./assets/Svgs/PlusSvg";
import { MinusSvg } from "./assets/Svgs/MinusSvg";

const CardActions: FC = () => {
  return (
    <>
      <div className="-mt-px flex divide-x divide-gray-200">
        <div className="w-0 flex-1 flex p-4">
          <Button>hello</Button>
        </div>
      </div>
      <div className="m-12">
        <div className="w-0 flex-1 flex p-4">
          <RoundButton>
            <PlusSvg/>
          </RoundButton>
        </div>
        <div className="w-0 flex-1 flex p-4">
          <RoundButton>
            <MinusSvg/>
          </RoundButton>
        </div>
      </div>
    </>
  );
};

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to Apollo Rest Link Example</h1>
      </header>
      {/* <Restaurant /> */}
      <Grid />
      <Card actions={<CardActions />}>Body</Card>
      <Title type={1}>SoftServe</Title>
    </div>
  );
};

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default ApolloApp;

