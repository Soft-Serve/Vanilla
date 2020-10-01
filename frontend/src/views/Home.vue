<template>
  <div>
    <SlideOver
      :are-filters-visibile="isVisible"
      @closeSlideOver="closeSlideOver"
    />
    <div class="divider flex justify-center w-full">
      <BaseButton
        class="inline-flex w-40"
        @click="handleClick"
      >
        <template>
          <span
            class="block border border-red-400 rounded-lg justify-center items-center w-full h-full p-5 font-bold text-red-500
          max-w-10 hover:text-white hover:bg-red-400 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
          >
            Allergy Filters
          </span>
        </template>
      </BaseButton>
    </div>
    <div class="divider">
      <Wrapper class="wrapper">
        <BaseButton
          v-for="(category, index) in categories"
          :key="index"
          v-model="filter"
          @click="filter = category"
        >
          <template>
            <span
              class="block w-full h-full p-3 rounded-md font-bold text-cool-gray-700 border
            hover:bg-red-500 focus:outline-none focus:border-red-700 hover:text-white
            focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150 text-xs"
            >
              {{ category }}
            </span>
          </template>
        </BaseButton>
      </Wrapper>
    </div>
    <div class="divider">
      <Wrapper
        :column="1"
        class="wrapper"
      >
        <BaseCard
          v-for="(dish, index) in renderDishes"
          :key="index"
          :dish="dish"
        />
      </Wrapper>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Wrapper from '@/components/Wrapper/Wrapper.vue';
import BaseButton from '@/components/BaseButton/BaseButton.vue';
import SlideOver from '@/components/SlideOver/SlideOver.vue';
import BaseCard from '@/components/BaseCard/BaseCard.vue';
import User from '@/store/modules/User';
import { Dish } from '@/interfaces';
import intersection from '@/utility/intersection';

@Component({
  components: {
    Wrapper,
    BaseButton,
    SlideOver,
    BaseCard,
  },
})
export default class Home extends Vue {
  isVisible = false;

  closeSlideOver(payload: boolean) {
    this.isVisible = payload;
  }

  handleClick() {
    this.isVisible = !this.isVisible;
  }

  filter = ''

  categories = [
    'wines',
    'appetizer',
    'entrees',
    'beers',
    'pizza',
    'pasta',
    'sodas',
    'desserts',
    'sides',
  ]

  dishes = [
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
  ]

  compareAllergies(dishAllergies: Array<string>, userAllergies: Array<string>): boolean {
    if (this.userAllergies.length) {
      return intersection(dishAllergies, userAllergies);
    }
    return false;
  }

  filterByAllergies(dishes: Array<Dish>) {
    return [...dishes].filter((dish: Dish) => !this.compareAllergies(dish.allergies, this.userAllergies));
  }

  filterByCategory(): Array<Dish> {
    return [...this.dishes].filter((dish) => dish.category === this.filter);
  }

  get filteredDishesByAllergies(): Array<Dish> {
    return this.filterByAllergies(this.dishes);
  }

  get filteredDishesCategory(): Array<Dish> {
    return this.filterByCategory();
  }

  get filteredDishesByAllergiesAndCategory(): Array<Dish> {
    return this.filterByAllergies(this.filteredDishesCategory);
  }

  get renderDishes(): Array<Dish> {
    if (this.filter && !this.userAllergies) {
      return this.filteredDishesCategory;
    }
    if (this.filter && this.userAllergies) {
      return this.filteredDishesByAllergiesAndCategory;
    }
    if (!this.filter && this.userAllergies) {
      return this.filteredDishesByAllergies;
    }
    return this.dishes;
  }

  get userAllergies(): Array<string> {
    return User.selectedAllergies;
  }

  get userHasAllergies(): boolean {
    return User.hasAllergies;
  }
}
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
</style>
