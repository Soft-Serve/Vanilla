import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export interface RootState {
  User: Record<string, string>;
}
export default new Vuex.Store<RootState>({});
