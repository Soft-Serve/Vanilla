import Restaurant from '@/models/Restaurant';
import RestaurantMenu from '@/models/RestaurantMenu';

export type State = {
  loading: boolean;
  restaurant?: Restaurant;
  restaurantMenus: RestaurantMenu[];
  restaurantMenu?: RestaurantMenu;
}

export const state: State = {
  loading: false,
  restaurant: undefined,
  restaurantMenus: [],
  restaurantMenu: undefined,
};
