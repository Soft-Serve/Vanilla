<template>
  <div class="wrapper">
    <div class="flex">
        <BaseButton @click="handleAddMenu">
          add Menu
        </BaseButton>
        <BaseInput v-model="name"/>
    </div>
    <p v-if="isLoading">loading..</p>
    <ul v-if="!isLoading">
      <li v-for="(menu) in menus.collection" :key="menu.id">
        {{ menu.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, toRefs,
} from 'vue';
import useApi from '@/composables/useApi';
import { ActionTypes } from '@/store/actions';
import BaseInput from '~/BaseInput/BaseInput.vue';
import BaseButton from '~/BaseButton/BaseButton.vue';

export default defineComponent({
  name: 'About',
  components: {
    BaseInput,
    BaseButton,
  },

  setup() {
    const {
      restaurant, menus, isLoading, store,
    } = useApi();

    const menu = reactive({
      name: '',
      restaurant_id: restaurant.id,
      id: 0,
    });

    const handleAddMenu = () => {
      store.dispatch(ActionTypes.postMenu, JSON.stringify(menu));
      menu.name = '';
    };
    return {
      ...toRefs(menu),
      menu,
      menus,
      isLoading,
      handleAddMenu,
      store,
    };
  },

});
</script>

<style>
.wrapper {
  max-width: 900px;
  margin: 0 auto;

  @apply w-full px-8;
}

.divider {
  @apply my-4;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-left-enter {
  transform: translateX(100%);
}

.slide-left-leave-to {
  transform: translateX(-100%);
}

.slide-right-enter {
  transform: translateX(-100%);
}

.slide-right-leave-to {
  transform: translateX(100%);
}

</style>
