import gql from "graphql-tag";
import { useQuery } from "react-apollo";

interface Dietary {
  id: number;
  name: string;
  menu_item_id: number;
  dietary_id: number;
}

interface Query {
  dietaries: Dietary[];
}

const GET_DIETARIES = gql`
  query dietaries($id: Int!) {
    dietaries(id: $id)
      @rest(type: Dietary, path: "menu_items/{args.id}/dietary_instances") {
      id
      name
      menu_item_id
      dietary_id
    }
  }
`;

const useDietaries = (itemId: number) => {
  const { data, loading, error } = useQuery<Query>(GET_DIETARIES, {
    variables: {
      itemId,
    },
  });

  return {
    data,
    loading,
    error,
  };
};

export default useDietaries;
