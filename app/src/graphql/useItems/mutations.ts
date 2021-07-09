import gql from "graphql-tag";

export const DELETE_ITEM = gql`
  mutation DeleteItem($input: input) {
    deleteItem(input: $input)
      @rest(type: Item, path: "menu_items/{args.input.id}", method: "DELETE") {
      id
      name
      description
      menu_category_id
      __typename
    }
  }
`;

export const POST_ITEM = gql`
  mutation PostItem($input: input) {
    postItem(input: $input) @rest(type: Item, path: "/menu_items", method: "POST") {
      id
      name
      description
      menu_category_id
      __typename
    }
  }
`;
