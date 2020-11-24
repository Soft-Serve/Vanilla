import ItemDietary from '@/models/ItemDietary';

const intersection = (array1: Array<ItemDietary>, array2: Array<ItemDietary>): boolean => {
  for (let i = 0; i < array1.length; i += 1) {
    for (let j = 0; j < array2.length; j += 1) {
      if (array1[i].id === array2[j].dietary_id) {
        return true;
      }
    }
  }
  return false;
};

export default intersection;
