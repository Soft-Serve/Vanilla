import { Restaurant } from '@/interfaces/index';

export type State = {
  loading: boolean;
  restaurant?: Restaurant;
}

export const state: State = {
  loading: false,
  restaurant: undefined,
};
