import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingradient } from '../shared/ingradient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit , OnDestroy{
  
  ingradients! : Ingradient[] ;
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
      (ingradients: Ingradient[] ) => {
        this.ingradients = ingradients;
      }
    )
  }
}
