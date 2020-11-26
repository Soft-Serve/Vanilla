import { computed } from 'vue';
import { useStore } from '@/store';
import { ActionTypes } from '@/store/actions';
import MenuCategory from '@/models/MenuCategory';

export default () => {
  const store = useStore();
  const restaurant = computed(() => store.getters.restaurant);
  const loading = computed(() => store.state.loading);
  const menus = computed(() => store.getters.menus);
  const menu = computed(() => store.getters.menu);
  const categories = computed(() => store.getters.categories);
  const category = computed(() => store.getters.category);
  const dietaries = computed(() => store.getters.dietaries);
  const activeDietaries = computed(() => store.getters.dietaries.activeDietaries);

  const handleCategoryChange = (newCategory: MenuCategory): void => {
    if (newCategory.id > 0) {
      store.dispatch(ActionTypes.getCategory, newCategory);
      store.dispatch(ActionTypes.getItems, newCategory);
    }
  };

  const populateStore = (): void => {
    store.dispatch(ActionTypes.getRestaurant, undefined);
  };

  return {
    store,
    populateStore,
    loading,
    restaurant,
    dietaries,
    menu,
    categories,
    handleCategoryChange,
    activeDietaries,
    category,
    menus,
  };
};
