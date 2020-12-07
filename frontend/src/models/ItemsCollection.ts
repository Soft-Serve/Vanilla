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

  public clearFilteredCollection(): void {
    this.filteredCollection.splice(0, this.filteredCollection.length);
  }

  public filterItemsByDietaries(dietaries: ItemDietary[]): void {
    this.clearFilteredCollection();
    if (dietaries.length) {
      this.filteredCollection = this.collection.filter((item: MenuItem) => !intersection(dietaries, item.dietaries));
    }
  }

  get itemsCollection(): MenuItem[] {
    return this.filteredCollection.length ? this.filteredCollection : this.collection;
  }
}
