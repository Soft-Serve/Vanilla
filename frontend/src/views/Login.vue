<template>
  <div class="wrapper">
    <BaseCard>
      <template #body>
        <div class="w-44">
          <BaseInput v-model="modelValue" :type="'email'">
            <template #inputLabel>
              Email
            </template>
          </BaseInput>
          <BaseInput  v-model="password" :type="'password'">
            <template #inputLabel>
              Password
            </template>
          </BaseInput>
        </div>
      </template>
    </BaseCard>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import BaseInput from '~/BaseInput/BaseInput.vue';
import BaseCard from '~/BaseCard/BaseCard.vue';

export default defineComponent({
  name: 'Login',
  components: {
    BaseInput,
    BaseCard,
  },

  setup() {
    const modelValue = ref('');
    const password = ref('');

    return {
      modelValue,
      password,

    };
  },
});
</script>
