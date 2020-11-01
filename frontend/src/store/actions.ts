/* eslint-disable import/no-cycle */
import { ActionContext, ActionTree } from 'vuex';
import ApiService from '@/models/ApiService';
import MenuCategory from '@/models/MenuCategory';
import MenuItem from '@/models/MenuItem';
import RestaurantMenu from '@/models/RestaurantMenu';
import { Mutations, MutationType } from './mutations';
import { State } from './state';

export enum ActionTypes {
  getRestaurant = 'GET_RESTAURANT',
  getMenus = 'GET_MENUS',
  getMenu = 'GET_MENU',
  getCategories = 'GET_CATEGORIES',
  getCategory = 'GET_CATEGORY',
  getItems = 'GET_ITEMS',
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
  [ActionTypes.getCategories](context: ActionAugments, payload: MenuCategory[]): void;
  [ActionTypes.getCategory](context: ActionAugments, payload: MenuCategory): void;
  [ActionTypes.getItems](context: ActionAugments, payload: MenuItem[]): void;

}

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.getRestaurant]({ commit }) {
    commit(MutationType.SetLoading, true);
    const restaurant = await ApiService.getRestaurant();
    commit(MutationType.SetRestaurant, restaurant);
    commit(MutationType.SetLoading, false);
  },
  async [ActionTypes.getMenus]({ commit }) {
    commit(MutationType.SetLoading, true);
    const menus = await ApiService.getRestaurantMenus();
    commit(MutationType.SetRestaurantMenus, menus.collection);
    commit(MutationType.SetLoading, false);
  },
  [ActionTypes.getMenu]({ commit }, payload) {
    commit(MutationType.SetLoading, true);
    commit(MutationType.SetRestaurantMenu, payload);
    commit(MutationType.SetLoading, false);
  },
  [ActionTypes.getCategories]({ commit }, payload) {
    commit(MutationType.SetLoading, true);
    commit(MutationType.SetMenuCategories, payload);
    commit(MutationType.SetLoading, false);
  },
  [ActionTypes.getCategory]({ commit }, payload) {
    commit(MutationType.SetLoading, true);
    commit(MutationType.SetMenuCategory, payload);
    commit(MutationType.SetLoading, false);
  },
  [ActionTypes.getItems]({ commit }, payload) {
    commit(MutationType.SetLoading, true);
    commit(MutationType.SetMenuItems, payload);
    commit(MutationType.SetLoading, false);
  },
};
