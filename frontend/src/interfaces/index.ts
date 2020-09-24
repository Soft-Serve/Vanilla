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
