<template>
<SlideOver @toggleAllergyScreen="toggleAllergyScreen" :isScreenVisible="isAllergyScreenVisible"/>
  <div class="wrapper" v-if="categories.collection.length">
    <BaseWrapper :column="3" class="my-4">
      <BaseButton
        v-for="category in categories.collection"
        :key="category.id"
        :buttonStyle="BUTTONS_STYLES.WHITE"
        @click="changeCategory(category)">
        {{ category.name }}
      </BaseButton>
      <BaseButton @click="toggleAllergyScreen" :buttonStyle="BUTTONS_STYLES.SECONDARY">
        Allergies
      </BaseButton>
    </BaseWrapper>
    <BaseWrapper>
      <BaseCard v-for="item in items.collection" :key="item.id" :data="item"/>
    </BaseWrapper>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { BUTTONSTYLES } from '@/helpers';
import useApi from '@/composables/useApi';
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
    const BUTTONS_STYLES = BUTTONSTYLES;
    const {
      // fetchCategories,
      // changeCategory,
      // menu,
      categories,
      items,
      loading,
      category,
      store,
    } = useApi();


    const isAllergyScreenVisible = ref(false);

    const toggleAllergyScreen = () => {
      isAllergyScreenVisible.value = !isAllergyScreenVisible.value;
    };
    return {
      loading,
      categories,
      BUTTONS_STYLES,
      items,
      category,
      // changeCategory,
      store,
      toggleAllergyScreen,
      isAllergyScreenVisible,
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
