import Restaurant from '@/models/Restaurant';
import RestaurantMenu from '@/models/RestaurantMenu';
import MenuCategory from '@/models/MenuCategory';
import MenuItem from '@/models/MenuItem';

export type State = {
  loading: boolean;
  restaurant: Restaurant;
  restaurantMenus: RestaurantMenu[];
  restaurantMenu: RestaurantMenu;
  menuCategories: MenuCategory[];
  menuCategory: MenuCategory;
  menuItems: MenuItem[];
  menuItem: MenuItem;
}

export const state: State = {
  loading: false,
  restaurant: new Restaurant(),
  restaurantMenus: [],
  restaurantMenu: new RestaurantMenu(),
  menuCategories: [],
  menuCategory: new MenuCategory(),
  menuItems: [],
  menuItem: new MenuItem(),
};
