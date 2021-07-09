import gql from "graphql-tag";

export const POST_MENU = gql`
  mutation PostMenu($input: input) {
    postMenu(input: $input) @rest(type: Menu, path: "/menus", method: "POST") {
      id
      name
      restaurant_id
      __typename
    }
  }
`;

export const DELETE_MENU = gql`
  mutation DeleteMenu($input: input) {
    deleteMenu(input: $input) @rest(type: Menu, path: "menus/{args.input.id}", method: "DELETE") {
      id
      name
      restaurant_id
      __typename
    }
  }
`;
