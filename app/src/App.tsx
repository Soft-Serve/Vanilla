import React, { FC } from "react";
import { ApolloProvider } from "react-apollo";
import { client } from "./client";
import { Page } from "./components/Page/Page";
import useRestaurant from "./graphql/queries/useRestaurant";
import { AllergyProvider } from "./contexts/AllergyContext";
import { GlobalProvider } from "./contexts/GlobalContext";

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
