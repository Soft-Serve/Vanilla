export interface Allergy {
  isOn: boolean;
  label: string;
}

export interface Dish {
  name: string;
  category: string;
  image: string;
  description: string;
  price: number;
  allergies: string[];
}

export interface EstablishmentMenu {
  id: number;
  name: string;
  restaurant_id: number;
}

export type Photo = { url: string }

export interface Establishment {
  id: number;
  name: string;
  logo: Photo;
  currency: string;
  primary_colour: string;
  secondary_colour: string;
}

export interface Category {
  id: number;
  name: string;
  category_type: string;
  menu_id: number;
}

export interface Item {
  id: number;
  name: string;
  description: string;
  menu_category_id: number;
  photo: Photo;
}
