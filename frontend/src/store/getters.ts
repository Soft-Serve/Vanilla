import { GetterTree } from 'vuex';
import Restaurant from '@/models/Restaurant';
import RestaurantMenu from '@/models/RestaurantMenu';
import MenuCategory from '@/models/MenuCategory';
import MenuItem from '@/models/MenuItem';
import Collection from '@/models/Collection';
import { State } from './state';

export type Getters = {
  restaurant(state: State): Restaurant;
  menus(state: State): Collection<RestaurantMenu>;
  menu(state: State): RestaurantMenu;
  categories(state: State): Collection<MenuCategory>;
  category(state: State): MenuCategory;
  items(state: State): Collection<MenuItem>;
}

export const getters: GetterTree<State, State> & Getters = {
  restaurant(state) {
    return state.restaurant;
  },
  menus(state) {
    return state.menus;
  },
  menu(state) {
    return state.menu;
  },
  categories(state) {
    return state.categories;
  },
  category(state) {
    return state.category;
  },
  items(state) {
    return state.items;
  },
};
