// import intersection from '@/utility/intersection';
import Collection from './Collection';
import ItemDietary from './ItemDietary';
import MenuItem from './MenuItem';

export default class ItemsCollection extends Collection<MenuItem> {
  public filterItemsByDietaries(dietaries: ItemDietary[]) {
    console.log(dietaries);
    console.log(this.collection);
  }
}
