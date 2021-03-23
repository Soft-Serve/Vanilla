export type Photo = { url: string };

export interface Item {
  id: number;
  name: string;
  description: string;
  menu_category_id: number;
  __typename: string;
}

export interface ItemQuery {
  items: Item[];
}

export interface Variables {
  input: Item;
}

export interface PostItemMutationData {
  __typename: string;
  postItem: Item;
}

export interface DeleteItemMutationData {
  __typename: string;
  deleteItem: Item;
}
