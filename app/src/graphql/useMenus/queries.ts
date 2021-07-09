import gql from "graphql-tag";

export const GET_MENU = gql`
    query menu($restaurantID: Int!) {
        menu(restaurantID: $restaurantID) @rest(type: Menu, path: "/menus/{args.restaurantID}") {
            id
            name
            restaurant_id
            __typename
        }
    }
`;

export const GET_MENUS = gql`
    query menus {
        menus @rest(type: Menu, path: "restaurants/1/menus/") {
            id
            name
            restaurant_id
            __typename
        }
    }
`;
