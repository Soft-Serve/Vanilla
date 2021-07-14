import type { QueryHookOptions } from "@apollo/client";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

const ITEM_SIZES_QUERY = gql`
  query ItemSizesQuery($itemID: Int!) {
    itemSizes(itemID: $itemID) @rest(type: ItemSize, path: "menu_items/{args.itemID}/item_sizes") {
      id
      price
      unit
      menu_item_id
      __typename
    }
  }
`;

interface ItemSize {
  id: number;
  price: number;
  unit: string;
  menu_item_id: number;
  __typename: string;
}

interface ItemSizeData {
  itemSizes: ItemSize[];
}

interface Variables {
  itemID: number;
}

const useItemSizeQuery = (options?: QueryHookOptions<ItemSizeData, Variables>) =>
  useQuery<ItemSizeData, Variables>(ITEM_SIZES_QUERY, options);

export { useItemSizeQuery };
