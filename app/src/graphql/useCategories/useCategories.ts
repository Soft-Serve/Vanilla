/* eslint-disable no-underscore-dangle */
import { useMutation, useQuery } from "@apollo/client";
import { POST_CATEGORY, DELETE_CATEGORY } from "./mutations";
import { GET_CATEGORIES, GET_CATEGORY } from "./queries";
import {
  Category,
  CategoryQuery,
  PostCategoryMutationData,
  Variables,
  DeleteCategoryMutationData,
} from ".";

const useCategories = (menuID: number | undefined) => {
  const {
    data: categories,
    loading,
    error,
  } = useQuery<CategoryQuery>(GET_CATEGORIES, {
    variables: {
      menuID,
    },
  });

  const useGetCategory = (categoryID: number) => {
    const { data: category } = useQuery<CategoryQuery>(GET_CATEGORY, {
      variables: {
        categoryID,
      },
    });

    return {
      category,
      loading,
      error,
    };
  };

  const [addCategory] = useMutation<PostCategoryMutationData, Variables>(POST_CATEGORY, {
    update(cache, { data }) {
      const { categories: newCat } = cache.readQuery({
        query: GET_CATEGORIES,
        variables: {
          menuID,
        },
      }) as CategoryQuery;
      cache.writeQuery({
        query: GET_CATEGORIES,
        variables: {
          menuID,
        },
        data: {
          categories: [data?.postCategory, ...newCat],
        },
      });
    },
  });

  const setCategory = (input: Category) =>
    addCategory({
      variables: { input },
      optimisticResponse: {
        __typename: "Mutation",
        postCategory: {
          id: input.id,
          name: input.name,
          menu_id: input.menu_id,
          category_type: input.category_type,
          // eslint-disable-next-line no-underscore-dangle
          __typename: input.__typename,
        },
      },
    });

  const [removeCategory] = useMutation<DeleteCategoryMutationData, Variables>(DELETE_CATEGORY, {
    update(cache, { data }) {
      const { categories: newCat } = cache.readQuery({
        query: GET_CATEGORIES,
        variables: menuID,
      }) as CategoryQuery;
      cache.writeQuery({
        query: GET_CATEGORIES,
        variables: {
          menuID,
        },
        data: {
          categories: newCat.filter(category => category.id !== data?.deleteCategory.id),
        },
      });
    },
  });

  const deleteCategory = (input: Category) =>
    removeCategory({
      variables: { input },
      optimisticResponse: {
        __typename: "Mutation",
        deleteCategory: {
          name: input.name,
          id: input.id,
          menu_id: input.menu_id,
          category_type: input.category_type,
          __typename: input.__typename,
        },
      },
    });

  return {
    useGetCategory,
    setCategory,
    deleteCategory,
    categories,
    loading,
    error,
  };
};

export { useCategories };
