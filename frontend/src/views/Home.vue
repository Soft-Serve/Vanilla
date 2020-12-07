<template>
  <SlideOver @toggleAllergyScreen="toggleAllergyScreen" :isScreenVisible="isAllergyScreenVisible"/>
  <div class="wrapper" v-if="categories.collection.length">
    <BaseWrapper :column="3" class="my-4">
      <BaseButton
        v-for="category in categories.collection"
        :key="category.id"
        :buttonStyle="BUTTONSTYLES.WHITE"
        @click="handleCategoryChange(category)">
        {{ category.name }}
      </BaseButton>
      <BaseButton @click="toggleAllergyScreen" :buttonStyle="BUTTONSTYLES.SECONDARY">
        Allergies
      </BaseButton>
    </BaseWrapper>
    <p v-if="loading">loading...</p>
    <BaseWrapper v-else>
      <BaseCard v-for="item in items.collection " :key="item.id" :data="item"/>
    </BaseWrapper>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, ref, watch,
} from 'vue';
import { BUTTONSTYLES } from '@/helpers';
import useApi from '@/composables/useApi';
// import { MutationType } from '@/store/mutations';
import BaseWrapper from '~/BaseWrapper/BaseWrapper.vue';
import BaseButton from '~/BaseButton/BaseButton.vue';
import BaseCard from '~/BaseCard/BaseCard.vue';
import SlideOver from '~/SlideOver/SlideOver.vue';

export default defineComponent({
  name: 'Home',
  components: {
    BaseWrapper,
    BaseButton,
    BaseCard,
    SlideOver,
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

    const isAllergyScreenVisible = ref(false);

    const toggleAllergyScreen = () => {
      isAllergyScreenVisible.value = !isAllergyScreenVisible.value;
    };



    watch(activeDietaries, (selectedDietaries) => {
      console.log(selectedDietaries);
    }, { deep: true });

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
