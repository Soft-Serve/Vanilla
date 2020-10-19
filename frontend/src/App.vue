<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store';
import { ActionTypes } from '@/store/actions';
import { MutationType } from '@/store/mutations';
import MenuCategory from '@/models/MenuCategory';
import RestaurantMenu from '@/models/DTO/RestaurantMenuDTO';
import Restaurant from '@/models/Restaurant';

export default defineComponent({
  name: 'App',
  data() {
    return {
      store: useStore(),
    };
  },
  computed: {
    loading(): boolean {
      return this.store.state.loading;
    },
    menus(): RestaurantMenu[] {
      return this.store.getters.menus;
    },
    menu(): RestaurantMenu {
      return this.store.getters.menu;
    },
    restaurant(): Restaurant {
      return this.store.getters.restaurant;
    },
    categories(): MenuCategory[] {
      return this.store.getters.categories;
    },
  },
  methods: {
    fetchSelectedMenuAndCategory() {
      this.store.commit(MutationType.SetLoading, true);
      this.store.commit(MutationType.SetRestaurantMenu, this.menus[0]);
      this.store.dispatch(ActionTypes.getCategories, this.store.getters.menu);
      this.store.commit(MutationType.SetLoading, false);
    },
  },
  mounted() {
    this.store.dispatch(ActionTypes.getRestaurant, undefined);
    this.store.dispatch(ActionTypes.getMenus, undefined);
  },
  watch: {
    menus: 'fetchSelectedMenuAndCategory',
  },
});
</script>
