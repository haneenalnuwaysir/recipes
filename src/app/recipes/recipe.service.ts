import {  Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingradient } from '../shared/ingradient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new Subject<Recipe>();

  constructor(private shoppingListService: ShoppingListService) { }

  private recipes: Recipe[] = [
    new Recipe('recipe one',
    'the description of recipe one',
    'https://kellyloves.com/cdn/shop/articles/Untitled_2048_x_1024px_2048_x_1024px_1024_x_1024px.jpg?v=1652972260&width=800',
     [
       new Ingradient('meet', 1),
       new Ingradient('cheese', 2),
      ]),
      new Recipe('recipe Three',
      'the description of recipe three',
      'https://www.tamingtwins.com/wp-content/uploads/2023/02/image-56-500x500.jpeg',
       [
        new Ingradient('rice', 5),
        new Ingradient('meet', 1),
       ])
  ];

  getRecipes(){
    return this.recipes;
  }
  addIngredientsToShoppingList(ingredients: Ingradient[]){
      this.shoppingListService.addIngredientsFromRecipe(ingredients);
  }

  // method to get by id
  getRecipe(index: number){
    return this.recipes[index];
  }

}
