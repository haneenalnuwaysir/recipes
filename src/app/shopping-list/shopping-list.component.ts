import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit , OnDestroy{
  
  ingradients! : Ingredient[] ;
  private igChangeSubscription!: Subscription;

  constructor(private shoppingListService: ShoppingListService ){}

  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
    this.igChangeSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.ingradients = this.shoppingListService.getIngredients();
    this.igChangeSubscription = this.shoppingListService.ingradientsChanged
    .subscribe(
      (ingradients: Ingredient[] ) => {
        this.ingradients = ingradients;
      }
    )
  }
  onEditItem(index: number){
    this.shoppingListService.startedEditing.next(index);
  }
}
