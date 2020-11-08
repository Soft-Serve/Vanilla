import Restaurant from '@/models/Restaurant';
import RestaurantMenu from '@/models/RestaurantMenu';
import MenuCategory from '@/models/MenuCategory';
import Collection from '@/models/Collection';
import ItemsCollection from '@/models/ItemsCollection';

export type State = {
  loading: boolean;
  restaurant: Restaurant;
  menus: Collection<RestaurantMenu>;
  menu: RestaurantMenu;
  categories: Collection<MenuCategory>;
  category: MenuCategory;
  items: ItemsCollection;
}

export const state: State = {
  loading: false,
  restaurant: new Restaurant(),
  menus: new Collection(),
  menu: new RestaurantMenu(),
  categories: new Collection(),
  category: new MenuCategory(),
  items: new ItemsCollection(),
};
