<template>
  <button
    class="button"
    :class="[`button--${buttonStyle}`, `button--${buttonSize}`, {'button--disabled': isDisabled}]" >
    <slot>
      {{ text }}
    </slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import './style.css';
import { SIZES, BUTTONSTYLES } from '@/helpers';

export default defineComponent({
  name: 'BaseButton',
  props: {
    text: {
      type: String,
      required: false,
      default: 'click me',
    },
    buttonSize: {
      type: String,
      required: false,
      default: () => SIZES.MEDIUM,
    },
    buttonStyle: {
      type: String,
      required: false,
      default: () => BUTTONSTYLES.PRIMARY,
    },
  },
  data() {
    return {
      isDisabled: false,
    };
  },
  mounted(): void {
    if (this.$el.getAttribute('disabled')) {
      this.isDisabled = true;
    }
  },
});
</script>
