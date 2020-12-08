
export type Photo = { url: string }

export interface Establishment {
  id: number;
  name: string;
  logo: Photo;
  currency: string;
  primary_colour: string;
  secondary_colour: string;
}


export default class RestaurantDTO implements Establishment {
  id = 0;

  name = '';

  logo = {
    url: '',
  }

  currency = '';

  primary_colour = '';

  secondary_colour = '';
}
