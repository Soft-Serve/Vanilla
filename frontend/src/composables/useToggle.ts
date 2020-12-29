import { ref, Ref } from 'vue';

interface UseToggle {
  isShowing: Ref<boolean>;
  toggleIsShowing: () => void;
}

export default (): UseToggle => {
  const isShowing = ref(false);
  const toggleIsShowing = () => {
    isShowing.value = !isShowing.value;
  };
  return {
    isShowing,
    toggleIsShowing,
  };
};
