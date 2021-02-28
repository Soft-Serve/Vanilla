import React, { FC, useState } from "react";
import { ApolloProvider } from "react-apollo";
import { client } from "./client";
import useMenus from "./graphql/queries/useMenus";
import useRestaurant from "./graphql/queries/useRestaurant";

const App: FC = () => {
  const { data, loading, error, addMenu, removeMenu } = useMenus();
  const { data: restaurantData } = useRestaurant();

  const [value, setValue] = useState("");

  const input = {
    name: value,
    restaurant_id: restaurantData?.restaurant.id,
    id: 0,
  };
  if (loading) {
    return <p>loading</p>;
  }
  if (error) {
    return <p> error </p>;
  }
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addMenu({
            variables: { input },
            optimisticResponse: {
              __typename: "Mutation",
              postMenu: {
                __typename: "Menu",
                name: input.name,
                id: 0,
                restaurant_id: restaurantData?.restaurant.id,
              },
            },
          });
          setValue("");
        }}
      >
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
        />
        <input type="submit" value="submit" />
      </form>
      <ul>
        {data?.menus.map((input) => (
          <li key={input.id}>
            {input.name}{" "}
            <button
              onClick={() =>
                removeMenu({
                  variables: { input },
                  optimisticResponse: {
                    __typename: "Mutation",
                    postMenu: {
                      __typename: "Menu",
                      name: input.name,
                      id: input.id,
                      restaurant_id: restaurantData?.restaurant.id,
                    },
                  },
                })
              }
              className="bg-red-500"
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default ApolloApp;
