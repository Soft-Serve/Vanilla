<template>
  <div
    v-if="cardData"
    class="card"
  >
    <div
      v-if="cardData.image"
      class="card__image-container"
    >
      <BaseImage
        width="150px"
        height="150px"
        :src="cardData.image"
      />
    </div>
    <div class="card__content">
      <h3 class="card__title">
        {{ cardData.name }}
      </h3>
      <div v-if="cardData.allergies">
         <BaseIcon
          v-for="(allergy, index) in cardData.allergies"
          :key="index"
          :name="allergy"
        />
      </div>

      <p class="card__description">
        {{ cardData.description }}
      </p>
      <div class="card__pricing">
        <span class="card__price">
          <span class="card__currency">$</span>
          {{ counter > 0 ? cardData.price * counter : cardData.price }}
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
import { defineComponent } from 'vue';
import BaseIcon from '~/BaseIcon/BaseIcon.vue';
import BaseButton from '~/BaseButton/BaseButton.vue';
import BaseImage from '~/BaseImage/BaseImage.vue';
import './style.css';

export interface Dish {
    name: string;
    category: string;
    image: string;
    price: number;
    description: string;
    allergies: Array<string>;
}

export default defineComponent({
  name: 'BaseCard',
  components: {
    BaseButton,
    BaseImage,
    BaseIcon,
  },
  props: {
    cardData: {
      type: Object as () => Dish,
      required: true,
    },
  },
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add(): void {
      this.counter += 1;
    },
    remove(): void {
      this.counter -= 1;
    },
  },
});
</script>
