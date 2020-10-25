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
          <transition mode="out-in" name="no-mode-fade">
            <BaseIcon
              key="on"
              v-if="!isToolBarOpen"
              :name="'hamburger'"
              aria-label="Toolbar menu open"
              class="toolbar__icon"
            />
            <BaseIcon
              key="off"
              v-else
              :name="'close'"
              aria-label="Toolbar menu close"
              class="toolbar__icon"
            />
          </transition>
        </button>
      </div>
      <div
        class="toolbar__content toolbar__content--horizontal"
      >
        <slot name="toolBarContent" />
      </div>
    </div>
    <transition name="slide-fade">
      <div
        v-if="isToolBarOpen"
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
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.no-mode-fade-enter-active,
.no-mode-fade-leave-active {
  transition: opacity 0.2s
}

.no-mode-fade-enter-from,
.no-mode-fade-leave-to {
  opacity: 0
}
</style>
