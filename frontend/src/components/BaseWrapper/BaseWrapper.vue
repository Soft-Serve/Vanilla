<template>
  <div
    class="grid-wrappper"
    :class="gridStyles"
    >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import './style.css';

export default defineComponent({
  name: 'BaseWrapper',
  props: {
    column: {
      type: Number,
      required: false,
      default: 3,
    },
    gap: {
      type: Number,
      required: false,
      default: 3,
    },
  },
  computed: {
    gridStyles(): string {
      const smallGap = Math.round(this.gap - 1);
      const largeGap = Math.round(this.gap + 1);
      return `
      md:grid-cols-${Math.round(this.column).toString()}
      lg:grid-cols-${Math.round(this.column).toString()}
      xl:grid-cols-${Math.round(this.column).toString()}
      gap-${this.gap.toString()}
      sm:gap-${smallGap.toString()}
      md:gap-${this.gap.toString()}
      lg:gap-${largeGap.toString()}
      xl:gap-${largeGap.toString()}
    `.replace(/ /g, '');
    },
  },
});
</script>
