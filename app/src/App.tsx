import React, { FC, useState } from "react";
import { ApolloProvider } from "react-apollo";
import { client } from "./client";
import { Card } from "./components/Card/Card";
import { Title } from "./components/Title/Title";
import { Button } from "./components/Button/Button";
import { RoundButton } from "./components/RoundButton/RoundButton";
import { PlusSvg } from "./assets/Svgs/PlusSvg";
import { MinusSvg } from "./assets/Svgs/MinusSvg";
import useMenus from "./graphql/queries/useMenus";
import useRestaurant from "./graphql/queries/useRestaurant";

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
          <RoundButton colour="NAKED" size="LG">
            <MinusSvg />
          </RoundButton>
        </div>
      </div>
    </>
  );
};


const App: FC = () => {
  const { data, loading, error, addMenu } = useMenus();
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
        {data?.menus.map((menu) => (
          <li key={menu.id}>{menu.name}</li>
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
