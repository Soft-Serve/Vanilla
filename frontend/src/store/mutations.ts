import { MutationTree } from 'vuex';
import Restaurant from '@/models/Restaurant';
import RestaurantMenus from '@/models/RestaurantMenu';
import RestaurantMenu from '@/models/DTO/RestaurantMenuDTO';
import MenuCategory from '@/models/MenuCategory';
import MenuItem from '@/models/MenuItem';
import ItemDietary from '@/models/ItemDietary';

import { State } from './state';

export enum MutationType {
  SetRestaurant = 'SET_RESTAURANT',
  SetLoading = 'SET_LOADING',
  SetRestaurantMenus = 'SET_RESTAURANT_MENUS',
  SetRestaurantMenu = 'SET_RESTAURANT_MENU',
  SetMenuCategories = 'SET_MENU_CATEGORIES',
  SetMenuCategory = 'SET_MENU_CATEGORY',
  SetMenuItems = 'SET_MENU_ITEMS',
  SetItemDietaries = 'SET_ITEM_DIETARIES',
  SetDietaries = 'SET_DIETARIES',
}

export type Mutations = {
  [MutationType.SetRestaurant](state: State, payload: Restaurant): void;
  [MutationType.SetLoading](state: State, payload: boolean): void;
  [MutationType.SetRestaurantMenus](state: State, payload: RestaurantMenus[]): void;
  [MutationType.SetRestaurantMenu](state: State, payload: RestaurantMenu): void;
  [MutationType.SetMenuCategories](state: State, payload: MenuCategory[]): void;
  [MutationType.SetMenuCategory](state: State, payload: MenuCategory): void;
  [MutationType.SetMenuItems](state: State, payload: MenuItem[]): void;
  [MutationType.SetItemDietaries](state: State, payload: ItemDietary[]): void;
  [MutationType.SetDietaries](state: State, payload: ItemDietary[]): void;


}

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.SetRestaurant](state, restaurant) {
    state.restaurant = restaurant;
  },
  [MutationType.SetLoading](state, isLoaded) {
    state.loading = isLoaded;
  },
  [MutationType.SetRestaurantMenus](state, menus) {
    state.menus.collection = menus;
  },
  [MutationType.SetRestaurantMenu](state, menu) {
    state.menu = menu;
  },
  [MutationType.SetMenuCategories](state, categories) {
    state.categories.collection = categories;
  },
  [MutationType.SetMenuCategory](state, category) {
    state.category = category;
  },
  [MutationType.SetMenuItems](state, items) {
    state.items.collection = items;
  },
  [MutationType.SetItemDietaries](state, dietaries) {
    state.items.collection.forEach((item: MenuItem) => {
      item.setAllergies(dietaries);
    });
  },
  [MutationType.SetDietaries](state, dietaries) {
    state.dietaries.collection = dietaries;
  },
};
