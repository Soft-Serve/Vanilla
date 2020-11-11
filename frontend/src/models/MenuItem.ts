// eslint-disable-next-line import/no-cycle
import ApiService from '@/models/ApiService';
import MenuItemDTO from './DTO/MenuItemDTO';
import ItemDietary from './ItemDietary';

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

  private convertAllergyNameToLowerCase(allergies: ItemDietary[]) {
    return allergies.map((allergy) => {
      const copyOfAllergy = { ...allergy };
      copyOfAllergy.name = copyOfAllergy.name.toLowerCase();
      return new ItemDietary(copyOfAllergy);
    });
  }

  public fetchAllergies() {
    ApiService.getItemDietaries(this).then((response: ItemDietary[]) => {
      this.allergies = this.convertAllergyNameToLowerCase(response);
    });
  }

  price = 12.50
}
