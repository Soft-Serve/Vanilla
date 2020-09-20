<template>
  <span
    role="checkbox"
    :aria-checked="isOn"
    tabindex="0"
    class="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full
                    cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline-red"
    :class="isOn ? 'bg-red-400' : 'bg-cool-gray-400'"
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
        <svg
          v-if="!isOn"
          class="h-3 w-3 text-gray-400"
          fill="none"
          viewBox="0 0 12 12"
        >
          <path
            d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>

      <span
        :class="isOn ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100'"

        class="opacity-0 ease-out duration-100 absolute inset-0 h-full w-full flex items-center justify-center
                      transition-opacity"
      >
        <svg
          class="h-3 w-3 text-red-600"
          fill="currentColor"
          viewBox="0 0 12 12"
        >
          <path
            d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1
                          1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
          />
        </svg>
      </span>
    </span>
  </span>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'BaseToggle',

})
export default class BaseToggle extends Vue {
    @Prop({ required: false, default: false })
    readonly isOn!: boolean;
}

</script>
