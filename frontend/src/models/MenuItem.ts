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

  public setAllergies(payload: ItemDietary[]) {
    this.allergies = payload;
  }

  price = 12.50
}
