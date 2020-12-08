/* eslint-disable import/no-cycle */
import ApiService from '@/API/ApiService';
import { MenuItemDTO } from '@/DTO';
import ItemDietary from '@/models/ItemDietary';

export default class MenuItem extends MenuItemDTO {
  constructor(dto: MenuItemDTO) {
    super();
    Object.assign(this, dto);
  }

  private _dietaries: ItemDietary[] = [];

  get dietaries(): ItemDietary[] {
    return this._dietaries;
  }

  set dietaries(payload: ItemDietary[]) {
    this._dietaries = payload;
  }

  public setDietaries(payload: ItemDietary[]): void {
    this.dietaries = payload;
  }

  public async fetchAllergies(payload: MenuItem): Promise<void> {
    const dietaries = await ApiService.getItemDietaries(payload);
    this.dietaries = dietaries;
  }

  price = 12.50
}
