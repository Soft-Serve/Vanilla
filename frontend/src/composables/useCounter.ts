import { ref, Ref } from 'vue';

interface UseCounter {
  counter: Ref<number>;
  increment: () => void;
  decrement: () => void;
}

export default (): UseCounter => {
  const counter = ref(0);
  const increment = () => {
    counter.value += 1;
  };
  const decrement = () => {
    if (counter.value >= 1) {
      counter.value -= 1;
    }
  };
  return {
    counter,
    increment,
    decrement,
  };
};
