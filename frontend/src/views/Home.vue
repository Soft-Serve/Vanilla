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
            class="button--primary md:py-4 md:text-lg md:px-10"
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
          @click="triggerCategoryChange(category)"
        >
          <template>
            <span
              class="button--naked"
            >
              {{ category }}
            </span>
          </template>
        </BaseButton>
      </Wrapper>
    </div>
    <div class="divider">
      <transition :name="slideDirection">
        <Wrapper
          :column="1"
          class="wrapper"
        >
          <template>
            <BaseCard
              v-for="(dish, index) in renderDishes"
              :key="index"
              :dish="dish"
            />
          </template>
        </Wrapper>
      </transition>
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
import ApiService from '@/models/ApiService';

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

  get slideDirection() {
    return this.slideLeft ? 'slide-left' : 'slide-right';
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

  slideLeft = false;

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

  triggerCategoryChange(category: string) {
    this.filter = category;
    this.toggleSlideLeft();
  }

  compareAllergies(dishAllergies: Array<string>, userAllergies: Array<string>): boolean {
    if (this.userAllergies.length) {
      return intersection(dishAllergies, userAllergies);
    }
    return false;
  }

  filterByAllergies(dishes: Array<Dish>) {
    return [...dishes].filter((dish: Dish) => !this.compareAllergies(dish.allergies, this.userAllergies));
  }

  toggleSlideLeft() {
    this.slideLeft = !this.slideLeft;
  }


  get filteredDishesByAllergies(): Array<Dish> {
    return this.filterByAllergies(this.dishes);
  }

  get filteredDishesCategory(): Array<Dish> {
    return [...this.dishes].filter((dish) => dish.category === this.filter);
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

  async mounted(): Promise<void> {
    const response = await ApiService.getRestaurant();
    console.log(response);
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
