<template>
<div class="container">
  <div class="wrapper">
    <NavBar/>
  </div>
<router-view v-slot="{ Component }">
  <transition  name="component-fade" mode="out-in">
    <component :is="Component" />
  </transition>
</router-view>
</div>
</template>

<script lang="ts">
import {
  defineComponent, computed, onMounted, watch,
} from 'vue';
import { useStore } from '@/store';
import { ActionTypes } from '@/store/actions';
import ApiService from '@/models/ApiService';
import NavBar from '~/NavBar/NavBar.vue';
import RestaurantMenu from './models/DTO/RestaurantMenuDTO';
import MenuCategory from './models/MenuCategory';
import MenuItem from './models/MenuItem';

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
  },
  setup() {
    const store = useStore();
    const restaurant = computed(() => store.state.restaurant);
    const loading = computed(() => store.state.loading);
    const menu = computed(() => store.getters.menus[0]);
    const categories = computed(() => store.getters.categories);
    const category = computed(() => store.getters.category);
    const items = computed(() => store.getters.items);
    const item = computed(() => store.getters.item);

    const fetchMenu = (): void => {
      store.dispatch(ActionTypes.getMenu, menu.value);
    };

    const fetchCategories = async (activeMenu: RestaurantMenu): Promise<void> => {
      const response = await ApiService.getMenuCategories(activeMenu);
      store.dispatch(ActionTypes.getCategories, response);
    };

    const fetchCategory = async (activeMenu: RestaurantMenu, activeCategory: MenuCategory): Promise<void> => {
      const response = await ApiService.getMenuCategory(activeMenu, activeCategory);
      store.dispatch(ActionTypes.getCategory, response);
    };

    const fetchItems = async (activeMenu: RestaurantMenu, activeCategory: MenuCategory): Promise<void> => {
      const response = await ApiService.getMenuItems(activeMenu, activeCategory);
      store.dispatch(ActionTypes.getItems, response);
    };

    const fetchItem = async (activeMenu: RestaurantMenu, activeCategory: MenuCategory, activeItem: MenuItem): Promise<void> => {
      const response = await ApiService.getMenuItem(activeMenu, activeCategory, activeItem);
      store.dispatch(ActionTypes.getItem, response);
    };

    onMounted(() => {
      store.dispatch(ActionTypes.getRestaurant, undefined);
      store.dispatch(ActionTypes.getMenus, undefined);
      fetchMenu();
    });

    watch(menu, (selectedMenu) => fetchCategories(selectedMenu));
    watch(categories, (selectedCategory) => {
      fetchCategory(menu.value, selectedCategory[0]);
      fetchItems(menu.value, selectedCategory[0]);
    });
    watch(items, (selectedItem) => fetchItem(menu.value, category.value, selectedItem[0]));

    return {
      loading,
      menu,
      categories,
      category,
      items,
      item,
      restaurant,
    };
  },
});
</script>
<style>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
