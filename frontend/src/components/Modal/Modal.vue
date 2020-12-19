<template>
  <div class="wrapper">
    <div class="modal p-1.5 flex flex-col">
      <div class='flex justify-end w-full'>
        <BaseButton class='w-min-content' :buttonSize="SIZES.EXTRASMALL" @click="toggleIsShowing">
          <span>X</span>
        </BaseButton>
      </div>
      <div class='title'><h2>{{ title }}</h2></div>
      <NewForm/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import './style.css';
import { SIZES } from '@/helpers';
import BaseButton from '~/BaseButton/BaseButton.vue';
import NewForm from '~/NewForm/NewForm.vue';

export default defineComponent({
  name: 'Modal',
  props: {
    toggleIsShowing: {
      type: Function,
    },
    title: {
      type: String,
    },
  },
  components: {
    BaseButton,
    NewForm,
  },
  setup() {
    return {
      SIZES,
    };
  },
});

</script>
