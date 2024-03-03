import { Component, ElementRef,  OnInit, ViewChild } from '@angular/core';
import { Ingradient } from 'src/app/shared/ingradient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput' , {static:false}) nameInputRef!: ElementRef;
  @ViewChild('amountInput' , {static:false}) amountTnputRef!: ElementRef;


  constructor(private shoppingListService: ShoppingListService){}
  ngOnInit(): void {
  }
 onAddItem(){
  const ingName = this.nameInputRef.nativeElement.value;
  const ingAmount = this.amountTnputRef.nativeElement.value;
  const newIngradient = new Ingradient( ingName,ingAmount);
  this.shoppingListService.addIngredients(newIngradient);

 }

}
