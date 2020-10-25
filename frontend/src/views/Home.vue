<template>
  <div class="wrapper" v-if="categories.length">
    <BaseWrapper :column="2" class="mt-4">
      <BaseButton
        v-for="category in categories"
        :key="category.id"
        :buttonStyle="styles.WHITE"
        @click="triggerCategoryChange(category)">
        {{ category.name }}
      </BaseButton>
    </BaseWrapper>
    <BaseWrapper>
      <BaseCard v-for="item in items" :key="item.id" :data="item"/>
    </BaseWrapper>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  defineComponent, computed, watch, reactive,
} from 'vue';
import { useStore } from '@/store';
import { BUTTONSTYLES } from '@/helpers';
import MenuCategory from '@/models/MenuCategory';
import { ActionTypes } from '@/store/actions';
import RestaurantMenu from '@/models/RestaurantMenu';
import ApiService from '@/models/ApiService';
import MenuItem from '@/models/MenuItem';
import BaseWrapper from '~/BaseWrapper/BaseWrapper.vue';
import BaseButton from '~/BaseButton/BaseButton.vue';
import BaseCard from '~/BaseCard/BaseCard.vue';

export default defineComponent({
  name: 'Home',
  components: {
    BaseWrapper,
    BaseButton,
    BaseCard,
  },
  setup() {
    const styles = BUTTONSTYLES;
    const store = useStore();
    const loading = computed(() => store.state.loading);
    const categories = computed(() => store.getters.categories);
    const items = computed(() => store.getters.items);
    const menu = computed(() => store.getters.menus[0]);
    const category = computed(() => store.getters.categories[0]);

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

    const triggerCategoryChange = (payload: MenuCategory) => {
      fetchItems(menu.value, payload);
    };

    watch(menu, (selectedMenu) => fetchCategories(selectedMenu));

    watch(categories, (selectedCategory) => {
      fetchCategory(menu.value, selectedCategory[0]);
      triggerCategoryChange(selectedCategory[0]);
    });
    // watch(items, (selectedItem) => fetchItem(menu.value, category.value, selectedItem[0]));




    return {
      loading,
      categories,
      styles,
      items,
      triggerCategoryChange,
    };
  },

});
</script>
<style scoped>
.flip-list-move {
  transition: transform 2.8s ease;
}
</style>
