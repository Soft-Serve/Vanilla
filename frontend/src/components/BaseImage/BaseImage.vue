<template>
  <div
    class="image"
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
      v-if="src"
      :src="dataUrl"
      :alt="$attrs.alt || 'image'"
      v-bind="$attrs"
      class="image__img"
    >
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import mitt from 'mitt';
import './style.css';

export default defineComponent({
  name: 'BaseImage',
  inheritAttrs: false,
  props: {
    src: {
      type: String,
      required: true,
    },
    background: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
  },
  computed: {
    dataUrl() {
      const { width, height } = this.$attrs;

      if (!width || !height) {
        return null;
      }

      const canvasWidth = 100;
      const canvas = document.createElement('canvas');
      canvas.width = canvasWidth;
      canvas.height = (Number(height) / Number(width)) * canvasWidth;

      return canvas.toDataURL();
    },
  },
  mounted() {
    const { src, srcset, $el } = this as any;

    let timeOut: number | undefined;

    const emitter = mitt();
    const observer = new IntersectionObserver(([entry]) => {
      const img = $el.querySelector('.image__img') as any;
      const placeholder = $el.querySelector('.image__placeholder');

      if (img) {
        img.onload = () => {
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

    emitter.on('hook:beforeDestroy', () => {
      observer.disconnect();
      if (timeOut) {
        clearTimeout(timeOut);
      }
    });
  },
});

</script>
