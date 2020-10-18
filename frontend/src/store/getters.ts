import { GetterTree } from 'vuex';
import Restaurant from '@/models/Restaurant';
import RestaurantMenu from '@/models/RestaurantMenu';
import { State } from './state';

export type Getters = {
  restaurant(state: State): Restaurant | undefined;
  menus(state: State): RestaurantMenu[];
  menu(state: State): RestaurantMenu | undefined;
}

export const getters: GetterTree<State, State> & Getters = {
  restaurant(state) {
    return state.restaurant ? state.restaurant : undefined;
  },
  menus(state) {
    return state.restaurantMenus.length ? state.restaurantMenus : [];
  },
  menu(state) {
    return state.restaurantMenu ? state.restaurantMenu : undefined;
  },
};
