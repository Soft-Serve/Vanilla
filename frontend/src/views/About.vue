<template>
  <BaseImage :src="'https://picsum.photos/200/300'"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import BaseWrapper from '@/components/BaseWrapper/BaseWrapper.vue';
// import BaseButton from '@/components/BaseButton/BaseButton.vue';
// import SlideOver from '@/components/SlideOver/SlideOver.vue';
// import BaseCard from '@/components/BaseCard/BaseCard.vue';
import BaseImage from '~/BaseImage/BaseImage.vue';
// import { Dish } from '@/interfaces';
// import intersection from '@/utility/intersection';
// import ApiService from '@/models/ApiService';

export default defineComponent({
  name: 'About',
  components: {
    BaseImage,
    // BaseWrapper,
    // BaseButton,
    // SlideOver,
    // BaseCard,
  },
  data() {
    return {
      slideLeft: false,
      isVisible: false,
      categories: ['wines', 'appetizer', 'entrees', 'beers', 'pizza', 'pasta', 'sodas', 'desserts', 'sides'],
      filter: '',
      dishes: [
        {
          name: 'margarita',
          category: 'pizza',
          image: 'https://s2.eestatic.com/2018/11/03/cocinillas/Cocinillas_350480320_116619118_1706x960.jpg',
          description: 'a freaking basic pizza',
          price: 12.50,
          allergies: ['gluten', 'soy'],
        },
        {
          name: 'fettucini',
          category: 'pasta',
          image: 'https://s2.eestatic.com/2018/11/03/cocinillas/Cocinillas_350480320_116619118_1706x960.jpg',
          description: 'a freaking basic pizza',
          price: 12.50,
          allergies: ['dairy'],

        },
        {
          name: 'Diavola',
          category: 'pizza',
          image: 'https://s2.eestatic.com/2018/11/03/cocinillas/Cocinillas_350480320_116619118_1706x960.jpg',
          description: 'a freaking basic pizza',
          price: 12.50,
          allergies: ['gluten', 'dairy', 'soy'],
        },
        {
          name: 'House Red',
          category: 'wine',
          image: 'https://s2.eestatic.com/2018/11/03/cocinillas/Cocinillas_350480320_116619118_1706x960.jpg',
          description: 'a freaking basic pizza',
          price: 12.50,
          allergies: ['nuts', 'meat'],

        },
        {
          name: 'House White',
          category: 'wine',
          image: 'https://s2.eestatic.com/2018/11/03/cocinillas/Cocinillas_350480320_116619118_1706x960.jpg',
          description: 'a freaking basic pizza',
          price: 12.50,
          allergies: ['nuts'],

        },
        {
          name: 'Budweiser',
          category: 'beers',
          image: 'https://s2.eestatic.com/2018/11/03/cocinillas/Cocinillas_350480320_116619118_1706x960.jpg',
          description: 'a freaking basic pizza',
          price: 12.50,
          allergies: ['nuts'],

        },
        {
          name: 'Bud Light',
          category: 'beers',
          image: 'https://s2.eestatic.com/2018/11/03/cocinillas/Cocinillas_350480320_116619118_1706x960.jpg',
          description: 'a freaking basic pizza',
          price: 12.50,
          allergies: ['nuts'],

        },
        {
          name: 'ceaser salad',
          category: 'appetizers',
          image: 'https://s2.eestatic.com/2018/11/03/cocinillas/Cocinillas_350480320_116619118_1706x960.jpg',
          description: 'a freaking basic pizza',
          price: 12.50,
          allergies: ['dairy', 'nuts'],

        },
        {
          name: 'green salad',
          category: 'appetizers',
          image: 'https://s2.eestatic.com/2018/11/03/cocinillas/Cocinillas_350480320_116619118_1706x960.jpg',
          description: 'a freaking basic pizza',
          price: 12.50,
          allergies: ['nuts'],

        },
        {
          name: 'lasagna',
          category: 'entrees',
          image: 'https://s2.eestatic.com/2018/11/03/cocinillas/Cocinillas_350480320_116619118_1706x960.jpg',
          price: 12.3,
          description: 'a freaking basic pizza',
          allergies: ['gluten', 'dairy', 'soy'],

        },
        {
          name: 'bistecca',
          category: 'entrees',
          image: 'https://s2.eestatic.com/2018/11/03/cocinillas/Cocinillas_350480320_116619118_1706x960.jpg',
          description: 'a freaking basic pizza',
          price: 12.50,
          allergies: ['gluten', 'dairy', 'soy'],

        },
        {
          name: 'coca cola',
          category: 'sodas',
          image: 'https://s2.eestatic.com/2018/11/03/cocinillas/Cocinillas_350480320_116619118_1706x960.jpg',
          description: 'a freaking basic pizza',
          price: 12.50,
          allergies: ['soy'],

        },
        {
          name: 'Pellegrino',
          category: 'sodas',
          image: 'https://s2.eestatic.com/2018/11/03/cocinillas/Cocinillas_350480320_116619118_1706x960.jpg',
          description: 'a freaking basic pizza',
          price: 12.50,
          allergies: ['soy'],

        },
        {
          name: 'fanta',
          category: 'sodas',
          image: 'https://s2.eestatic.com/2018/11/03/cocinillas/Cocinillas_350480320_116619118_1706x960.jpg',
          description: 'a freaking basic pizza',
          price: 12.50,
          allergies: ['soy'],

        },
      ],

    };
  },
  methods: {
    closeSlideOver(payload: boolean) {
      this.isVisible = payload;
    },
    handleClick() {
      this.isVisible = !this.isVisible;
    },
    triggerCategoryChange(category: string) {
      this.filter = category;
      this.toggleSlideLeft();
    },
    // compareAllergies(dishAllergies: Array<string>, userAllergies: Array<string>): boolean {
    //   if (this.userAllergies.length) {
    //     return intersection(dishAllergies, userAllergies);
    //   }
    //   return false;
    // },
    // filterByAllergies(dishes: Array<Dish>) {
    //   return [...dishes].filter((dish: Dish) => !this.compareAllergies(dish.allergies, this.userAllergies));
    // },
    toggleSlideLeft() {
      this.slideLeft = !this.slideLeft;
    },
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
