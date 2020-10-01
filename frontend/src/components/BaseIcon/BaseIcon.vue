<template>
  <svg
    :class="customStyles"
    fill="currentColor"
    :dir="dir"
    viewBox="0 0 24 24"
    preserveAspectRatio="xMinYMax"
  >
    <title>{{ title }}</title>
    <desc>{{ desc }}</desc>
    <path :d="path" />
  </svg>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'BaseImage',
})
export default class BaseImage extends Vue {
  @Prop({ required: true })
  readonly path!: string;

  @Prop({ required: false, default: 'svg' })
  readonly title!: string;

  @Prop({ required: false, default: 'no description provided' })
  readonly desc!: string;
}
</script>
