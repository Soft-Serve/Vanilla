<template>
  <div id="app">
    <div class=" flex flex-col">
      <NavBar />
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from '@/components/NavBar/NavBar.vue';

@Component({
  components: {
    NavBar,
  },
})
export default class App extends Vue {}
</script>
