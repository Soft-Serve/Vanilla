<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store';
import { MutationType } from '@/store/mutations';
import ApiService from '@/models/ApiService';

export default defineComponent({
  name: 'App',
  data() {
    return {
      store: useStore(),
    };
  },
  async mounted() {
    const response = await ApiService.getRestaurant();
    this.store.commit(MutationType.SetLoading, true);
    this.store.commit(MutationType.SetRestaurant, response);
    this.store.commit(MutationType.SetLoading, false);
  },
});
</script>
