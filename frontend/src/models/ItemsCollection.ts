import intersection from '@/utility/intersection';
import Collection from './Collection';
import ItemDietary from './ItemDietary';
import MenuItem from './MenuItem';

export default class ItemsCollection extends Collection<MenuItem> {
  public filterItemsByDietaries(dietaries: ItemDietary[]): MenuItem[] {
    const copy = [...this.collection];
    if (dietaries.length) {
      return copy.filter((item: MenuItem) => !intersection(dietaries, item.dietaries));
    } return copy;
  }
}
