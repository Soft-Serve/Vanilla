import { ActionContext, ActionTree } from 'vuex';
import RestaurantMenu from '@/models/RestaurantMenu';
import MenuCategory from '@/models/MenuCategory';
import ApiService from '@/models/ApiService';
import Restaurant from '@/models/Restaurant';
import MenuItem from '@/models/MenuItem';
import { State } from './state';
import { Mutations, MutationType } from './mutations';

export enum ActionTypes {
  getRestaurant = 'GET_RESTAURANT',
  getMenus = 'GET_MENUS',
  getMenu = 'GET_MENU',
  getCategories = 'GET_CATEGORIES',
  getCategory = 'GET_CATEGORY',
  getItems = 'GET_ITEMS',
  getDietaries = 'GET_DIETARIES',
  getItemDietaries = 'GET_ITEM_DIETARIES',
}

type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
    commit<K extends keyof Mutations>(
      key: K,
      payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>;
}

export type Actions = {
  [ActionTypes.getRestaurant](context: ActionAugments): void;
  [ActionTypes.getMenus](context: ActionAugments): void;
  [ActionTypes.getMenu](context: ActionAugments, payload: RestaurantMenu): void;
  [ActionTypes.getCategories](context: ActionAugments, payload: RestaurantMenu): void;
  [ActionTypes.getCategory](context: ActionAugments, payload: MenuCategory): void;
  [ActionTypes.getItems](context: ActionAugments, payload: MenuCategory): void;
  [ActionTypes.getDietaries](context: ActionAugments, payload: Restaurant): void;
  [ActionTypes.getItemDietaries](context: ActionAugments, payload: MenuItem): void;

}

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.getRestaurant]({ commit, dispatch }) {
    commit(MutationType.SetLoading, true);
    const restaurant = await ApiService.getRestaurant();
    dispatch(ActionTypes.getMenus, undefined);
    commit(MutationType.SetRestaurant, restaurant);
    commit(MutationType.SetLoading, false);
  },
  async [ActionTypes.getMenus]({ commit, dispatch }) {
    commit(MutationType.SetLoading, true);
    const menus = await ApiService.getRestaurantMenus();
    dispatch(ActionTypes.getDietaries, menus[0]);
    dispatch(ActionTypes.getMenu, menus[0]);
    dispatch(ActionTypes.getCategories, menus[0]);
    commit(MutationType.SetRestaurantMenus, menus);
    commit(MutationType.SetLoading, false);
  },
  async [ActionTypes.getDietaries]({ commit }, payload) {
    commit(MutationType.SetLoading, true);
    const dietaries = await ApiService.getRestaurantDietaries(payload);
    commit(MutationType.SetDietaries, dietaries);
    commit(MutationType.SetLoading, false);
  },
  async [ActionTypes.getMenu]({ commit }, payload) {
    commit(MutationType.SetLoading, true);
    const menu = await ApiService.getRestaurantMenu(payload);
    commit(MutationType.SetRestaurantMenu, menu);
    commit(MutationType.SetLoading, false);
  },
  async [ActionTypes.getCategories]({ commit, dispatch }, payload) {
    commit(MutationType.SetLoading, true);
    const categories = await ApiService.getMenuCategories(payload);
    dispatch(ActionTypes.getCategory, categories[0]);
    dispatch(ActionTypes.getItems, categories[0]);
    commit(MutationType.SetMenuCategories, categories);
    commit(MutationType.SetLoading, false);
  },
  async [ActionTypes.getCategory]({ commit }, payload) {
    commit(MutationType.SetLoading, true);
    const category = await ApiService.getMenuCategory(payload);
    commit(MutationType.SetMenuCategory, category);
    commit(MutationType.SetLoading, false);
  },
  async [ActionTypes.getItems]({ commit, dispatch }, payload) {
    commit(MutationType.SetLoading, true);
    const items = await ApiService.getItems(payload);
    commit(MutationType.SetMenuItems, items);
    items.forEach((item: MenuItem) => dispatch(ActionTypes.getItemDietaries, item));
    commit(MutationType.SetLoading, false);
  },
  async [ActionTypes.getItemDietaries]({ commit }, payload) {
    commit(MutationType.SetLoading, true);
    const dietaries = await ApiService.getItemDietaries(payload);
    commit(MutationType.SetItemDietaries, dietaries);
    commit(MutationType.SetLoading, false);
  },
};
