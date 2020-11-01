<template>
  <div class="wrapper" v-if="categories.collection.length">
    <BaseWrapper :column="2" class="mt-4">
      <BaseButton
        v-for="category in categories.collection"
        :key="category.id"
        :buttonStyle="BUTTONS_STYLES.WHITE"
        @click="changeCategory(category)">
        {{ category.name }}
      </BaseButton>
    </BaseWrapper>
    <BaseWrapper>
      <p v-if="loading">LOADING</p>
      <BaseCard v-else v-for="item in items.collection" :key="item.id" :data="item"/>
    </BaseWrapper>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import { BUTTONSTYLES } from '@/helpers';
import useApi from '@/composables/useApi';
import BaseWrapper from '~/BaseWrapper/BaseWrapper.vue';
import BaseButton from '~/BaseButton/BaseButton.vue';
import BaseCard from '~/BaseCard/BaseCard.vue';

export default defineComponent({
  name: 'Home',
  components: {
    BaseWrapper,
    BaseButton,
    BaseCard,
  },
  setup() {
    const BUTTONS_STYLES = BUTTONSTYLES;
    const {
      fetchCategories,
      changeCategory,
      menu,
      categories,
      items,
      loading,
      category,
      store,
    } = useApi();

    watch(menu, (watchedMenu) => fetchCategories(watchedMenu));

    watch(items, (watchedItems) => watchedItems.triggerFetchAllergies(menu.value, store.getters.category));

    return {
      loading,
      categories,
      BUTTONS_STYLES,
      items,
      category,
      changeCategory,
      store,
    };
  },

});
</script>
<style scoped>
.flip-list-move {
  transition: transform 2.8s ease;
}
</style>
