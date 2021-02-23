import gql from "graphql-tag";
import { useQuery } from "react-apollo";

interface Menu {
  id: number;
  name: string;
  restaurant_id: number;
}

interface Query {
  menu: Menu;
}

const GET_MENU = gql`
  query menu($id: Int!) {
    menu(id: $id) @rest(type: Menu, path: "/menus/{args.id}") {
      id
      name
      restaurant_id
    }
  }
`;

const useMenu = (id: number) => {
  const { data, loading, error } = useQuery<Query>(GET_MENU, {
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

export default useMenu;
