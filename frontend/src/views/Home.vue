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
    <p v-if="loading">loading...</p>
    <BaseWrapper v-if="items.filteredCollection.length">
      <AppCard v-for="item in items.filteredCollection" :key="item.id">
        <template #heading>
            {{ item.name}}
        </template>
        <template #addons>
          <div class="flex justify-start" v-if="item.dietaries.length">
            <BaseIcon
              v-for="dietary in item.dietaries"
              :key="dietary.id"
              :name="dietary.allergyNameInLowerCase"
            />
          </div>
        </template>
        <template #body>
            <span class="text-sm">{{ item.description }}</span>
        </template>
        <template #footer>
           <div class="card__actions">
            <span class="card__button-container">
              <BaseButton :buttonSize="SIZES.EXTRASMALL" @click="decrement">
                  <span>-</span>
              </BaseButton>
            </span>
            <span class="card__counter">
              {{ counter }}
            </span>
            <span class="card__button-container">
              <BaseButton :buttonSize="SIZES.EXTRASMALL" @click="increment">
                  <span>+</span>
              </BaseButton>
            </span>
          </div>
        </template>
      </AppCard>
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
import AppCard from '~/AppCard/AppCard.vue';

export default defineComponent({
  name: 'Home',
  components: {
    BaseWrapper,
    BaseButton,
    BaseIcon,
    SlideOver,
    AppCard,
  },
  setup() {
    const {
      handleCategoryChange,
      categories,
      loading,
      category,
      store,
      activeDietaries,
      items,
    } = useApi();

    const { counter, increment, decrement } = useCounter();

    const isAllergyScreenVisible = ref(false);

    const toggleAllergyScreen = () => {
      isAllergyScreenVisible.value = !isAllergyScreenVisible.value;
    };

    onUpdated(() => {
      items.value.collection.forEach((item: MenuItem) => item.fetchAllergies(item));
    });

    watch(activeDietaries, (selectedDietaries) => {
      const filteredItems = items.value.filterItemsByDietaries(selectedDietaries);
      store.commit(MutationType.SetLoading, true);
      store.commit(MutationType.SetFilteredMenuItems, filteredItems);
      store.commit(MutationType.SetLoading, false);
    }, { immediate: true, deep: true });

    return {
      loading,
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

.card {
  @apply flex rounded-lg overflow-hidden shadow-2xl bg-white;
}

.card__image-container {
  @apply flex flex-col justify-center ml-2;
}

.card__button {
  @apply inline-flex items-center px-2.5 py-1.5 border border-transparent bg-red-600
    text-xs leading-4 font-bold rounded-full text-white transition ease-in-out duration-150;
}

.card__button:focus {
  @apply outline-none border-red-700 shadow-outline-red;
}

.card__button:hover {
  @apply bg-red-500;
}

.card__button:active {
  @apply bg-red-700;
}

.card__content {
  @apply flex-1 bg-white p-4 flex flex-col w-full justify-between items-start flex-wrap;
}

.card__title {
  @apply mt-2 leading-7 font-semibold text-gray-900 m-1;
}

.card__description {
  @apply mt-2 leading-3 text-gray-500 text-xs italic;
}

.card__pricing {
  @apply flex w-full justify-between items-center mt-2;
}

.card__price {
  @apply inline-flex w-full text-sm italic;
}

.card__currency {
  @apply text-red-500 mx-1;
}

.card__actions {
  @apply w-full inline-flex justify-end items-center;
}

.card__button-container {
  @apply inline-flex rounded-full shadow-sm mx-2;
}

.card__counter {
  @apply font-bold text-sm;
}

</style>
