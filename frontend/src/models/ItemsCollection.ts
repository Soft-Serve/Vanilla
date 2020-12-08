import intersection from '@/utility/intersection';
import Collection from '@/models/Collection';
import MenuItem from '@/models/MenuItem';
import ItemDietary from '@/models/ItemDietary';

export default class ItemsCollection extends Collection<MenuItem> {
  private _filteredCollection: MenuItem[] = [];

  get filteredCollection(): MenuItem[] {
    return this._filteredCollection;
  }

  set filteredCollection(payload: MenuItem[]) {
    this._filteredCollection = payload;
  }

  public filterItemsByDietaries(dietaries: ItemDietary[]): MenuItem[] {
    return this.collection.filter((item: MenuItem) => !intersection(dietaries, item.dietaries));
  }
}
