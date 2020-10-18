import { ActionContext, ActionTree } from 'vuex';
import ApiService from '@/models/ApiService';
import { Mutations, MutationType } from './mutations';
import { State } from './state';

export enum ActionTypes {
  getRestaurant = 'GET_RESTAURANT'
}

type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>;
}

export type Actions = {
    [ActionTypes.getRestaurant](context: ActionAugments): void;
}

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.getRestaurant]({ commit }) {
    commit(MutationType.SetLoading, true);
    const restaurant = await ApiService.getRestaurant();
    commit(MutationType.SetLoading, false);
    commit(MutationType.SetRestaurant, restaurant);
  },
};
