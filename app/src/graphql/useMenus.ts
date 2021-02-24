import gql from "graphql-tag";
import { useQuery } from "react-apollo";

interface Menu {
  id: number;
  name: string;
  restaurant_id: number;
  __typename: string;
}

interface Query {
  menus: Menu[];
}

const GET_MENUS = gql`
  query menus {
    menus @rest(type: Menu, path: "restaurants/1/menus/") {
      id
      name
      restaurant_id
    }
  }
`;

const useMenus = () => {
  const { data, loading, error } = useQuery<Query>(GET_MENUS);

  return {
    data,
    loading,
    error,
  };
};

export default useMenus;
