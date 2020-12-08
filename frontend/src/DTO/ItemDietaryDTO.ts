
interface Allergy {
  id: number;
  name: string;
  menu_item_id: number;
  dietary_id: number;
}

export default class ItemDietaryDTO implements Allergy {
  id = 0;

  name = '';

  menu_item_id = 0;

  dietary_id = 0;
}
