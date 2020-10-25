<template>
  <div
    v-html="require(`@/assets/svgs/${name}.svg`)"
    class="inline-block fill-current"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
});
</script>
