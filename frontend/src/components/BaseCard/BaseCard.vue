<template>
  <div
    v-if="dish"
    class="card"
  >
    <div
      v-if="dish.image"
      class="card__image-container"
    >
      <BaseImage
        width="150px"
        height="150px"
        :src="dish.image"
      />
    </div>
    <div class="card__content">
      <h3 class="card__title">
        {{ dish.name }}
      </h3>
      <div v-if="dish.allergies">
        <Component
          :is="`${allergy}SVG`"
          v-for="(allergy, index) in dish.allergies"
          :key="index"
          class="inline-block"
        />
      </div>

      <p class="card__description">
        {{ dish.description }}
      </p>
      <div class="card__pricing">
        <span class="card__price">
          <span class="card__currency">$</span>
          {{ counter > 0 ? dish.price * counter : dish.price }}
        </span>
        <div class="card__actions">
          <span class="card__button-container">
            <BaseButton @click="remove">
              <template>
                <span class="card__button">-</span>
              </template>
            </BaseButton>
          </span>
          <span class="card__counter">
            {{ counter }}
          </span>
          <span class="card__button-container">
            <BaseButton @click="add">
              <template>
                <span class="card__button">+</span>
              </template>
            </BaseButton>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import BaseImage from '@/components/BaseImage/BaseImage.vue';
import soySVG from '@/assets/svgs/soy.svg';
import glutenSVG from '@/assets/svgs/gluten.svg';
import nutsSVG from '@/assets/svgs/nuts.svg';
import dairySVG from '@/assets/svgs/dairy.svg';
import meatSVG from '@/assets/svgs/meat.svg';
import shellfishSVG from '@/assets/svgs/shellfish.svg';
import BaseButton from '@/components/BaseButton/BaseButton.vue';
import './style.css';

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
    BaseImage,
    dairySVG,
    glutenSVG,
    nutsSVG,
    meatSVG,
    shellfishSVG,
    soySVG,
    BaseButton,
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
