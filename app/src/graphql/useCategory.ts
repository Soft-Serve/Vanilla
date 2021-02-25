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
  category: Category;
}

const GET_CATEGORY = gql`
  query category($categoryId: Int!) {
    category(categoryId: $categoryId)
      @rest(type: Category, path: "menu_categories/{args.categoryId}") {
      id
      name
      menu_id
      category_type
      __typename
    }
  }
`;

const useCategory = (categoryId: number) => {
  const { data, loading, error } = useQuery<Query>(GET_CATEGORY, {
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

export default useCategory;
