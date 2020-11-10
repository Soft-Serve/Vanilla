import { computed, watch, watchEffect } from 'vue';
import { useStore } from '@/store';
import { ActionTypes } from '@/store/actions';
import MenuItem from '@/models/MenuItem';

export default () => {
  const store = useStore();
  const restaurant = computed(() => store.getters.restaurant);
  const loading = computed(() => store.state.loading);
  const menu = computed(() => store.getters.menus.collection[0]);
  const categories = computed(() => store.getters.categories);
  const category = computed(() => store.getters.categories.collection[0]);
  const items = computed(() => store.getters.items);
  const dietaries = computed(() => store.getters.dietaries);

  const fetchRestaurant = () => {
    store.dispatch(ActionTypes.getRestaurant, undefined);
    store.dispatch(ActionTypes.getMenus, undefined);

    const stop = watchEffect(() => {
      if (menu.value) {
        store.dispatch(ActionTypes.getDietaries, restaurant.value);
        store.dispatch(ActionTypes.getMenu, menu.value);
        store.dispatch(ActionTypes.getCategories, menu.value);
        if (categories.value.collection.length) {
          store.dispatch(ActionTypes.getCategory, categories.value.collection[0]);
          store.dispatch(ActionTypes.getItems, category.value);
          stop();
        }
      }
    });
  };

  watch(items, (watchedItems) => watchedItems.collection.forEach((item: MenuItem) => item.fetchAllergies()));


  return {
    loading,
    restaurant,
    menu,
    categories,
    category,
    items,
    store,
    fetchRestaurant,
    dietaries,
  };
};
