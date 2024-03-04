import {  Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingradientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  constructor() { }

  private ingradients : Ingredient[] =[
    new Ingredient('Apple', 5),
    new Ingredient('banana', 3),
  ];

  getIngredients(){
    return this.ingradients.slice();
  }
// updated on time
  addIngredients(ingradient: Ingredient){
   this.ingradients.push(ingradient);
   this.ingradientsChanged.next(this.ingradients.slice());
  }
  addIngredientsFromRecipe(ingredients :Ingredient[]){
    // for( let ingradient of ingredients){
    //   this.addIngredients(ingradient)
    // }
    // ... use when you want to push array inside an array
    this.ingradients.push(...ingredients);
    this.ingradientsChanged.next(this.ingradients.slice());

  }

  getIngredient(index: number){
    return this.ingradients[index]
  }
  updateIngradient(index: number,newIngradient: Ingredient){
    this.ingradients[index]= newIngradient;
    this.ingradientsChanged.next(this.ingradients.slice());
  }
  deleteIngradient(index: number){
    this.ingradients.splice(index, 1);
    this.ingradientsChanged.next(this.ingradients.slice());
  }
}
// Subject -> next
