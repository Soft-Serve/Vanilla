import { ItemDietaryDTO } from '@/DTO';

export default class ItemDietary extends ItemDietaryDTO {
  constructor(dto?: ItemDietaryDTO) {
    super();
    Object.assign(this, dto);
  }

  public isActive = false;

  public toggleActiveState(): void {
    this.isActive = !this.isActive;
  }

  get allergyNameInLowerCase(): string {
    return this.name.toLowerCase();
  }
}
