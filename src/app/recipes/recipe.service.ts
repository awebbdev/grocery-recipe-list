import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {    
    recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simple test', 'https://www.nps.gov/subjects/camping/images/recipe_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false'),
    new Recipe('Another Test Recipe', 'This is a complex test', 'https://www.nps.gov/subjects/camping/images/recipe_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false'),
  ];

  getRecipes() {
      return this.recipes.slice();
  }
}