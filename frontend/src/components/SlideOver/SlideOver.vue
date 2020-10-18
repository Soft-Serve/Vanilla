<template>
  <transition
    enter-active-class="transform transition ease-in-out duration-500 sm:duration-700"
    enter-class="translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transform transition ease-in-out duration-500 sm:duration-700"
    leave-class="translate-x-0"
    leave-to-class="translate-x-full"
  >
    <div
      v-if="areFiltersVisibile"
      class="slide-over"
    >
      <section class="slide-over__container">
        <div class="w-screen max-w-md">
          <div class="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl">
            <div class="h-0 flex-1 py-6 space-y-6 overflow-y-scroll">
              <header class="px-4 sm:px-6">
                <div class="flex items-start justify-evenly space-x-3">
                  <h2 class="text-lg leading-7 font-medium text-gray-900 text-center">
                    Allergies
                  </h2>
                  <div class="h-7 flex items-center">
                    <BaseButton
                      aria-label="Close panel"
                      class="text-gray-400 hover:text-gray-500
                      transition ease-in-out duration-150"
                      @click="closeSlideOver"
                    >
                      <svg
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </BaseButton>
                  </div>
                </div>
              </header>
              <div class="relative flex-1 px-4 sm:px-6 max-w-10 my-0 mx-auto">
                <BaseWrapper :column="1">
                  <span
                    v-for="(allergy, index) in allergies"
                    :key="index"
                    class="flex justify-between border border-cool-gray-300 px-2 py-1 items-center rounded-lg cursor-pointer shadow-lg"
                    @click="toggleFilter(index)"
                  >
                    <BaseIcon :name="allergy.label"/>
                    {{ allergy.label }}
                    <BaseToggle :is-on="allergy.isOn" />
                  </span>
                </BaseWrapper>
              </div>
              <div class="flex-shrink-0 px-4 py-4 space-x-4 flex justify-end">
                <span class="inline-flex rounded-md shadow-sm">
                  <BaseButton
                    type="BaseButton"
                    class="py-2 px-4 border border-gray-300 rounded-md
                  text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300
                  focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
                  >
                    Cancel
                  </BaseButton>
                </span>
                <span class="inline-flex rounded-md shadow-sm">
                  <BaseButton
                    type="submit"
                    class="inline-flex justify-center py-2 px-4 border border-transparent
                      text-sm leading-5 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none
                    focus:border-indigo-700 focus:shadow-outline-red active:bg-red-700 transition duration-150 ease-in-out"
                  >
                    Save
                  </BaseButton>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseButton from '@/components/BaseButton/BaseButton.vue';
import BaseToggle from '@/components/BaseToggle/BaseToggle.vue';
import BaseWrapper from '@/components/BaseWrapper/BaseWrapper.vue';
import BaseIcon from '~/BaseIcon/BaseIcon.vue';

export default defineComponent({
  name: 'SlideOver',
  props: {
    areFiltersVisibile: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  components: {
    BaseButton,
    BaseToggle,
    BaseWrapper,
    BaseIcon,
  },
  data() {
    return {
      isOn: false,
      allergies: [
        {
          label: 'soy',
          isOn: false,
        },
        {
          label: 'meat',
          isOn: false,
        },
        {
          label: 'gluten',
          isOn: false,
        },
        {
          label: 'nuts',
          isOn: false,
        },
        {
          label: 'dairy',
          isOn: false,
        },
        {
          label: 'shellfish',
          isOn: false,
        },
      ],
    };
  },
  methods: {
    closeSlideOver(): void {
      this.$emit('close-side-over', false);
    },

    toggleFilter(index: number): void {
      this.allergies[index].isOn = !this.allergies[index].isOn;
    },
  },
});

</script>

<style scoped>
.slide-over {
  @apply inset-0 overflow-hidden absolute;
}

</style>
