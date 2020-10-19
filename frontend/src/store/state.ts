import Restaurant from '@/models/Restaurant';
import RestaurantMenu from '@/models/RestaurantMenu';
import MenuCategory from '@/models/MenuCategory';

export type State = {
  loading: boolean;
  restaurant: Restaurant;
  restaurantMenus: RestaurantMenu[];
  restaurantMenu: RestaurantMenu;
  menuCategories: MenuCategory[];
  menuCategory: MenuCategory;
}

export const state: State = {
  loading: false,
  restaurant: new Restaurant(),
  restaurantMenus: [],
  restaurantMenu: new RestaurantMenu(),
  menuCategories: [],
  menuCategory: new MenuCategory(),
};
