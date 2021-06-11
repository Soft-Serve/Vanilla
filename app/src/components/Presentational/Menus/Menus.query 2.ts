import type { QueryHookOptions } from "@apollo/client";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

const MENUS_QUERY = gql`
  query MenusQuery {
    menus @rest(type: Menu, path: "restaurants/1/menus/") {
      __typename
      name
      id
      restaurant_id
    }
  }
`;

interface Menu {
  __typename: string;
  name: string;
  id: number;
  restaurant_id?: number;
}

interface MenusData {
  menus: Menu[];
}

const useMenusQuery = (options?: QueryHookOptions<MenusData>) =>
  useQuery<MenusData>(MENUS_QUERY, options);

export { useMenusQuery };
