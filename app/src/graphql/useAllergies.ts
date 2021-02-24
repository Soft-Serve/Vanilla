import gql from "graphql-tag";
import { useQuery } from "react-apollo";

interface Dietary {
  id: number;
  name: string;
  menu_item_id: number;
  dietary_id: number;
}
interface Query {
  allergies: Dietary[];
}

const GET_ALLERGIES = gql`
  query allergies($id: Int!) {
    allergies(id: $id)
      @rest(type: Dietary, path: "restaurants/{args.id}/dietaries") {
      id
      name
      menu_item_id
      dietary_id
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
