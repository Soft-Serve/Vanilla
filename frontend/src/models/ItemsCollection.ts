/* eslint-disable import/no-cycle */
import Collection from './Collection';
import RestaurantMenu from './DTO/RestaurantMenuDTO';
import MenuCategory from './MenuCategory';
import MenuItem from './MenuItem';

export default class ItemsCollection extends Collection<MenuItem> {
  public triggerFetchAllergies(menu: RestaurantMenu, category: MenuCategory) {
    return this.collection.forEach((item: MenuItem) => item.fetchAllergies(menu, category, item));
  }
}
