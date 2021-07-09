import gql from "graphql-tag";

const GET_ALLERGIES = gql`
  query allergies($restaurantID: Int!) {
    allergies(restaurantID: $restaurantID)
      @rest(type: Dietary, path: "restaurants/{args.restaurantID}/dietaries") {
      id
      name
      __typename
    }
  }
`;

export { GET_ALLERGIES };
