<template>
  <div class="container">
    <div class="wrapper">
      <ToolBar>
        <template v-slot:toolBarContent>
          <div class="w-32 mx-3 xs:my-1 xs:w-full xs:px-4 xs:mt-2">
            <router-link to="/">Home</router-link>
          </div>
          <div class="w-32 mx-3 xs:my-1 xs:w-full xs:px-4 xs:mt-2">
            <router-link to="/about">About</router-link>
          </div>
        </template>
      </ToolBar>
    </div>
  </div>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import useApi from '@/composables/useApi';
import ToolBar from '~/ToolBar/ToolBar.vue';

export default defineComponent({
  name: 'App',
  components: {
    ToolBar,
  },

  setup() {
    const { populateStore } = useApi();
    onMounted(() => {
      populateStore();
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
