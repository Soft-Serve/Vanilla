<template>
  <div class="wrapper" v-if="categories.length">
    <BaseWrapper :column="2" class="mt-4">
      <BaseButton
        v-for="category in categories"
        :key="category.id"
        :buttonStyle="BUTTONS_STYLES.WHITE"
        @click="triggerCategoryChange(category)">
        {{ category.name }}
      </BaseButton>
    </BaseWrapper>
    <BaseWrapper>
      <p v-if="loading">LOADING</p>
      <BaseCard v-else v-for="item in items" :key="item.id" :data="item"/>
    </BaseWrapper>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import { BUTTONSTYLES } from '@/helpers';
import useApi from '@/composables/useApi';
// import ApiService from '@/models/ApiService';
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
      fetchCategories, fetchCategory, triggerCategoryChange, menu, categories, items, loading, fetchItem, category, item,
    } = useApi();
    watch(menu, (selectedMenu) => fetchCategories(selectedMenu));

    watch(categories, (selectedCategory) => {
      fetchCategory(menu.value, selectedCategory[0]);
      triggerCategoryChange(selectedCategory[0]);
    });

    watch(items, (selectedItem) => fetchItem(menu.value, category.value, selectedItem[0]));

    // watch(item, (selectedItem) => {
    //   const foo = ApiService.getItemAllergies(menu.value, category.value, selectedItem);
    // });

    return {
      loading,
      categories,
      BUTTONS_STYLES,
      items,
      triggerCategoryChange,
      item,
    };
  },

});
</script>
<style scoped>
.flip-list-move {
  transition: transform 2.8s ease;
}
</style>
