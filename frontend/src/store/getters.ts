import { GetterTree } from 'vuex';
import { Restaurant } from '@/interfaces';
import { State } from './state';

export type Getters = {
  restaurant(state: State): Restaurant | undefined;
}

export const getters: GetterTree<State, State> & Getters = {
  restaurant(state) {
    return state.restaurant ? state.restaurant : undefined;
  },
};
