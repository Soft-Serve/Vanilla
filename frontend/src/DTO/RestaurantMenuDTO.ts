export interface EstablishmentMenu {
  id: number;
  name: string;
  restaurant_id: number;
}
export default class RestaurantMenu implements EstablishmentMenu {
  id = 0

  name = ''

  restaurant_id= 0;
}
