import Axios from 'axios';
import MenuItem from './MenuItem';
import Restaurant from './Restaurant';
import RestaurantMenu from './RestaurantMenu';
import MenuCategory from './MenuCategory';
import ItemAllergy from './ItemAllergy';

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

  static async getRestaurantMenus(): Promise<RestaurantMenu[]> {
    return this.restaurantService.get('/api/restaurants/1/menus')
      .then((response) => response.data.map((result: RestaurantMenu) => new RestaurantMenu(result)));
  }

  static async getRestaurantMenu(menu: RestaurantMenu): Promise<RestaurantMenu> {
    return this.restaurantService.get(`/api/restaurants/1/menus/${menu.id}`)
      .then((response) => new RestaurantMenu(response.data));
  }

  static async getMenuCategories(menu: RestaurantMenu): Promise<MenuCategory[]> {
    return this.restaurantService.get(`/api/restaurants/1/menus/${menu.id}/menu_categories`)
      .then((response) => response.data.map((result: MenuCategory) => new MenuCategory(result)));
  }

  static async getMenuCategory(menu: RestaurantMenu, category: MenuCategory): Promise<MenuCategory> {
    return this.restaurantService.get(`/api/restaurants/1/menus/${menu.id}/menu_categories/${category.id}`)
      .then((response) => new MenuCategory(response.data));
  }

  static async getMenuItems(menu: RestaurantMenu, category: MenuCategory): Promise<MenuItem[]> {
    return this.restaurantService.get(`/api/restaurants/1/menus/${menu.id}/menu_categories/${category.id}/menu_items`)
      .then((response) => response.data.map((result: MenuItem) => new MenuItem(result)));
  }

  static async getMenuItem(menu: RestaurantMenu, category: MenuCategory, item: MenuItem): Promise<MenuItem> {
    return this.restaurantService.get(`/api/restaurants/1/menus/${menu.id}/menu_categories/${category.id}/menu_items/${item.id}`)
      .then((response) => new MenuItem(response.data));
  }

  static async getItemAllergies(menu: RestaurantMenu, category: MenuCategory, item: MenuItem): Promise<ItemAllergy> {
    return this.restaurantService.get(`/api/restaurants/1/menus/${menu.id}/menu_categories/${category.id}/menu_items/${item.id}/dietaries/1`)
      // .then((response) => response.data.map((result: ItemAllergy) => new ItemAllergy(result)));
      .then((response) => new ItemAllergy(response.data));
  }
}
