import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoping-list.service';

@Injectable()
export class RecipeService {    
    recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Steak Kabobs', 
      'Summer favorite cooked on the grill or in the oven', 
      'https://www.nps.gov/subjects/camping/images/recipe_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      [
        new Ingredient('Steak', 1),
        new Ingredient('Peppers', 2),
        new Ingredient('Onion', 1)
      ]
      ),
    new Recipe(
      'Chinese Stir Fry', 
      'Classic chinese take away dish made simple at home', 
      'https://p0.pikist.com/photos/649/203/chinese-food-dish-food-asian-vegetables.jpg',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Snow Peas', 10),
        new Ingredient('Onion', 1),
        new Ingredient('Green Pepper', 1),
        new Ingredient('Ginger', 1),
        new Ingredient('Rice', 1)
      ]
      ),
      new Recipe(
        'Roasted Chicken', 
        'Roasted Chicken with an Indian kick.', 
        'https://i7.pngflow.com/pngimage/433/354/png-roast-chicken-sarma-cabbage-roll-dolma-chicken-food-animals-recipe-chicken-meat-clipart.png',
        [
          new Ingredient('Whole Chicken', 1),
          new Ingredient('Sweet Peppers', 4),
          new Ingredient('Curry', 1)
        ]
        ),
  ];

  constructor(private slService: ShoppingListService){}

  getRecipes() {
      return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}