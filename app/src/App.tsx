import React, { FC } from "react";
import { ApolloProvider } from "react-apollo";
import { client } from "./client";
import { Page } from "@presentational";
import { GlobalProvider, AllergyProvider } from "@contexts";
import { useRestaurant } from "@graphql";

const App: FC = () => {
  const { data, error, loading } = useRestaurant();
  if (loading) return <p>loading</p>;
  if (data?.restaurant)
    return (
      <GlobalProvider>
        <AllergyProvider restaurantID={data?.restaurant?.id}>
          <Page />
        </AllergyProvider>
      </GlobalProvider>
    );
  return <p>{error?.message}</p>;
};

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default ApolloApp;
