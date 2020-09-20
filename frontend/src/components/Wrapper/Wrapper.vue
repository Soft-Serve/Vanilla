<template>
  <div :class="`mt-3 grid grid-cols-${column} gap-${column + 1} sm:gap-${column + 1} sm:grid-cols-${column} lg:grid-cols-${column + 1}`">
    <slot />
  </div>
</template>>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'Wrapper',

})
export default class Wrapper extends Vue {
  @Prop({ required: false, default: 3 })
  readonly column!: number;
}
</script>
