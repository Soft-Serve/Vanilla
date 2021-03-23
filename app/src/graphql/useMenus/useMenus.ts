import { useMutation, useQuery } from "react-apollo";
import { DELETE_MENU, POST_MENU } from "./mutations";
import { GET_MENU, GET_MENUS } from "./queries";
import {
  MenuQuery,
  Variables,
  PostMenuMutationData,
  DeleteMenuMutationData,
  Menu,
} from ".";

const useMenus = () => {
  const { data: menus, loading, error } = useQuery<MenuQuery>(GET_MENUS);

  const useGetMenu = (menuID: number) => {
    const { data: menu, loading, error } = useQuery<MenuQuery>(GET_MENU, {
      variables: {
        menuID,
      },
    });
    return {
      menu,
      loading,
      error,
    };
  };

  const [addMenu] = useMutation<PostMenuMutationData, Variables>(POST_MENU, {
    update(cache, { data }) {
      const { menus } = cache.readQuery({ query: GET_MENUS }) as MenuQuery;
      cache.writeQuery({
        query: GET_MENUS,
        data: {
          menus: [data?.postMenu, ...menus],
        },
      });
    },
  });

  const setMenu = (input: Menu) =>
    addMenu({
      variables: { input },
      optimisticResponse: {
        __typename: "Mutation",
        postMenu: {
          name: input.name,
          id: input.id,
          restaurant_id: input.restaurant_id,
          __typename: input.__typename,
        },
      },
    });

  const [removeMenu] = useMutation<DeleteMenuMutationData, Variables>(
    DELETE_MENU,
    {
      update(cache, { data }) {
        const { menus } = cache.readQuery({ query: GET_MENUS }) as MenuQuery;
        cache.writeQuery({
          query: GET_MENUS,
          data: {
            menus: menus.filter((menu) => menu.id !== data?.deleteMenu.id),
          },
        });
      },
    }
  );

  const deleteMenu = (input: Menu) =>
    removeMenu({
      variables: { input },
      optimisticResponse: {
        __typename: "Mutation",
        deleteMenu: {
          name: input.name,
          id: input.id,
          restaurant_id: input.restaurant_id,
          __typename: input.__typename,
        },
      },
    });

  return {
    menus,
    loading,
    error,
    setMenu,
    deleteMenu,
    useGetMenu,
  };
};

export { useMenus };
