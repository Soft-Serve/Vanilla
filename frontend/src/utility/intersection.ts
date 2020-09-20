const intersection = (array1: Array<string | number>, array2: Array<string | number>): boolean => {
  for (let i = 0; i < array1.length; i += 1) {
    for (let j = 0; j < array2.length; j += 1) {
      if (array1[i] === array2[j]) {
        return true;
      }
    }
  }
  return false;
};

export default intersection;
