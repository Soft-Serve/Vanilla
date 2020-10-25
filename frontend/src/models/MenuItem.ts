import MenuItemDTO from './DTO/MenuItemDTO';

export default class MenuItem extends MenuItemDTO {
  constructor(dto?: MenuItemDTO) {
    super();
    Object.assign(this, dto);
  }

  price = 12.50
}
