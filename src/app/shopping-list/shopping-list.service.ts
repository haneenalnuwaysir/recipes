import {  Injectable } from '@angular/core';
import { Ingradient } from '../shared/ingradient.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingradientsChanged = new Subject<Ingradient[]>();
  constructor() { }

  private ingradients : Ingradient[] =[
    new Ingradient('Apple', 5),
    new Ingradient('banana', 3),
  ];

  getIngredients(){
    return this.ingradients.slice();
  }
// updated on time
  addIngredients(ingradient: Ingradient){
   this.ingradients.push(ingradient);
   this.ingradientsChanged.next(this.ingradients.slice());
  }
  addIngredientsFromRecipe(ingredients :Ingradient[]){
    // for( let ingradient of ingredients){
    //   this.addIngredients(ingradient)
    // }
    // ... use when you want to push array inside an array
    this.ingradients.push(...ingredients);
    this.ingradientsChanged.next(this.ingradients.slice());

  }
}
// Subject -> next
