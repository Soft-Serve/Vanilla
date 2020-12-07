import intersection from '@/utility/intersection';
import Collection from './Collection';
import ItemDietary from './ItemDietary';
import MenuItem from './MenuItem';

export default class ItemsCollection extends Collection<MenuItem> {
  private _filteredCollection: MenuItem[] = [];

  get filteredCollection() {
    return this._filteredCollection;
  }

  set filteredCollection(payload: MenuItem[]) {
    this._filteredCollection = payload;
  }

  public filterItemsByDietaries(dietaries: ItemDietary[]): MenuItem[] {
    return this.collection.filter((item: MenuItem) => !intersection(dietaries, item.dietaries));
  }
}
