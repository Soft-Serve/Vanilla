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
  defineComponent, computed, onMounted,
} from 'vue';
import { useStore } from '@/store';
import { ActionTypes } from '@/store/actions';
import NavBar from '~/NavBar/NavBar.vue';

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
  },
  setup() {
    const store = useStore();
    const restaurant = computed(() => store.state.restaurant);
    const loading = computed(() => store.state.loading);
    const menu = computed(() => store.getters.menus[1]);
    const categories = computed(() => store.getters.categories);
    const category = computed(() => store.getters.category);
    const items = computed(() => store.getters.items);
    const item = computed(() => store.getters.item);

    const fetchMenu = (): void => {
      store.dispatch(ActionTypes.getMenu, menu.value);
    };

    onMounted(() => {
      store.dispatch(ActionTypes.getRestaurant, undefined);
      store.dispatch(ActionTypes.getMenus, undefined);
      fetchMenu();
    });

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
