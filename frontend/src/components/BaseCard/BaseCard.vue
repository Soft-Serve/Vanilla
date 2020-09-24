<template>
  <div
    v-if="dish"
    class="flex rounded-lg overflow-hidden shadow-2xl bg-white"
  >
    <div
      v-if="dish.image"
      class="flex flex-col justify-center ml-2"
    >
      <AppImage
        class="inline-block h-20 w-20 rounded-full"
        :src="dish.image"
      />
    </div>
    <div class="flex-1 bg-white p-4 flex flex-col">
      <div class="flex w-full justify-between items-center flex-wrap">
        <h3 class="mt-2 text-md leading-7 font-semibold text-gray-900 m-1">
          {{ dish.name }}
        </h3>
        <div v-if="dish.allergies">
          <component
            :is="`${allergy}SVG`"
            v-for="(allergy, index) in dish.allergies"
            :key="index"
            class="inline-block"
          />
        </div>
      </div>
      <p class="mt-2 leading-3 text-gray-500 text-xs italic">
        {{ dish.description }}
      </p>
      <div class="flex w-full justify-between items-center mt-2">
        <span class="inline-flex w-full text-sm italic">
          <span class="text-red-500 mx-1">$</span>
          {{ counter > 0 ? dish.price * counter : dish.price }}
        </span>
        <div class="w-full inline-flex justify-end items-center">
          <span class="inline-flex rounded-full shadow-sm mx-2">
            <button
              type="button"
              class="inline-flex items-center px-2.5 py-1.5 border border-transparent
              text-xs leading-4 font-bold rounded-full text-white bg-red-600 hover:bg-red-500
              focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 transition ease-in-out duration-150"
              @click="remove"
            >
              -
            </button>
          </span>
          <span class="font-bold text-sm">
            {{ counter }}
          </span>
          <span class="inline-flex rounded-full shadow-sm mx-2">
            <button
              type="button"
              class="inline-flex items-center px-2.5 py-1.5 border border-transparent
              text-xs leading-4 font-bold rounded-full text-white bg-red-600 hover:bg-red-500
              focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 transition ease-in-out duration-150"
              @click="add"
            >
              +
            </button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import AppImage from '@/components/Image/AppImage.vue';
import soySVG from '@/assets/svgs/soy.svg';
import glutenSVG from '@/assets/svgs/gluten.svg';
import nutsSVG from '@/assets/svgs/nuts.svg';
import dairySVG from '@/assets/svgs/dairy.svg';
import meatSVG from '@/assets/svgs/meat.svg';
import shellfishSVG from '@/assets/svgs/shellfish.svg';

export interface Dish {
    name: string;
    category: string;
    image: string;
    price: number;
    description: string;
    allergies: Array<string>;
}

@Component({
  name: 'BaseCard',
  components: {
    AppImage,
    dairySVG,
    glutenSVG,
    nutsSVG,
    meatSVG,
    shellfishSVG,
    soySVG,
  },
})

export default class BaseCard extends Vue {
  @Prop({ required: false })
  readonly dish!: Dish;

  counter = 0;

  add() {
    this.counter += 1;
  }

  remove() {
    this.counter -= 1;
  }
}
</script>
