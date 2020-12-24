import { ref } from 'vue';

export default () => {
  const isShowing = ref(false);
  const toggleIsShowing = () => {
    isShowing.value = !isShowing.value;
  };
  return {
    isShowing,
    toggleIsShowing,
  };
};
