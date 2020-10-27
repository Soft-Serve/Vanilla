import { computed } from 'vue';
import { useStore } from '@/store';
import { ActionTypes } from '@/store/actions';
import ApiService from '@/models/ApiService';
import MenuCategory from '@/models/MenuCategory';
import RestaurantMenu from '@/models/RestaurantMenu';
import MenuItem from '@/models/MenuItem';

export default () => {
  const store = useStore();
  const restaurant = computed(() => store.state.restaurant);
  const loading = computed(() => store.state.loading);
  const menu = computed(() => store.getters.menus[0]);
  const categories = computed(() => store.getters.categories);
  const category = computed(() => store.getters.categories[0]);
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

  const triggerCategoryChange = (payload: MenuCategory) => {
    fetchItems(menu.value, payload);
  };

  return {
    loading,
    restaurant,
    menu,
    categories,
    category,
    items,
    item,
    fetchMenu,
    fetchCategories,
    fetchCategory,
    fetchItems,
    fetchItem,
    triggerCategoryChange,
  };
};
