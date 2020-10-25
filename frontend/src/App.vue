<template>
<div class="container">
  <div class="wrapper">
    <NavBar/>
  </div>
</div>
<transition name="component-fade" mode="out-in">
    <router-view/>
</transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store';
import { ActionTypes } from '@/store/actions';
import { MutationType } from '@/store/mutations';
import MenuCategory from '@/models/MenuCategory';
import RestaurantMenu from '@/models/DTO/RestaurantMenuDTO';
import Restaurant from '@/models/Restaurant';
import ApiService from '@/models/ApiService';
import { SIZES, BUTTONSTYLES } from '@/helpers';
import MenuItem from './models/MenuItem';
import ToolBar from '~/ToolBar/ToolBar.vue';
import BaseButton from '~/BaseButton/BaseButton.vue';
import NavBar from '~/NavBar/NavBar.vue';

export default defineComponent({
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    ToolBar,
    // eslint-disable-next-line vue/no-unused-components
    BaseButton,
    NavBar,
  },
  data() {
    return {
      store: useStore(),
      SIZES,
      BUTTONSTYLES,
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
    category(): MenuCategory {
      return this.store.getters.category;
    },
    items(): MenuItem[] {
      return this.store.getters.items;
    },
    item(): MenuItem {
      return this.store.getters.item;
    },
  },
  methods: {
    fetchSelectedMenuAndCategory() {
      this.store.commit(MutationType.SetLoading, true);
      this.store.commit(MutationType.SetRestaurantMenu, this.menus[0]);
      this.store.dispatch(ActionTypes.getCategories, this.store.getters.menu);
      this.store.commit(MutationType.SetLoading, false);
    },
    async fetchCategoryAndItems(): Promise<void> {
      const categories = await ApiService.getMenuCategory(this.menu, this.categories[0]);
      const items = await ApiService.getMenuItems(this.menu, this.categories[0]);
      this.store.dispatch(ActionTypes.getCategory, categories);
      if (items) this.store.dispatch(ActionTypes.getItems, items);
      const item = await ApiService.getMenuItem(this.menu, this.categories[0], this.items[0]);
      if (item) this.store.dispatch(ActionTypes.getItem, item);
    },
  },
  watch: {
    menus: 'fetchSelectedMenuAndCategory',
    categories: 'fetchCategoryAndItems',
  },
  mounted() {
    this.store.dispatch(ActionTypes.getRestaurant, undefined);
    this.store.dispatch(ActionTypes.getMenus, undefined);
  },
});
</script>
<style scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.wrapper {
  max-width: 1100px;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.9s ease;
}

.component-fade-enter-from,
.component-fade-leave-to {
  opacity: 0;
}
</style>
