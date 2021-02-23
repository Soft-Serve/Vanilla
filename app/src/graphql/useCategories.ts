import gql from "graphql-tag";
import { useQuery } from "react-apollo";

interface Category {
  id: number;
  name: string;
  category_type: string;
  menu_id: number;
}

interface Query {
  categories: Category[];
}

const GET_CATEGORIES = gql`
  query categories($id: Int!) {
    categories(id: $id)
      @rest(type: Menu, path: "menus/{args.id}/menu_categories") {
      id
      name
      menu_id
      category_type
    }
  }
`;

const useCategories = (id: number) => {
  const { data, loading, error } = useQuery<Query>(GET_CATEGORIES, {
    variables: {
      id,
    },
  });

  return {
    data,
    loading,
    error,
  };
};

export default useCategories;
