<template>
  <label
    :for="forLabel"
    :class="[
      inputHasLabel ? 'input__label' : 'input__label--not-visible'
    ]"
  >
    <slot name="inputLabel">
      {{ type }}
    </slot>
  </label>
  <div
    class="input__container"
  >
    <input
      v-bind="$attrs"
      :value="modelValue"
      :type="inputType"
      :class="customStyles"
      @input="$emit('update:modelValue', $event.target.value)"
      class="form-input input"
    >
    <div
      v-if="isInputPassword"
      class="input__addon-container"

    >
      <BaseIcon
        :name="toggleEyeSvgIcon"
        class="input__addon input__addon--default input__addon--clickable"
        fill="currentColor"
        view-box="0 0 20 20"
        @click="togglePasswordVisibility"
      />
    </div>
    <div
      v-if="(!isInputPassword) || hasSibling"
      class="input__addon-container"
    >
      <slot name="inputAddOn" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, ref, onUpdated, onMounted, computed,
} from 'vue';
import { INPUTTYPES, EYESVGVARIANTS } from '@/helpers';
import BaseIcon from '~/BaseIcon/BaseIcon.vue';
import './style.css';

export default defineComponent({
  name: 'BaseInput',
  inheritAttrs: false,
  components: {
    BaseIcon,
  },
  props: {
    type: {
      type: String,
      default: INPUTTYPES.TEXT,
    },
    modelValue: {
      type: [String, Number],
    },
    customStyles: {
      type: String,
    },
    forLabel: {
      type: String,
    },
  },

  setup(props, { attrs, slots }) {
    const isPasswordVisible = ref(false);
    const hasSibling = ref(false);
    const isUpdated = ref(false);


    onUpdated(() => {
      isUpdated.value = true;
    });

    onMounted(() => {
      if (attrs.sibling) {
        hasSibling.value = true;
      }
    });

    const paddingForAddon = computed(() => {
      if (isUpdated.value) {
        const addOn = document.querySelector('.button--customWidth') as HTMLElement;
        return {
          '--slot-addon': addOn ? `${addOn.offsetWidth + 12}px` : null,
        };
      }
      return null;
    });

    const isInputPassword = computed(() => !!(props.type === INPUTTYPES.PASSWORD));

    const inputType = computed(() => {
      if (props.type === INPUTTYPES.PASSWORD) {
        return isPasswordVisible.value ? INPUTTYPES.TEXT : INPUTTYPES.PASSWORD;
      }
      return props.type;
    });

    const toggleEyeSvgIcon = computed(() => (isPasswordVisible.value ? EYESVGVARIANTS.EYEOFF : EYESVGVARIANTS.EYE));

    const inputHasIcon = computed(() => !!slots.inputAddOn);

    const inputHasLabel = computed(() => !!slots.inputLabel);

    const togglePasswordVisibility = () => {
      isPasswordVisible.value = !isPasswordVisible.value;
    };

    return {
      INPUTTYPES,
      EYESVGVARIANTS,
      isPasswordVisible,
      paddingForAddon,
      isInputPassword,
      inputType,
      toggleEyeSvgIcon,
      inputHasIcon,
      inputHasLabel,
      togglePasswordVisibility,
      hasSibling,
    };
  },
});
</script>
