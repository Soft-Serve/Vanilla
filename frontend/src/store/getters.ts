import { GetterTree } from 'vuex';
import Restaurant from '@/models/Restaurant';
import RestaurantMenu from '@/models/RestaurantMenu';
import MenuCategory from '@/models/MenuCategory';
import MenuItem from '@/models/MenuItem';
import { State } from './state';

export type Getters = {
  restaurant(state: State): Restaurant;
  menus(state: State): RestaurantMenu[];
  menu(state: State): RestaurantMenu;
  categories(state: State): MenuCategory[];
  category(state: State): MenuCategory;
  items(state: State): MenuItem[];
  item(state: State): MenuItem;
}

export const getters: GetterTree<State, State> & Getters = {
  restaurant(state) {
    return state.restaurant;
  },
  menus(state) {
    return state.restaurantMenus;
  },
  menu(state) {
    return state.restaurantMenu;
  },
  categories(state) {
    return state.menuCategories;
  },
  category(state) {
    return state.menuCategory;
  },
  items(state) {
    return state.menuItems;
  },
  item(state) {
    return state.menuItem;
  },
};
