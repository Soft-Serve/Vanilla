import { Item } from '@/interfaces';

export default class MenuItemDTO implements Item {
  id = 0;

  name = '';

  description = '';

  menu_category_id = 0;

  photo = {
    url: '',
  };
}
