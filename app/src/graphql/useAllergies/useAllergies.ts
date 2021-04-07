import { useEffect, useState } from "react";
import { useQuery } from "react-apollo";
import { GET_ALLERGIES } from "./queries";
import { Query } from "./types";

const useAllergies = (restaurantID: number) => {
  const useGetAllergies = () => {
    const { data, loading, error } = useQuery<Query>(GET_ALLERGIES, {
      variables: {
        restaurantID,
      },
    });

    return {
      data,
      loading,
      error,
    };
  };

  return {
    useGetAllergies,
  };
};
export { useAllergies };
