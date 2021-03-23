import React, { FC, useState } from "react";
import { ApolloProvider } from "react-apollo";
import { client } from "./client";
import { Menu, useMenus } from "./graphql/useMenus";
import useRestaurant from "./graphql/queries/useRestaurant";
import { useCategories, Category } from "./graphql/useCategories";
// import useCategories from "./graphql/queries/useCategories";
// import { useMenuItems } from "./graphql/useMenuItems";

const App: FC = () => {
  const { menus, loading, error, setMenu, deleteMenu } = useMenus();
  const { categories, setCategory, deleteCategory } = useCategories(2);
  const { data: restaurantData } = useRestaurant();
  // const { data: menuItem } = useMenuItems(2);
  // console.log(menuItem);

  const [value, setValue] = useState("");

  // const { data: categoriesQuery } = useCategories(data?.menus[0].id!!);
  // const { data: itemsQuery } = useMenuItems(
  //   categoriesQuery?.categories[1].id!!
  // );

  if (loading) {
    return <p>loading</p>;
  }
  if (error) {
    return <p> error </p>;
  }

  // const input = {
  //   name: value,
  //   restaurant_id: restaurantData?.restaurant.id,
  //   id: 0,
  //   __typename: "Menu",
  // } as Menu;

  const input = {
    name: value,
    menu_id: menus?.menus[1].id,
    category_type: "food",
    id: 0,
    __typename: "Category",
  } as Category;

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCategory(input);
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
      {/* <ul>
        {menus?.menus.map((input) => (
          <li key={input.id}>
            {input.name}
            <button onClick={() => deleteMenu(input)} className="bg-red-500">
              delete
            </button>
          </li>
        ))}
      </ul> */}
      <ul>
        {categories?.categories.map((input) => (
          <li key={input.id}>
            {input.name}
            <button
              onClick={() => deleteCategory(input)}
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
