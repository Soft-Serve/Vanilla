<template>
  <span
    role="checkbox"
    :aria-checked="isOn"
    tabindex="0"
    class="toggle"
    :class="isOn ? 'toggle--active' : 'toggle--inactive'"
  >
    <span
      :class="isOn ? 'translate-x-5' : 'translate-x-0'"
      aria-hidden="true"
      class="translate-x-0 relative inline-block h-5 w-5 rounded-full bg-white shadow-md
      transform transition ease-in-out duration-200"
    >

      <span
        :class="isOn ? 'opacity-0 ease-out duration-100' : 'translate-x-0'"
        class="opacity-100 ease-in duration-200 absolute inset-0 h-full w-full flex items-center
        justify-center transition-opacity"
      >
        <FalseSVG
          v-if="!isOn"
          class="toggle__icon toggle__icon--inactive"
        />
      </span>

      <span
        :class="isOn ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100'"
        class="opacity-0 ease-out duration-100 absolute inset-0 h-full w-full flex items-center justify-center
        transition-opacity"
      >
        <TrueSVG class="toggle__icon toggle__icon--active" />
      </span>
    </span>
  </span>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import FalseSVG from '@/assets/svgs/false.svg';
import TrueSVG from '@/assets/svgs/true.svg';
import './style.css';

@Component({
  name: 'BaseToggle',
  components: {
    FalseSVG,
    TrueSVG,
  },

})
export default class BaseToggle extends Vue {
    @Prop({ required: false, default: false })
    readonly isOn!: boolean;
}

</script>
