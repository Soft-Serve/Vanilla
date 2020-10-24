<template>
<div class="container">
  <ToolBar>
    <template v-slot:toolBarContent>
      <div class="w-32 mx-3">
        <BaseButton>
          <router-link to="/">Home</router-link>
        </BaseButton>
      </div>
      <div class="w-32 mx-3">
        <BaseButton>
          <router-link to="/about">About</router-link>
        </BaseButton>
      </div>
    </template>
  </ToolBar>
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
import ApiService from '@/models/ApiService';
import { SIZES, BUTTONSTYLES } from '@/helpers';
import MenuItem from './models/MenuItem';
import ToolBar from '~/ToolBar/ToolBar.vue';
import BaseButton from '~/BaseButton/BaseButton.vue';

export default defineComponent({
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    ToolBar,
    // eslint-disable-next-line vue/no-unused-components
    BaseButton,
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
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  margin: 20px;
}
</style>
