// eslint-disable-next-line import/no-cycle
import ApiService from '@/models/ApiService';
import MenuItemDTO from './DTO/MenuItemDTO';
import RestaurantMenu from './DTO/RestaurantMenuDTO';
import ItemDietary from './ItemDietary';
import MenuCategory from './MenuCategory';

export default class MenuItem extends MenuItemDTO {
  constructor(dto: MenuItemDTO) {
    super();
    Object.assign(this, dto);
  }

  private _allergies: ItemDietary[] = [];

  get allergies() {
    return this._allergies;
  }

  set allergies(payload: ItemDietary[]) {
    this._allergies = payload;
  }

  convertNamesToLowerCase(allergies: ItemDietary[]) {
    return allergies.map((allergy) => {
      const copyOfAllergy = { ...allergy };
      copyOfAllergy.name = copyOfAllergy.name.toLowerCase();
      return copyOfAllergy;
    });
  }

  fetchAllergies(menu: RestaurantMenu, category: MenuCategory, item: MenuItem) {
    ApiService.getItemDietaries(menu, category, item).then((payload: ItemDietary[]) => {
      this.allergies = this.convertNamesToLowerCase(payload);
    });
  }

  price = 12.50
}
