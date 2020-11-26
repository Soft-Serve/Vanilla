// eslint-disable-next-line import/no-cycle
import ApiService from '@/models/ApiService';
import MenuItemDTO from './DTO/MenuItemDTO';
import ItemDietary from './ItemDietary';

export default class MenuItem extends MenuItemDTO {
  constructor(dto: MenuItemDTO) {
    super();
    Object.assign(this, dto);
  }

  private _dietaries: ItemDietary[] = [];

  get dietaries() {
    return this._dietaries;
  }

  set dietaries(payload: ItemDietary[]) {
    this._dietaries = payload;
  }

  public setDietaries(payload: ItemDietary[]) {
    this.dietaries = payload;
  }

  public async fetchAllergies(payload: MenuItem): Promise<void> {
    const dietaries = await ApiService.getItemDietaries(payload);
    this.dietaries = dietaries;
  }

  price = 12.50
}
