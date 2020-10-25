<template>
  <div>
    <h1>
      <BaseButton class="w-32" :text="'hello world'" :buttonStyle="'secondary'"/>
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store';
import BaseButton from '~/BaseButton/BaseButton.vue';

// import Restaurant from '@/models/Restaurant';
// import RestaurantMenu from '@/models/RestaurantMenu';

export default defineComponent({
  name: 'Home',
  components: {
    BaseButton,
  },
  data() {
    return {
      store: useStore(),
    };
  },

  // computed: {
  //   loading(): boolean {
  //     return this.store.state.loading;
  //   },
  //   restaurant(): Restaurant | null {
  //     return this.store.getters.restaurant ? this.store.getters.restaurant : null;
  //   },
  //   restaurantMenus(): RestaurantMenu[] {
  //     return this.store.getters.menus;
  //   },
  // },
});
</script>
