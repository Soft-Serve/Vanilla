import { MutationTree } from 'vuex';
import Restaurant from '@/models/Restaurant';
import RestaurantMenu from '@/models/RestaurantMenu';
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
  SetDietaries = 'SET_DIETARIES',
  SetFilteredMenuItems = 'SET_FILTERED_MENU_ITEMS.'
}

export type Mutations = {
  [MutationType.SetRestaurant](state: State, payload: Restaurant): void;
  [MutationType.SetLoading](state: State, payload: boolean): void;
  [MutationType.SetRestaurantMenus](state: State, payload: RestaurantMenu[]): void;
  [MutationType.SetRestaurantMenu](state: State, payload: RestaurantMenu): void;
  [MutationType.SetMenuCategories](state: State, payload: MenuCategory[]): void;
  [MutationType.SetMenuCategory](state: State, payload: MenuCategory): void;
  [MutationType.SetMenuItems](state: State, payload: MenuItem[]): void;
  [MutationType.SetFilteredMenuItems](state: State, payload: MenuItem[]): void;
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
    const copy = [...state.items.filteredCollection];
    state.items.collection = items;
    state.items.filteredCollection = copy;
  },
  [MutationType.SetFilteredMenuItems](state, items) {
    const copy = [...state.items.collection];
    state.items.filteredCollection.splice(0, state.items.filteredCollection.length);
    state.items.collection = copy;
    state.items.filteredCollection = items;
  },
  [MutationType.SetDietaries](state, dietaries) {
    state.dietaries.collection = dietaries;
  },
};
