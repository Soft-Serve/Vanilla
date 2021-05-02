import gql from "graphql-tag";
import { useQuery } from "react-apollo";

export interface Restaurant {
  __typename: string;
  id: number;
  name: string;
  currency: string;
  primary_colour: string;
  secondary_colour: string;
}

interface Query {
  restaurant: Restaurant;
}

const GET_RESTAURANT = gql`
  query restaurant {
    restaurant @rest(type: Restaurant, path: "restaurants/1/") {
      id
      name
      currency
      primary_colour
      secondary_colour
      __typename
    }
  }
`;

const useRestaurant = () => {
  const { data, loading, error } = useQuery<Query>(GET_RESTAURANT);

  const restaurantName = () => (data ? data.restaurant.name : null);

  return {
    data,
    loading,
    error,
    restaurantName,
  };
};

export { useRestaurant };
