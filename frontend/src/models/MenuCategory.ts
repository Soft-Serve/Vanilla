import { MenuCategoryDTO } from '@/DTO';

export default class MenuCategory extends MenuCategoryDTO {
  constructor(dto?: MenuCategoryDTO) {
    super();
    Object.assign(this, dto);
  }
}
