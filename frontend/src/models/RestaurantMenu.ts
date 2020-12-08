import { RestaurantMenuDTO } from '@/DTO';

export default class RestaurantMenu extends RestaurantMenuDTO {
  constructor(dto?: RestaurantMenuDTO) {
    super();
    Object.assign(this, dto);
  }
}
