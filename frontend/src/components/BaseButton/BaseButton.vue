<template>
  <button
    class="button"
  >
    <slot>
      <span
        class="button--default"
      >
        {{ text  }}
      </span>
    </slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import './style.css';

export default defineComponent({
  name: 'BaseButton',
  props: {
    text: {
      type: String,
      required: false,
      default: 'click me',
    },
  },
});
</script>
