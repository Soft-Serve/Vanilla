<template>
<div class="container">
  <div class="wrapper">
    <ToolBar>
    <template v-slot:toolBarContent>
      <div class="w-32 mx-3 xs:my-1 xs:w-full xs:px-4 xs:mt-2">
        <!-- <BaseButton> -->

          <router-link to="/">Home</router-link>
        <!-- </BaseButton> -->
      </div>
      <div class="w-32 mx-3 xs:my-1 xs:w-full xs:px-4 xs:mt-2">
        <!-- <BaseButton> -->
          <router-link to="/about">About</router-link>
        <!-- </BaseButton> -->
      </div>
    </template>
  </ToolBar>
  </div>
</div>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useStore } from '@/store';
import { ActionTypes } from '@/store/actions';
import useApi from '@/composables/useApi';
import ToolBar from '~/ToolBar/ToolBar.vue';
// import BaseButton from '~/BaseButton/BaseButton.vue';

export default defineComponent({
  name: 'App',
  components: {
    ToolBar,
    // BaseButton,
  },
  setup() {
    const store = useStore();
    const { fetchMenu } = useApi();
    onMounted(() => {
      store.dispatch(ActionTypes.getRestaurant, undefined);
      store.dispatch(ActionTypes.getMenus, undefined);
      fetchMenu();
    });
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
