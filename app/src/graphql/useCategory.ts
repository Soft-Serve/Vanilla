import gql from "graphql-tag";
import { useQuery } from "react-apollo";

interface Category {
  id: number;
  name: string;
  category_type: string;
  menu_id: number;
}

interface Query {
  category: Category;
}

const GET_CATEGORY = gql`
  query category($id: Int!) {
    category(id: $id) @rest(type: Menu, path: "menu_categories/{args.id}") {
      id
      name
      menu_id
      category_type
    }
  }
`;

const useCategory = (id: number) => {
  const { data, loading, error } = useQuery<Query>(GET_CATEGORY, {
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

export default useCategory;
