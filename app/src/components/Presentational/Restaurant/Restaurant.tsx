import React from "react";
import type { FC } from "react";
import { AllergyProvider, GlobalProvider } from "src/contexts";
import { Page } from "@presentational";
import { useRestaurantQuery } from "./Restaurant.query";

const Restaurant: FC = () => {
    const { data, error, loading } = useRestaurantQuery();
    if (loading) return <p>loading</p>;
    if (data?.restaurant)
        return (
            <GlobalProvider restaurantID={data.restaurant?.id}>
                <AllergyProvider>
                    <Page restaurantName={data?.restaurant?.name} />
                </AllergyProvider>
            </GlobalProvider>
        );
    return <p>{error?.message}</p>;
};

export { Restaurant };
