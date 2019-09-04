import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { Item } from '../shared/item';
import { testRecipes } from '../shared/test-data/test-data';//Imports recipes from test data file in shared folder

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private selectedRecipe;//Returns value for selected recipe from array
  private recipes = testRecipes;
  private favorites;

  constructor(private databaseService: DatabaseService) {
    this.favorites = this.databaseService.getFavoriteItems();
   }

  getRecipies() {
    return this.recipes;
  }

  getSingleRecipe(name: string) {
    console.log('Getting recipe!');
    this.recipes.map((recipe) => {
      if(recipe.name === name) {
        console.log(recipe)
        this.selectedRecipe = recipe;
      } else {
        return;
      } 
    });
    return this.selectedRecipe;
  }

  /* May be used to check if items are already added to the list before they're added to the database */
  addRecipeItems(items) {
    console.log("Adding recipe items...", items);
    this.databaseService.addRecipeItems(items);
  }

  /* Retrieves a list of favorite items */
  getFavorites() {
    console.log(this.favorites);
    return this.favorites;
  }
}
