import RestaurantDTO from './RestaurantDTO';

export default class Restaurant extends RestaurantDTO {
  constructor(dto: RestaurantDTO) {
    super();
    Object.assign(this, dto);
  }

  get nameOfRestaurant() {
    return this.name;
  }
}
