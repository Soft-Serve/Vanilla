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
  restaurant: Restaurant;
  menus: MenuCollection;
  menu: RestaurantMenu
  categories: CategoryCollection;
  category: MenuCategory;
  dietaries:DietaryCollection
  activeDietaries: ComputedRef<ItemDietary[]>;
  items: ItemsCollection,
  isLoading: ComputedRef<boolean>;
  handleCategoryChange: (payload: MenuCategory) => void;
  populateStore: () => void;
}

export default (): UseAPI => {
  const store = useStore();
  const activeDietaries = computed(() => store.getters.dietaries.activeDietaries);
  const {
    menus, menu, items, restaurant, categories, category, dietaries,
  } = store.getters;

  const isLoading = computed(() => store.getters.loading);


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
    restaurant,
    dietaries,
    menu,
    categories,
    handleCategoryChange,
    activeDietaries,
    category,
    menus,
    items,
    isLoading,
  };
};
