import RestaurantMenuDTO from './DTO/RestaurantMenuDTO';

export default class RestaurantMenu extends RestaurantMenuDTO {
  constructor(dto?: RestaurantMenuDTO) {
    super();
    Object.assign(this, dto);
  }
}
