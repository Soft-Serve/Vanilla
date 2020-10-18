<template>
  <div v-if="restaurant">
    <h1>{{ restaurant }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store';

export default defineComponent({
  name: 'Home',
  data() {
    return {
      restaurant: undefined as unknown,
      store: useStore(),
    };
  },
  computed: {
    loading(): boolean {
      return this.store.state.loading;
    },
  },
  mounted() {
    this.restaurant = this.store.getters.restaurant;
  },
});
</script>
