import Restaurant from '@/models/Restaurant';
import RestaurantMenu from '@/models/RestaurantMenu';
import MenuCategory from '@/models/MenuCategory';
import MenuCollection from '@/models/MenuCollection';
import ItemsCollection from '@/models/ItemsCollection';
import CategoryCollection from '@/models/CategoryCollection';
import DietaryCollection from '@/models/DietaryCollection';

export type State = {
  loading: boolean;
  restaurant: Restaurant;
  dietaries: DietaryCollection;
  menus: MenuCollection;
  menu: RestaurantMenu;
  categories: CategoryCollection;
  category: MenuCategory;
  items: ItemsCollection;
}

export const state: State = {
  loading: false,
  restaurant: new Restaurant(),
  dietaries: new DietaryCollection(),
  menus: new MenuCollection(),
  menu: new RestaurantMenu(),
  categories: new CategoryCollection(),
  category: new MenuCategory(),
  items: new ItemsCollection(),
};
