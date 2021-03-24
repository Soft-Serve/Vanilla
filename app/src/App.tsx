import { data } from "autoprefixer";
import React, { FC } from "react";
import { ApolloProvider } from "react-apollo";
import { client } from "./client";
import { Page } from "./components/Page/Page";
import useRestaurant from "./graphql/queries/useRestaurant";

const App: FC = () => {
  const { data, error, loading } = useRestaurant();
  if (loading) return <p>loading</p>;
  if (data?.restaurant) return <Page data={data.restaurant} />;
  return <p>{error?.message}</p>;
};

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default ApolloApp;
