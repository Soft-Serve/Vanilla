import gql from "graphql-tag";
import { useQuery } from "react-apollo";

interface Menu {
  id: number;
  name: string;
  restaurant_id: number;
}

interface Query {
  menus: Menu[];
}

const GET_MENUS = gql`
  query menus {
    menus @rest(type: Menus, path: "restaurants/1/menus/") {
      id
      name
      restaurant_id
    }
  }
`;

const useMenu = () => {
  const { data, loading, error } = useQuery<Query>(GET_MENUS);

  return {
    data,
    loading,
    error,
  };
};

export { useMenu };
