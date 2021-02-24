import gql from "graphql-tag";
import { useQuery } from "react-apollo";

interface Menu {
  id: number;
  name: string;
  restaurant_id: number;
  __typename: string;
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

const useMenu = (restaurantId: number) => {
  const { data, loading, error } = useQuery<Query>(GET_MENU, {
    variables: {
      restaurantId,
    },
  });

  return {
    data,
    loading,
    error,
  };
};

export default useMenu;
