import RestaurantDTO from './DTO/RestaurantDTO';

export default class Restaurant extends RestaurantDTO {
  constructor(dto: RestaurantDTO) {
    super();
    Object.assign(this, dto);
  }
}
