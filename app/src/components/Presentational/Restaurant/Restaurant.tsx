import React from "react";
import type { FC } from "react";
import { AllergyProvider } from "src/contexts";
import { Page } from "@presentational";
import { useRestaurantQuery } from "@shared";

const Restaurant: FC = () => {
  const { data, error, loading } = useRestaurantQuery();
  if (loading) return <p>loading</p>;
  if (data?.restaurant)
    return (
      <AllergyProvider>
        <Page restaurantName={data?.restaurant?.name} />
      </AllergyProvider>
    );
  return <p>{error?.message}</p>;
};

export { Restaurant };
