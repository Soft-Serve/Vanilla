export interface Menu {
  id: number;
  name: string;
  restaurant_id?: number;
  __typename: string;
}

export interface MenuQuery {
  menus: Menu[];
}

export interface Variables {
  input: Menu;
}

export interface PostMenuMutationData {
  __typename: string;
  postMenu: Menu;
}

export interface DeleteMenuMutationData {
  __typename: string;
  deleteMenu: Menu;
}
