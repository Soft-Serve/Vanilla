import Collection from './Collection';
import ItemDietary from './ItemDietary';

export default class DietaryCollection extends Collection<ItemDietary> {
  get activeDietaries() {
    return this.collection.filter((dietary: ItemDietary) => dietary.isActive);
  }
}
