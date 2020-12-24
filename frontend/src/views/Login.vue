<template>
  <form class="wrapper" @submit.prevent="handleLogin">
    <BaseCard>
      <template #body>
          <BaseInput v-model="email" :type="'email'">
            <template #inputLabel>
              Email
            </template>
          </BaseInput>
          <BaseInput  v-model="password" :type="'password'">
            <template #inputLabel>
              Password
            </template>
          </BaseInput>
      </template>
      <template #footer>
        <BaseButton type="submit">
          Login
        </BaseButton>
      </template>
    </BaseCard>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ApiService from '@/API/ApiService';
import BaseInput from '~/BaseInput/BaseInput.vue';
import BaseCard from '~/BaseCard/BaseCard.vue';
import BaseButton from '~/BaseButton/BaseButton.vue';


export default defineComponent({
  name: 'Login',
  components: {
    BaseInput,
    BaseCard,
    BaseButton,
  },

  setup() {
    const email = ref('');
    const password = ref('');

    const handleLogin = () => {
      const user = {
        email: email.value,
        password: password.value,
      };
      ApiService.loginUser({ user });
    };

    return {
      email,
      handleLogin,
      password,
    };
  },
});
</script>
