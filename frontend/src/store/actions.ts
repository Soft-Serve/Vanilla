import { ActionContext, ActionTree } from 'vuex';
import ApiService from '@/models/ApiService';
import { Mutations, MutationType } from './mutations';
import { State } from './state';

export enum ActionTypes {
  getRestaurant = 'GET_RESTAURANT',
  getMenus = 'GET_MENUS',
  getMenu = 'GET_MENU',
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
  [ActionTypes.getMenu](context: ActionAugments): void;
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
    commit(MutationType.SetRestaurantMenus, menus);
    commit(MutationType.SetLoading, false);
  },
  async [ActionTypes.getMenu]({ commit }) {
    commit(MutationType.SetLoading, true);
    const menus = await ApiService.getRestaurantMenus();
    commit(MutationType.SetRestaurantMenu, menus[0]);
    commit(MutationType.SetLoading, false);
  },
};
