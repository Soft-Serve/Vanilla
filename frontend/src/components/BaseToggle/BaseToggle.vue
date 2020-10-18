<template>
  <span
    role="checkbox"
    :aria-checked="isOn"
    tabindex="0"
    class="toggle"
    :class="isOn ? 'toggle--active' : 'toggle--inactive'"
  >
    <span
      :class="isOn ? 'translate-x-5' : 'translate-x-0'"
      aria-hidden="true"
      class="translate-x-0 relative inline-block h-5 w-5 rounded-full bg-white shadow-md
      transform transition ease-in-out duration-200"
    >

      <span
        :class="isOn ? 'opacity-0 ease-out duration-100' : 'translate-x-0'"
        class="opacity-100 ease-in duration-200 absolute inset-0 h-full w-full flex items-center
        justify-center transition-opacity"
      >
        <BaseIcon
          :name="'false'"
          v-if="!isOn"
          class="toggle__icon toggle__icon--inactive"
        />
      </span>

      <span
        :class="isOn ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100'"
        class="opacity-0 ease-out duration-100 absolute inset-0 h-full w-full flex items-center justify-center
        transition-opacity"
      >
        <BaseIcon
          :name="'true'"
          class="toggle__icon toggle__icon--active"
        />
      </span>
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseIcon from '~/BaseIcon/BaseIcon.vue';
import './style.css';

export default defineComponent({
  name: 'BaseToggle',
  props: {
    isOn: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  components: {
    BaseIcon,
  },
});


</script>
