import { GetterTree } from 'vuex';
import Restaurant from '@/models/Restaurant';
import RestaurantMenu from '@/models/RestaurantMenu';
import MenuCategory from '@/models/MenuCategory';
import Collection from '@/models/Collection';
import ItemsCollection from '@/models/ItemsCollection';
import DietaryCollection from '@/models/DietaryCollection';
import { State } from './state';

export type Getters = {
  restaurant(state: State): Restaurant;
  menus(state: State): Collection<RestaurantMenu>;
  menu(state: State): RestaurantMenu;
  categories(state: State): Collection<MenuCategory>;
  category(state: State): MenuCategory;
  items(state: State): ItemsCollection;
  dietaries(state: State): DietaryCollection;
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
  dietaries(state) {
    return state.dietaries;
  },
};
