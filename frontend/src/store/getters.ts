import { GetterTree } from 'vuex';
import Restaurant from '@/models/Restaurant';
import RestaurantMenu from '@/models/RestaurantMenu';
import MenuCategory from '@/models/MenuCategory';
import { State } from './state';

export type Getters = {
  restaurant(state: State): Restaurant;
  menus(state: State): RestaurantMenu[];
  menu(state: State): RestaurantMenu;
  categories(state: State): MenuCategory[];
}

export const getters: GetterTree<State, State> & Getters = {
  restaurant(state) {
    return state.restaurant;
  },
  menus(state) {
    return state.restaurantMenus.length ? state.restaurantMenus : [];
  },
  menu(state) {
    return state.restaurantMenu;
  },
  categories(state) {
    return state.menuCategories.length ? state.menuCategories : [];
  },
};
