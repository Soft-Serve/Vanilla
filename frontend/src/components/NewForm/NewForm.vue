<template>
  <form class="form" @submit.prevent="onSubmit">
    <label for="name">Name:</label>
    <input id="name" v-model="name">

    <label for="price">Price:</label>
    <input id="price" v-model="price">

    <label for="category">Category:</label>
    <select id="category" v-model="category">
      <option>'Apps'</option>
      <option>'Mains'</option>
    </select>

    <label for="description">Description:</label>
    <textarea id="description" v-model="description"></textarea>

    <input class="button" type="submit" value="Submit">

    <!-- <BaseButton class='w-min-content' :buttonSize="SIZES.EXTRASMALL" @click="toggleIsShowing">
      <span>Upload item</span>
    </BaseButton> -->
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import './style.css';
// import { SIZES } from '@/helpers';
// import BaseButton from '~/BaseButton/BaseButton.vue';

export default defineComponent({
  name: 'NewForm',
  props: {

  },
  data() {
    return {
      name: '',
      price: 0,
      category: null,
      description: '',
    };
  },
  components: {
    // BaseButton,
  },
  setup() {
    return {
      // SIZES,
    };
  },
  methods: {
    onSubmit() {
      console.log('submitting');
      return '';
    },
  },
});

</script>
