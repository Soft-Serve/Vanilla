import gql from "graphql-tag";
import { useQuery } from "react-apollo";

export type Photo = { url: string };

export interface Item {
  id: number;
  name: string;
  description: string;
  menu_category_id: number;
  photo: Photo;
  __typename: string;
}

interface Query {
  items: Item[];
}

const GET_ITEMS = gql`
  query items($categoryId: Int!) {
    items(categoryId: $categoryId)
      @rest(type: Items, path: "menu_categories/{args.categoryId}/menu_items") {
      id
      name
      description
      menu_category_id
      __typename
    }
  }
`;

const useItems = (categoryId: number) => {
  const { data, loading, error } = useQuery<Query>(GET_ITEMS, {
    variables: {
      categoryId,
    },
  });

  return {
    data,
    loading,
    error,
  };
};

export default useItems;
