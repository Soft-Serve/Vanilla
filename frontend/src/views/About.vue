<template>
<button @click="toggleIsShowing">
  open modal
</button>
<div v-if="isShowing">
  <Modal :toggleIsShowing="toggleIsShowing" :title="'Upload a dish'"/>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useToggle from '@/composables/useToggle';
import Modal from '~/Modal/Modal.vue';

export default defineComponent({
  name: 'About',
  components: {
    Modal,
  },
  setup() {
    const { isShowing, toggleIsShowing } = useToggle();
    return {
      isShowing,
      toggleIsShowing,
    };
  },

});
</script>

<style scoped>
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
