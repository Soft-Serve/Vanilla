import gql from "graphql-tag";
import { useQuery } from "react-apollo";

interface Restaurant {
  __typename: string;
  id: number;
  name: string;
  currency: string;
  primary_colour: string;
  secondary_colour: string;
}

interface RestaurantData {
  restaurant: Restaurant;
}

const RESTAURANT_QUERY = gql`
  query RestaurantQuery {
    restaurant @rest(type: restaurant, path: "restaurants/1/") {
      __typename
      id
      name
      currency
      primary_colour
      secondary_colour
    }
  }
`;

const useRestaurantQuery = () => useQuery<RestaurantData>(RESTAURANT_QUERY);

export { useRestaurantQuery };
