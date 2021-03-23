import gql from "graphql-tag";

export const GET_CATEGORIES = gql`
  query categories($menuID: Int!) {
    categories(menuID: $menuID)
      @rest(type: Category, path: "menus/{args.menuID}/menu_categories") {
      id
      name
      menu_id
      category_type
      __typename
    }
  }
`;

export const GET_CATEGORY = gql`
  query category($categoryId: Int!) {
    category(categoryId: $categoryId)
      @rest(type: Category, path: "menu_categories/{args.categoryId}") {
      id
      name
      menu_id
      category_type
      __typename
    }
  }
`;
