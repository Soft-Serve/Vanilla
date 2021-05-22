import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

interface Dietary {
  id: number;
  name: string;
  menu_item_id: number;
  dietary_id: number;
  __typename: string;
}

interface Query {
  dietaries: Dietary[];
}

const GET_DIETARIES = gql`
  query dietaries($itemId: Int!) {
    dietaries(itemId: $itemId)
      @rest(
        type: Dietaries
        path: "menu_items/{args.itemId}/dietary_instances"
      ) {
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

export { useDietaries };
