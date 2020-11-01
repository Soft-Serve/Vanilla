import { computed } from 'vue';
import { useStore } from '@/store';
import { ActionTypes } from '@/store/actions';
import ApiService from '@/models/ApiService';
import MenuCategory from '@/models/MenuCategory';
import RestaurantMenu from '@/models/RestaurantMenu';

export default () => {
  const store = useStore();
  const restaurant = computed(() => store.state.restaurant);
  const loading = computed(() => store.state.loading);
  const menu = computed(() => store.getters.menus.collection[0]);
  const categories = computed(() => store.getters.categories);
  const category = computed(() => store.getters.categories.collection[0]);
  const items = computed(() => store.getters.items);

  const fetchMenu = (): void => {
    store.dispatch(ActionTypes.getMenu, menu.value);
  };

  const fetchCategory = async (activeMenu: RestaurantMenu, activeCategory: MenuCategory): Promise<void> => {
    const response = await ApiService.getMenuCategory(activeMenu, activeCategory);
    store.dispatch(ActionTypes.getCategory, response);
  };

  const fetchItems = async (activeMenu: RestaurantMenu, activeCategory: MenuCategory): Promise<void> => {
    const response = await ApiService.getItems(activeMenu, activeCategory);
    store.dispatch(ActionTypes.getItems, response.collection);
  };

  const triggerCategoryChange = (payload: MenuCategory) => {
    fetchItems(menu.value, payload);
    store.dispatch(ActionTypes.getCategory, payload);
  };

  const fetchCategories = async (activeMenu: RestaurantMenu): Promise<void> => {
    const response = await ApiService.getMenuCategories(activeMenu);
    store.dispatch(ActionTypes.getCategories, response.collection);
    triggerCategoryChange(response.collection[0]);
  };

  return {
    loading,
    restaurant,
    menu,
    categories,
    category,
    items,
    fetchMenu,
    fetchCategories,
    fetchCategory,
    triggerCategoryChange,
    store,
  };
};
