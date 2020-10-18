<template>
  <div v-if="restaurant">
    <h1>{{ restaurant.name }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store';
import { MutationType } from '@/store/mutations';
import ApiService from '@/models/ApiService';

export default defineComponent({
  name: 'About',
  data() {
    return {
      store: useStore(),
      restaurant: undefined as unknown,
    };
  },
  async mounted() {
    const response = await ApiService.getRestaurant();
    this.store.commit(MutationType.SetRestaurant, response);
    this.restaurant = this.store.getters.restaurant;
  },
});
</script>
