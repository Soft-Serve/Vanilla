export type Photo = { url: string }

export interface Item {
  id: number;
  name: string;
  description: string;
  menu_category_id: number;
  photo: Photo;
}
export default class MenuItemDTO implements Item {
  id = 0;

  name = '';

  description = '';

  menu_category_id = 0;

  photo = {
    url: '',
  };
}
