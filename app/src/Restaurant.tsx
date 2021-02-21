import React, { FC, useEffect } from "react";
import { useRestaurant } from "./graphql/useRestaurant";

const Restaurant: FC = () => {
  const { data, error, loading, restaurantName } = useRestaurant();
  useEffect(() => {
    console.log(data);
  }, [data]);

  if (loading) {
    return <h4>Loading...</h4>;
  }
  if (error) {
    return <h4>{error.message}</h4>;
  }
  if (data) {
    return <h1>{restaurantName()}</h1>;
  }
  return null;
};

export default Restaurant;
