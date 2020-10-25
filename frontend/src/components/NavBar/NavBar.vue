<template>
  <ToolBar>
    <template v-slot:toolBarContent>
      <div class="w-32 mx-3 xs:my-1 xs:w-full xs:px-4 xs:mt-2">
        <BaseButton>
          <router-link to="/">Home</router-link>
        </BaseButton>
      </div>
      <div class="w-32 mx-3 xs:my-1 xs:w-full xs:px-4 xs:mt-2">
        <BaseButton>
          <router-link to="/about">About</router-link>
        </BaseButton>
      </div>
    </template>
  </ToolBar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ToolBar from '~/ToolBar/ToolBar.vue';
import BaseButton from '~/BaseButton/BaseButton.vue';

export default defineComponent({
  name: 'NavBar',
  components: {
    ToolBar,
    BaseButton,
  },
});

</script>
