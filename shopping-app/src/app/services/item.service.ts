import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { Item } from '../shared/item';
import { testRecipes } from '../shared/test-data/test-data';//Imports recipes from test data file in shared folder

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private selectedRecipe;//Returns value for selected recipe from array
  private recipes;
  private favorites;
  private totalPrice: number;
  private listItems: Item[];

  constructor(private dbs: DatabaseService) {
    this.favorites = this.dbs.getFavoriteItems();
    this.recipes = this.dbs.getRecipes();
    this.listItems = this.dbs.retrieveItems();
    this.totalPrice = 0;
    this.calculateTotalPrice();
   }

  getRecipes() {
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

  /* Add new recipe to database. May be used to add categories later */
  addRecipe(recipe) {
    this.dbs.addRecipe(recipe);
  }

  /* May be used to check if items are already added to the list before they're added to the database */
  addRecipeItems(items) {
    console.log("Adding recipe items...", items);
    this.dbs.addRecipeItems(items);
  }

  /* Add Item to Favorites List */
  favoriteItem(item: Item) {
    console.log("Toggling item favorite status:", item.id);
      this.dbs.toggleFavoriteItem(item.id);
  }

  /* Retrieves a list of favorite items from database. May be used to sort retrieved data later */
  getFavorites() {
    this.listItems.map((item) => {
      item.checked = false;
    });
    return this.favorites;
  }

  private calculateTotalPrice(): void {
    this.listItems.map((item) => {
      this.totalPrice += item.price;
    });
  }

  getTotalPrice() {
    return this.totalPrice;
  }

}
