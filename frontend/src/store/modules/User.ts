import {
  VuexModule, Module, getModule,
} from 'vuex-module-decorators';

import store from '@/store';
import { Allergy } from '@/interfaces';

@Module({
  namespaced: true,
  name: 'User',
  store,
  dynamic: true,
})
class User extends VuexModule {
  private _allergies: Array<Allergy> = [
    {
      label: 'soy',
      isOn: false,
    },
    {
      label: 'meat',
      isOn: false,
    },
    {
      label: 'gluten',
      isOn: false,
    },
    {
      label: 'nuts',
      isOn: false,
    },
    {
      label: 'dairy',
      isOn: false,
    },
    {
      label: 'shellfish',
      isOn: false,
    },
  ]

  get allergies(): Array<Allergy> {
    return this._allergies;
  }

  get selectedAllergies(): Array<string> {
    const allergies: Array<string> = [];
    this.allergies.forEach((allergy: Allergy) => {
      if (allergy.isOn) {
        allergies.push(allergy.label);
      }
    });
    return allergies;
  }

  get hasAllergies(): boolean {
    return !!(this.selectedAllergies.length);
  }
  // public recipe: RecipeInterface = {
  //   ingredients: [],
  // };

  // public get getRecipe(): RecipeInterface {
  //   return this.recipe;
  // }

  // @Action
  // public setRecipe(recipe: RecipeInterface): void {
  //   this.SET_RECIPE(recipe);
  // }

  // @Mutation
  // private SET_RECIPE(recipe: RecipeInterface) {
  //   this.recipe = recipe;
  // }
}

const UserModule = getModule(User);
export default UserModule;
