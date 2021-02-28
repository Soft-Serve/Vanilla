import gql from "graphql-tag";
import { useMutation, useQuery } from "react-apollo";

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
    menus @rest(type: Menu, path: "restaurants/1/menus/") {
      id
      name
      restaurant_id
    }
  }
`;

const POST_MENU = gql`
  mutation PostMenu($input: input) {
    postMenu(input: $input) @rest(type: Menu, path: "/menus", method: "POST") {
      id
      name
      restaurant_id
    }
  }
`;

const useMenus = () => {
  const { data, loading, error } = useQuery<Query>(GET_MENUS);
  const [addMenu] = useMutation(POST_MENU, {
    update(cache, { data: { postMenu } }) {
      const { menus } = cache.readQuery({ query: GET_MENUS }) as Query;
      cache.writeQuery({
        query: GET_MENUS,
        data: {
          menus: [postMenu, ...menus],
        },
      });
    },
  });
  return {
    data,
    loading,
    error,
    addMenu,
  };
};

export default useMenus;
