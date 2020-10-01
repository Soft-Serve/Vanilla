<template>
  <div
    class="image"
    @mouseenter="toggleToolTip"
    @mouseleave="toggleToolTip"
  >
    <div
      v-if="dataUrl"
      :style="background ? background : null "
      class="image__placeholder"
    >
      <img
        :src="placeholder || dataUrl"
        v-bind="$attrs"
      >
    </div>
    <img
      v-if="src && !path"
      :class="customStyles"
      :src="dataUrl"
      :alt="$attrs.alt || 'image'"
      v-bind="$attrs"
      class="image__img"
    >
    <AIcon
      v-else
      v-bind="$attrs"
      :class="customStyles"
      :path="path"
      :desc="desc"
      :title="title"
    />
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import './style.css';

@Component({
  name: 'BaseImage',
  inheritAttrs: false,
})
export default class BaseImage extends Vue {
  @Prop({ required: false })
  readonly src!: string;

  @Prop({ required: false })
  readonly background!: string;

  @Prop({ required: false })
  readonly placeholder!: string;

  @Prop({ required: false })
  readonly path!: string;

  @Prop({ required: false, default: 'svg' })
  readonly title!: string;

  @Prop({ required: false, default: 'no description provided' })
  readonly desc!: string;

  isToolTipVisible = false;

  toggleToolTip() {
    this.isToolTipVisible = !this.isToolTipVisible;
  }

  get dataUrl() {
    const { width, height } = this.$attrs;

    if (!width || !height) {
      return '';
    }

    const canvasWidth = 100;
    const canvas = document.createElement('canvas');
    canvas.width = canvasWidth;
    canvas.height = (Number(height) / Number(width)) * canvasWidth;

    return canvas.toDataURL();
  }

  mounted() {
    const { src, srcset, $el } = this as any;
    let timeOut: number | undefined;

    const observer = new IntersectionObserver(([entry]) => {
      const img = $el.querySelector('.image__img') as any;
      const placeholder = $el.querySelector('.image__placeholder');

      if (img) {
        // eslint-disable-next-line func-names
        img.onload = function () {
          delete img.onload;
          $el.classList.add('image--loaded');
          if (placeholder) {
            timeOut = setTimeout(() => {
              placeholder.remove();
            }, 300);
          }
        };
      }

      if (entry.isIntersecting && img) {
        if (srcset) {
          img.srcset = srcset;
        }
        img.src = src;
        observer.disconnect();
      }
    });
    observer.observe($el);

    this.$once('hook:beforeDestroy', () => {
      observer.disconnect();
      if (timeOut) {
        clearTimeout(timeOut);
      }
    });
  }
}
</script>
