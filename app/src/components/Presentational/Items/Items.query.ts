import { useQuery } from "@apollo/client";
import type { QueryHookOptions } from "@apollo/client";
import gql from "graphql-tag";

export const ITEMS_QUERY = gql`
  query ItemsQuery($categoryID: Int!) {
    items(categoryID: $categoryID)
      @rest(type: Item, path: "menu_categories/{args.categoryID}/menu_items") {
      id
      name
      description
      menu_category_id
      __typename
    }
  }
`;

interface Item {
  id: number;
  name: string;
  description: string;
  menu_category_id: number;
  __typename: string;
}

interface ItemsData {
  items: Item[];
}

interface Variables {
  categoryID: number;
}

const useItemsQuery = (options?: QueryHookOptions<ItemsData, Variables>) =>
  useQuery<ItemsData, Variables>(ITEMS_QUERY, options);

export { useItemsQuery };
