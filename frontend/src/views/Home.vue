<template>
  <div class="wrapper" v-if="categories.length">
    <BaseWrapper :column="2" class="mt-4">
      <BaseButton :buttonStyle="styles.WHITE" v-for="category in categories" :key="category.id">
        {{ category.name }}
      </BaseButton>
    </BaseWrapper>
    <div class="card">
      <BaseCard :data="items[0]"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';
import { BUTTONSTYLES } from '@/helpers';
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
    const styles = BUTTONSTYLES;
    const store = useStore();
    const loading = computed(() => store.state.loading);
    const categories = computed(() => store.getters.categories);
    const items = computed(() => store.getters.items);

    return {
      loading,
      categories,
      styles,
      items,
    };
  },

});
</script>

<style scoped>
.card {
  width: 350px;
}
</style>
