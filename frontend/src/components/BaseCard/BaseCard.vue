<template>
  <div
    v-if="data"
    class="card"
  >
    <!-- <div
      v-if="data.image"
      class="card__image-container"
    >
      <BaseImage
        width="150px"
        height="150px"
        :src="data.image"
      />
    </div> -->
    <div class="card__content">
      <h3 class="card__title">
        {{ data.name }}
      </h3>
      <div v-if="data.dietaries">
         <BaseIcon
          v-for="(dietary) in data.dietaries"
          :key="dietary.id"
          :name="dietary.allergyNameInLowerCase"
        />
      </div>


      <p class="card__description">
        {{ data.description }}
      </p>
      <div class="card__pricing">
        <span class="card__price">
          <span class="card__currency">$</span>
          {{ counter > 0 ? data.price * counter : data.price }}
        </span>
        <div class="card__actions">
          <span class="card__button-container">
            <BaseButton :buttonSize="SIZES.EXTRASMALL" @click="remove">
                <span>-</span>
            </BaseButton>
          </span>
          <span class="card__counter">
            {{ counter }}
          </span>
          <span class="card__button-container">
            <BaseButton :buttonSize="SIZES.EXTRASMALL" @click="add">
                <span>+</span>
            </BaseButton>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, ref, PropType, onMounted,
} from 'vue';
import { SIZES } from '@/helpers';
import MenuItem from '@/models/MenuItem';
import BaseIcon from '~/BaseIcon/BaseIcon.vue';
import BaseButton from '~/BaseButton/BaseButton.vue';
// import BaseImage from '~/BaseImage/BaseImage.vue';
import './style.css';

export default defineComponent({
  name: 'BaseCard',
  components: {
    BaseButton,
    // BaseImage,
    BaseIcon,
  },
  props: {
    data: {
      type: Object as PropType<MenuItem>,
      required: true,
    },
  },
  setup(props) {
    onMounted(() => {
      props.data.fetchAllergies(props.data);
    });
    const counter = ref(0);
    const add = () => {
      counter.value += 1;
    };
    const remove = () => {
      counter.value -= 1;
    };
    return {
      counter,
      add,
      remove,
      SIZES,
    };
  },
});
</script>
