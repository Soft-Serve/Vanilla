import { computed, ComputedRef } from 'vue';
import { useStore, Store } from '@/store';
import { ActionTypes } from '@/store/actions';
import Restaurant from '@/models/Restaurant';
import RestaurantMenu from '@/models/RestaurantMenu';
import MenuCollection from '@/models/MenuCollection';
import CategoryCollection from '@/models/CategoryCollection';
import MenuCategory from '@/models/MenuCategory';
import DietaryCollection from '@/models/DietaryCollection';
import ItemDietary from '@/models/ItemDietary';
import ItemsCollection from '@/models/ItemsCollection';
import { MutationType } from '@/store/mutations';

export interface UseAPI {
  store: Store;
  restaurant: ComputedRef<Restaurant>;
  loading: ComputedRef<boolean>;
  menus: ComputedRef<MenuCollection>;
  menu: ComputedRef<RestaurantMenu>;
  categories: ComputedRef<CategoryCollection>;
  category: ComputedRef<MenuCategory>;
  dietaries: ComputedRef<DietaryCollection>;
  activeDietaries: ComputedRef<ItemDietary[]>;
  items: ComputedRef<ItemsCollection>;
  handleCategoryChange: (payload: MenuCategory) => void;
  populateStore: () => void;
}

export default (): UseAPI => {
  const store = useStore();
  const restaurant = computed(() => store.getters.restaurant);
  const loading = computed(() => store.state.loading);
  const menus = computed(() => store.getters.menus);
  const menu = computed(() => store.getters.menu);
  const categories = computed(() => store.getters.categories);
  const category = computed(() => store.getters.category);
  const dietaries = computed(() => store.getters.dietaries);
  const activeDietaries = computed(() => store.getters.dietaries.activeDietaries);
  const items = computed(() => store.getters.items);

  const handleCategoryChange = (payload: MenuCategory): void => {
    if (payload.id > 0) {
      store.commit(MutationType.SetLoading, true);
      store.dispatch(ActionTypes.getCategory, payload);
      store.dispatch(ActionTypes.getItems, payload);
      store.commit(MutationType.SetLoading, false);
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
    items,
  };
};
