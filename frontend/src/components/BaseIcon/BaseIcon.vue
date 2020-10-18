<template>
  <div
    v-html="require(`@/assets/svgs/${name}.svg`)"
    class="inline-block fill-current"
    style="height: 1em; width: 1em; vertical-align: -0.125em;"
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
