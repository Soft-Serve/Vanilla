import ItemAllergyDTO from './DTO/ItemAllergyDTO';

export default class ItemAllergy extends ItemAllergyDTO {
  constructor(dto?: ItemAllergyDTO) {
    super();
    Object.assign(this, dto);
  }
}
