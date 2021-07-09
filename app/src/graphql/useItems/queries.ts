import gql from "graphql-tag";

export const GET_ITEM = gql`
  query items($itemID: Int!) {
    items(itemID: $itemID) @rest(type: Item, path: "menu_items/{args.itemID}") {
      id
      name
      description
      menu_category_id
      __typename
    }
  }
`;

export const GET_ITEMS = gql`
  query items($categoryID: Int!) {
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
