import Collection from '@/models/Collection';
import ItemDietary from '@/models/ItemDietary';

export default class DietaryCollection extends Collection<ItemDietary> {
  get activeDietaries(): ItemDietary[] {
    return this.collection.filter((dietary: ItemDietary) => dietary.isActive);
  }
}
