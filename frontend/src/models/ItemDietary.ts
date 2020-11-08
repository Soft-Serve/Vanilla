import ItemDietaryDTO from './DTO/ItemDietaryDTO';

export default class ItemDietary extends ItemDietaryDTO {
  constructor(dto?: ItemDietaryDTO) {
    super();
    Object.assign(this, dto);
  }

  isActive = false;
}
