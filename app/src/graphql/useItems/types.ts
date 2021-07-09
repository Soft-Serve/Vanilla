export type Photo = { url: string };

export interface MenuItem {
    id: number;
    name: string;
    description: string;
    menu_category_id: number;
    __typename: string;
}

export interface ItemQuery {
    items: MenuItem[];
}

export interface Variables {
    input: MenuItem;
}

export interface PostItemMutationData {
    __typename: string;
    postItem: MenuItem;
}

export interface DeleteItemMutationData {
    __typename: string;
    deleteItem: MenuItem;
}
