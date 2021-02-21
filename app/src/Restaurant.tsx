import React, { FC, useEffect } from "react";
import { useMenu } from "./graphql/useMenus";
import { useRestaurant } from "./graphql/useRestaurant";

const Restaurant: FC = () => {
  // const { data, error, loading, restaurantName } = useRestaurant();
  const { data, loading, error } = useMenu();
  useEffect(() => {
    console.log(data);
  }, [data]);

  if (loading) {
    return <h4>Loading...</h4>;
  }
  if (error) {
    return <h4>{error.message}</h4>;
  }
  return (
    <ul>
      <li>
        {data?.menus.map((menu) => (
          <span key={menu.id}>{menu.name}</span>
        ))}
      </li>
    </ul>
  );
};

export default Restaurant;
