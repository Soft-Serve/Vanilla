<template>
<div>
  about
</div>
  <!-- <BaseImage :src="'https://picsum.photos/200/300'"/> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import BaseWrapper from '@/components/BaseWrapper/BaseWrapper.vue';
// import BaseButton from '@/components/BaseButton/BaseButton.vue';
// import SlideOver from '@/components/SlideOver/SlideOver.vue';
// import BaseCard from '@/components/BaseCard/BaseCard.vue';
// import BaseImage from '~/BaseImage/BaseImage.vue';
// import { Dish } from '@/interfaces';
// import intersection from '@/utility/intersection';
// import ApiService from '@/models/ApiService';

export default defineComponent({
  name: 'About',
  components: {
    // BaseImage,
    // BaseWrapper,
    // BaseButton,
    // SlideOver,
    // BaseCard,
  },

  methods: {
    // closeSlideOver(payload: boolean) {
    //   this.isVisible = payload;
    // },
    // handleClick() {
    //   this.isVisible = !this.isVisible;
    // },
    // triggerCategoryChange(category: string) {
    //   this.filter = category;
    //   this.toggleSlideLeft();
    // },
    // compareAllergies(dishAllergies: Array<string>, userAllergies: Array<string>): boolean {
    //   if (this.userAllergies.length) {
    //     return intersection(dishAllergies, userAllergies);
    //   }
    //   return false;
    // },
    // filterByAllergies(dishes: Array<Dish>) {
    //   return [...dishes].filter((dish: Dish) => !this.compareAllergies(dish.allergies, this.userAllergies));
    // },
    // toggleSlideLeft() {
    //   this.slideLeft = !this.slideLeft;
    // },
  },
  computed: {
    // slideDirection() {
    //   return this.slideLeft ? 'slide-left' : 'slide-right';
    // },
    // filteredDishesByAllergies(): Array<Dish> {
    //   return this.filterByAllergies(this.dishes);
    // },
    // filteredDishesCategory(): Array<Dish> {
    //   return [...this.dishes].filter((dish) => dish.category === this.filter);
    // },
    // filteredDishesByAllergiesAndCategory(): Array<Dish> {
    //   return this.filterByAllergies(this.filteredDishesCategory);
    // },
    // renderDishes(): Array<Dish> {
    //   if (this.filter && !this.userAllergies) {
    //     return this.filteredDishesCategory;
    //   }
    //   if (this.filter && this.userAllergies) {
    //     return this.filteredDishesByAllergiesAndCategory;
    //   }
    //   if (!this.filter && this.userAllergies) {
    //     return this.filteredDishesByAllergies;
    //   }
    //   return this.dishes;
    // },
    // userAllergies(): Array<string> {
    //   return User.selectedAllergies;
    // },
    // userHasAllergies(): boolean {
    //   return User.hasAllergies;
    // },
  },
});
</script>

<style scoped>
.wrapper {
  max-width: 900px;
  margin: 0 auto;

  @apply w-full px-8;
}

.divider {
  @apply my-4;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-left-enter {
  transform: translateX(100%);
}

.slide-left-leave-to {
  transform: translateX(-100%);
}

.slide-right-enter {
  transform: translateX(-100%);
}

.slide-right-leave-to {
  transform: translateX(100%);
}

</style>
