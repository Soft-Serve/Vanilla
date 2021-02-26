import gql from "graphql-tag";
import { useQuery } from "react-apollo";

interface Category {
  id: number;
  name: string;
  category_type: string;
  menu_id: number;
  __typename: string;
}

interface Query {
  categories: Category[];
}

const GET_CATEGORIES = gql`
  query categories($menuId: Int!) {
    categories(menuId: $menuId)
      @rest(type: Categories, path: "menus/{args.menuId}/menu_categories") {
      id
      name
      menu_id
      category_type
      __typename
    }
  }
`;

const useCategories = (menuId: number) => {
  const { data, loading, error } = useQuery<Query>(GET_CATEGORIES, {
    variables: {
      menuId,
    },
  });

  return {
    data,
    loading,
    error,
  };
};

export default useCategories;
