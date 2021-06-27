/* eslint-disable no-underscore-dangle */
import { useMutation, useQuery } from "@apollo/client";
import {
  ItemQuery,
  PostItemMutationData,
  DeleteItemMutationData,
  Variables,
  MenuItem,
} from ".";
import { DELETE_ITEM, POST_ITEM } from "./mutations";
import { GET_ITEM, GET_ITEMS } from "./queries";

const useItems = (categoryID: number | undefined) => {
  const {
    data: items,
    loading,
    error,
  } = useQuery<ItemQuery>(GET_ITEMS, {
    variables: {
      categoryID,
    },
  });

  const useGetItem = (itemID: number) => {
    const { data: item } = useQuery<ItemQuery>(GET_ITEM, {
      variables: {
        itemID,
      },
    });

    return {
      item,
      loading,
      error,
    };
  };

  const [addItem] = useMutation<PostItemMutationData, Variables>(POST_ITEM, {
    update(cache, { data }) {
      const { items: newItems } = cache.readQuery({
        query: GET_ITEMS,
        variables: {
          categoryID,
        },
      }) as ItemQuery;
      cache.writeQuery({
        query: GET_ITEMS,
        variables: {
          categoryID,
        },
        data: {
          categories: [data?.postItem, ...newItems],
        },
      });
    },
  });

  const setItem = (input: MenuItem) =>
    addItem({
      variables: { input },
      optimisticResponse: {
        __typename: "Mutation",
        postItem: {
          id: input.id,
          name: input.name,
          description: input.description,
          menu_category_id: input.menu_category_id,
          __typename: input.__typename,
        },
      },
    });

  const [removeItem] = useMutation<DeleteItemMutationData, Variables>(
    DELETE_ITEM,
    {
      update(cache, { data }) {
        const { items: newItems } = cache.readQuery({
          query: GET_ITEMS,
          variables: categoryID,
        }) as ItemQuery;
        cache.writeQuery({
          query: GET_ITEMS,
          variables: {
            categoryID,
          },
          data: {
            items: newItems.filter((item) => item.id !== data?.deleteItem.id),
          },
        });
      },
    }
  );

  const deleteCategory = (input: MenuItem) =>
    removeItem({
      variables: { input },
      optimisticResponse: {
        __typename: "Mutation",
        deleteItem: {
          name: input.name,
          id: input.id,
          description: input.description,
          menu_category_id: input.menu_category_id,
          __typename: input.__typename,
        },
      },
    });

  return {
    useGetItem,
    items,
    loading,
    error,
    setItem,
    deleteCategory,
  };
};

export { useItems };
