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
import { ActionTypes } from './store/actions';

export default defineComponent({
  name: 'App',
  data() {
    return {
      store: useStore(),
    };
  },
  computed: {
    loading(): boolean {
      return this.store.state.loading;
    },
  },
  mounted() {
    this.store.dispatch(ActionTypes.getRestaurant, undefined);
  },
});
</script>
