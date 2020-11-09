/* eslint-disable import/no-cycle */
import Axios from 'axios';
import MenuItem from './MenuItem';
import Restaurant from './Restaurant';
import RestaurantMenu from './RestaurantMenu';
import MenuCategory from './MenuCategory';
import ItemDietary from './ItemDietary';
import Collection from './Collection';
import ItemsCollection from './ItemsCollection';

export default class ApiService {
  private static restaurantService = Axios.create({
    baseURL: 'http://localhost:3091',
    headers: {
      Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.',
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
    },
    withCredentials: false,
  });

  static async getRestaurant(): Promise<Restaurant> {
    return this.restaurantService.get('/api/restaurants/1')
      .then((response) => new Restaurant(response.data));
  }

  static async getRestaurantMenus(): Promise<Collection<RestaurantMenu>> {
    const results: RestaurantMenu[] = await this.restaurantService.get('/api/restaurants/1/menus')
      .then((response) => response.data.map((result: RestaurantMenu) => new RestaurantMenu(result)));
    return new Collection(results);
  }

  static async getRestaurantMenu(menu: RestaurantMenu): Promise<RestaurantMenu> {
    return this.restaurantService.get(`/api/restaurants/1/menus/${menu.id}`)
      .then((response) => new RestaurantMenu(response.data));
  }

  static async getMenuCategories(menu: RestaurantMenu): Promise<MenuCategory[]> {
    return this.restaurantService.get(`/api/menus/${menu.id}/menu_categories`)
      .then((response) => response.data.map((result: MenuCategory) => new MenuCategory(result)));
  }

  static async getMenuCategory(menu: RestaurantMenu, category: MenuCategory): Promise<MenuCategory> {
    return this.restaurantService.get(`/api/menus/${menu.id}/menu_categories/${category.id}`)
      .then((response) => new MenuCategory(response.data));
  }

  static async getItems(category: MenuCategory): Promise<Collection<MenuItem>> {
    const results: MenuItem[] = await this.restaurantService.get(`/api/menu_categories/${category.id}/menu_items`)
      .then((response) => response.data.map((result: MenuItem) => new MenuItem(result)));
    return new ItemsCollection(results);
  }

  static async getItemDietaries(item: MenuItem): Promise<ItemDietary[]> {
    return this.restaurantService.get(`/api/menu_items/${item.id}/dietary_instances`)
      .then((response) => response.data.map((result: ItemDietary) => new ItemDietary(result)));
  }

  static async getRestaurantDietaries(restaurant: Restaurant): Promise<ItemDietary[]> {
    return this.restaurantService.get(`/api/restaurants/${restaurant.id}/dietaries`)
      .then((response) => response.data.map((result: ItemDietary) => new ItemDietary(result)));
  }
}
