import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit{ 

  id!: number;
  editMode = false;

  constructor(private route: ActivatedRoute){

  }
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) =>{
        // id in +params['id']; it must be same id in routing component
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          // console.log(this.editMode);
          

      }
    )
  }

}
