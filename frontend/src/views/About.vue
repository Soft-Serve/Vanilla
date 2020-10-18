<template>
  <div>
    <h1>{{restaurant.name}}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store';
import { MutationType } from '@/store/mutations';

export default defineComponent({
  name: 'About',
  data() {
    return {
      restaurant: undefined as unknown,
      store: useStore(),
    };
  },

  mounted() {
    this.store.commit(MutationType.SetLoading, true);
    this.restaurant = this.store.getters.restaurant;
    this.store.commit(MutationType.SetLoading, false);
  },
});
</script>
