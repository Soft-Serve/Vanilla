import gql from "graphql-tag";

export const DELETE_CATEGORY = gql`
  mutation DeleteCategory($input: input) {
    deleteCategory(input: $input)
      @rest(
        type: Category
        path: "menu_categories/{args.input.id}"
        method: "DELETE"
      ) {
      id
      name
      menu_id
      category_type
      __typename
    }
  }
`;

export const POST_CATEGORY = gql`
  mutation PostCategory($input: input) {
    postCategory(input: $input)
      @rest(type: Category, path: "/menu_categories", method: "POST") {
      id
      name
      menu_id
      category_type
      __typename
    }
  }
`;
