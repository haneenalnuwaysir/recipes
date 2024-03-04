import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { map, tap } from "rxjs";

@Injectable({ providedIn: 'root' })

export class DataStorageService {

    constructor(private http: HttpClient, private recipeService: RecipeService) { }

    stroeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://myapp-70de4-default-rtdb.firebaseio.com/recipes.json', recipes)
            .subscribe(response => {
                console.log("recipes intre"+ response)
            });
    }

    fetchRecipes() {
        return this.http.get<Recipe[]>('https://myapp-70de4-default-rtdb.firebaseio.com/recipes.json')
            .pipe(
                map(recipes => {
                    return recipes.map(recipe => {
                        return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
                    })
                }),
                tap(recipes => {
                    this.recipeService.setRecipes(recipes);
                })
            );

    }

}