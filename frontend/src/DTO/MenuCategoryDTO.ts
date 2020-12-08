export interface Category {
  id: number;
  name: string;
  category_type: string;
  menu_id: number;
}

export default class MenuCategoryDTO implements Category {
  id = 0;

  name = '';

  category_type = '';

  menu_id = 0;
}
