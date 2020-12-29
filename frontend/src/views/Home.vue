<template>
  <SlideOver @toggleAllergyScreen="toggleAllergyScreen" :isScreenVisible="isAllergyScreenVisible"/>
  <div class="wrapper" v-if="categories.collection.length">
    <BaseWrapper :column="3" class="my-4">
      <BaseButton
        v-for="category in categories.collection"
        :key="category.id"
        :buttonStyle="BUTTONSTYLES.WHITE"
        @click="handleCategoryChange(category)"
        >
          {{ category.name }}
      </BaseButton>
      <BaseButton @click="toggleAllergyScreen" :buttonStyle="BUTTONSTYLES.SECONDARY">
        Allergies
      </BaseButton>
    </BaseWrapper>
    <p v-if="isLoading">loading...</p>
    <BaseWrapper v-if="items.filteredCollection.length && !isLoading">
      <BaseCard :dividerStyles="'border-0'" v-for="item in items.filteredCollection" :key="item.id">
        <template #heading>
           <div class="w-full flex justify-start items-end">
            <h3 class=" text-lg font-semibold">{{ item.name}}</h3>
           </div>
        </template>
        <template #addons>
          <div class="w-full flex justify-end items-end" v-if="item.dietaries.length">
            <BaseIcon
              v-for="dietary in item.dietaries"
              :key="dietary.id"
              :name="dietary.allergyNameInLowerCase"
            />
          </div>
        </template>
        <template #body>
          <div class="w-full">
            <span class="italic text-sm">{{ item.description }}</span>
          </div>
        </template>
        <template #footer>
           <div class="flex w-full">
              <BaseButton class="w-min-content" :buttonSize="SIZES.EXTRASMALL">
                <span>-</span>
              </BaseButton>
            <span class="mx-4">
              0
            </span>
              <BaseButton class="w-min-content" :buttonSize="SIZES.EXTRASMALL">
                <span>+</span>
              </BaseButton>
          </div>
        </template>
      </BaseCard>
    </BaseWrapper>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, ref, watch, onUpdated,
} from 'vue';
import { BUTTONSTYLES, SIZES } from '@/helpers';
import useApi from '@/composables/useApi';
import useCounter from '@/composables/useCounter';
import { MutationType } from '@/store/mutations';
import MenuItem from '@/models/MenuItem';
import BaseWrapper from '~/BaseWrapper/BaseWrapper.vue';
import BaseButton from '~/BaseButton/BaseButton.vue';
import BaseIcon from '~/BaseIcon/BaseIcon.vue';
import SlideOver from '~/SlideOver/SlideOver.vue';
import BaseCard from '~/BaseCard/BaseCard.vue';

export default defineComponent({
  name: 'Home',
  components: {
    BaseWrapper,
    BaseButton,
    BaseIcon,
    SlideOver,
    BaseCard,
  },
  setup() {
    const {
      handleCategoryChange,
      categories,
      category,
      store,
      activeDietaries,
      items,
      isLoading,
    } = useApi();

    const { counter, increment, decrement } = useCounter();

    const isAllergyScreenVisible = ref(false);

    const toggleAllergyScreen = () => {
      isAllergyScreenVisible.value = !isAllergyScreenVisible.value;
    };

    onUpdated(() => {
      items.collection.forEach((item: MenuItem) => item.fetchAllergies(item));
    });


    watch(activeDietaries, (selectedDietaries) => {
      const filteredItems = items.filterItemsByDietaries(selectedDietaries);
      store.commit(MutationType.SetLoading, true);
      store.commit(MutationType.SetFilteredMenuItems, filteredItems);
      store.commit(MutationType.SetLoading, false);
    }, { immediate: true, deep: true });

    return {
      categories,
      BUTTONSTYLES,
      items,
      category,
      handleCategoryChange,
      store,
      toggleAllergyScreen,
      isAllergyScreenVisible,
      activeDietaries,
      SIZES,
      counter,
      increment,
      decrement,
      isLoading,
    };
  },

});
</script>
<style scoped>
.flip-list-move {
  transition: transform 2.8s ease;
}

.slide-enter,
.slide-leave-active {
  right: -100%;
}

.slidein {
  max-width: 600px;
  padding: 2em 3em;
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  background: #ddd;
  height: 100%;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in-out;
}

</style>
