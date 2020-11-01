import Restaurant from '@/models/Restaurant';
import RestaurantMenu from '@/models/RestaurantMenu';
import MenuCategory from '@/models/MenuCategory';
import MenuItem from '@/models/MenuItem';
import Collection from '@/models/Collection';

export type State = {
  loading: boolean;
  restaurant: Restaurant;
  restaurantMenus: Collection<RestaurantMenu>;
  restaurantMenu: RestaurantMenu;
  menuCategories: Collection<MenuCategory>;
  menuCategory: MenuCategory;
  items: Collection<MenuItem>;
}

export const state: State = {
  loading: false,
  restaurant: new Restaurant(),
  restaurantMenus: new Collection(),
  restaurantMenu: new RestaurantMenu(),
  menuCategories: new Collection(),
  menuCategory: new MenuCategory(),
  items: new Collection(),
};
