import gql from "graphql-tag";
import { useQuery } from "react-apollo";

interface Dietary {
  __typename: string;
  id: number;
  name: string;
  menu_item_id: number;
  dietary_id: number;
}
interface Query {
  allergies: Dietary[];
}

const GET_ALLERGIES = gql`
  query allergies($restaurantId: Int!) {
    allergies(restaurantId: $restaurantId)
      @rest(type: Dietary, path: "restaurants/{args.restaurantId}/dietaries") {
      id
      name
      __typename
    }
  }
`;

const useAllergies = (restaurantId: number) => {
  const { data, loading, error } = useQuery<Query>(GET_ALLERGIES, {
    variables: {
      restaurantId,
    },
  });

  return {
    data,
    loading,
    error,
  };
};

export default useAllergies;
