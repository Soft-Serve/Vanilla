import { QueryHookOptions, useQuery } from "@apollo/client";
import gql from "graphql-tag";

const ALLERGIES_QUERY = gql`
  query AllergiesQuery($restaurantID: Int!) {
    allergies(restaurantID: $restaurantID)
      @rest(type: Allergy, path: "restaurants/{args.restaurantID}/dietaries") {
      id
      name
      __typename
    }
  }
`;

interface Allergy {
  __typename: string;
  id: number;
  name: string;
  menu_item_id: number;
  dietary_id: number;
}

interface AllergyData {
  allergies: Allergy[];
}

interface Variables {
  restaurantID: number;
}

const useAllergiesQuery = (options?: QueryHookOptions<AllergyData, Variables>) =>
  useQuery<AllergyData, Variables>(ALLERGIES_QUERY, options);

export type { Allergy };
export { useAllergiesQuery };
