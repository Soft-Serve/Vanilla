<template>
  <nav class="toolbar">
    <div
      class="toolbar__container"
    >
      <div class="toolbar__button-container">
        <button
          class="toolbar__button"
          aria-label="Toolbar menu"
          aria-expanded="false"
          @click="toggleToolBarButton"
        >
          <BaseIcon
            v-if="!isToolBarOpen"
            :name="'hamburger'"
            aria-label="Toolbar menu open"
            class="toolbar__icon"
          />
          <BaseIcon
            v-else
            :name="'close'"
            aria-label="Toolbar menu close"
            class="toolbar__icon"
          />
        </button>
      </div>
      <div
        class="toolbar__content toolbar__content--horizontal"
      >
        <slot name="toolBarContent" />
      </div>
    </div>
    <transition
      appear
      name="slide"
    >
      <div
        v-show="isToolBarOpen"
        class="toolbar__content toolbar__content--vertical"
      >
        <slot name="toolBarContent" />
      </div>
    </transition>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseIcon from '~/BaseIcon/BaseIcon.vue';
import './style.css';

export default defineComponent({
  name: 'ToolBar',
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
  data() {
    return {
      viewPortWidth: 0,
      isToolBarOpen: false,
    };
  },
  methods: {
    toggleToolBarButton(): void {
      this.isToolBarOpen = !this.isToolBarOpen;
    },

    handleResize(): void {
      this.viewPortWidth = window.innerWidth;
    },

    destroyed(): void {
      window.removeEventListener('resize', this.handleResize);
    },
  },
  watch: {
    viewPortWidth(viewport: number): void {
      if (viewport <= 539 && this.isToolBarOpen) {
        this.isToolBarOpen = false;
      }
    },
  },
  created(): void {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
});

</script>

<style scoped>
.slide-enter-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
  max-height: 100px;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>
