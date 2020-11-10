import { GetterTree } from 'vuex';
import Restaurant from '@/models/Restaurant';
import RestaurantMenu from '@/models/RestaurantMenu';
import MenuCategory from '@/models/MenuCategory';
import ItemsCollection from '@/models/ItemsCollection';
import DietaryCollection from '@/models/DietaryCollection';
import CategoryCollection from '@/models/CategoryCollection';
import MenuCollection from '@/models/MenuCollection';
import { State } from './state';

export type Getters = {
  restaurant(state: State): Restaurant;
  menus(state: State): MenuCollection;
  menu(state: State): RestaurantMenu;
  categories(state: State): CategoryCollection;
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
