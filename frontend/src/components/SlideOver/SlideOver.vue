<template>
  <transition
    enter-active-class="transform transition ease-in-out duration-500 sm:duration-700"
    enter-class="translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transform transition ease-in-out duration-500 sm:duration-700"
    leave-class="translate-x-0"
    leave-to-class="translate-x-full"
  >
    <div v-if="isScreenVisible" class="fixed inset-0 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <section class="absolute inset-y-0 right-0 pl-10 max-w-full flex">
          <div class="w-screen max-w-md h-full">
            <div class="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl">
              <div class="h-0 flex-1 py-6 space-y-6 overflow-y-scroll">
                <header class="px-4 sm:px-6">
                  <div class="flex items-start justify-center space-x-3">
                    <h2 class="text-lg leading-7 font-medium text-gray-900 text-center">
                      Allergies
                    </h2>
                    <div class="h-7 flex items-center">
                      <BaseButton
                        aria-label="Close panel"
                        class="text-gray-400 hover:text-gray-500
                        transition ease-in-out duration-150"
                        @click="toggleAllergyScreen"
                      >
                        <BaseIcon
                          :name="'close'"
                          aria-label="SideOver close"
                          class="text-white block h-6 w-6"
                        />
                      </BaseButton>
                    </div>
                  </div>
                </header>
                <div v-if="dietaries.collection.length" class="relative flex-1 px-4 sm:px-6 max-w-10 my-0 mx-auto">
                  <BaseWrapper :column="2">
                    <span
                      v-for="dietary in dietaries.collection"
                      :key="dietary.id"
                      class="flex justify-between border border-cool-gray-300 px-2 py-1 items-center rounded-lg cursor-pointer shadow-lg"
                      @click="dietary.toggleActiveState()"
                    >
                      <BaseIcon :name="dietary.allergyNameInLowerCase"/>
                      {{ dietary.name }}
                      <BaseToggle :is-on="dietary.isActive" />
                    </span>
                  </BaseWrapper>
                </div>
                <div class="flex-shrink-0 px-4 py-4 space-x-4 flex justify-center">
                  <span class="inline-flex rounded-md shadow-sm">
                    <BaseButton
                       @click="toggleAllergyScreen"
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
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseButton from '@/components/BaseButton/BaseButton.vue';
import BaseToggle from '@/components/BaseToggle/BaseToggle.vue';
import BaseWrapper from '@/components/BaseWrapper/BaseWrapper.vue';
import useApi from '@/composables/useApi';
import BaseIcon from '~/BaseIcon/BaseIcon.vue';

export default defineComponent({
  name: 'SlideOver',
  props: {
    isScreenVisible: {
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

  setup(props, { emit }) {
    const { dietaries } = useApi();

    const toggleAllergyScreen = (): void => {
      emit('toggle-allergy-screen');
    };

    return {
      toggleAllergyScreen,
      dietaries,
    };
  },
});

</script>
