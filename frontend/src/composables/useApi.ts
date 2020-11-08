import { computed, watch } from 'vue';
import { useStore } from '@/store';
import { ActionTypes } from '@/store/actions';
import ApiService from '@/models/ApiService';
import MenuCategory from '@/models/MenuCategory';
import RestaurantMenu from '@/models/RestaurantMenu';
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


  const fetchDietaries = (): void => {
    store.dispatch(ActionTypes.getDietaries, restaurant.value);
  };

  const fetchCategory = async (activeMenu: RestaurantMenu, activeCategory: MenuCategory): Promise<void> => {
    const response = await ApiService.getMenuCategory(activeMenu, activeCategory);
    store.dispatch(ActionTypes.getCategory, response);
  };

  const fetchItems = async (activeCategory: MenuCategory): Promise<void> => {
    const response = await ApiService.getItems(activeCategory);
    store.dispatch(ActionTypes.getItems, response.collection);
  };

  const triggerCategoryChange = (payload: MenuCategory) => {
    fetchItems(payload);
    store.dispatch(ActionTypes.getCategory, payload);
  };

  const fetchCategories = async (activeMenu: RestaurantMenu): Promise<void> => {
    const response = await ApiService.getMenuCategories(activeMenu);
    store.dispatch(ActionTypes.getCategories, response.collection);
    triggerCategoryChange(response.collection[0]);
    fetchDietaries();
  };

  const changeCategory = (newCategory: MenuCategory): void => {
    fetchCategory(menu.value, newCategory);
    triggerCategoryChange(newCategory);
  };

  const fetchMenu = (): void => {
    store.dispatch(ActionTypes.getMenu, menu.value);
  };


  const fetchRestaurant = (): void => {
    store.dispatch(ActionTypes.getRestaurant, undefined);
    store.dispatch(ActionTypes.getMenus, undefined);
    fetchMenu();
  };

  watch(items, (watchedItems) => watchedItems.collection.forEach((item: MenuItem) => item.fetchAllergies()));


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
    changeCategory,
    fetchDietaries,
    fetchRestaurant,
    dietaries,
  };
};
