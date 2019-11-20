import { Injectable } from '@angular/core';
import { Item } from '../shared/item';
import { Roommate } from '../shared/roommate';
import { Location } from '../shared/location';

//Import test data
import { listItems } from '../shared/test-data/test-data';
import { testRoommates } from '../shared/test-data/test-data';
import { testLocations } from '../shared/test-data/test-data';
import { favoriteItems } from '../shared/test-data/test-data';
import { testRecipes } from '../shared/test-data/test-data';

//Modules for rxjs Observables
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  items$: Item[] = listItems;
  roommates: Roommate[] = testRoommates;
  locations: Location[] = testLocations;
  favorites: Item[] = favoriteItems; 
  recipes$ = testRecipes;


  selectedItem$: Item;//For detail component on main page
  singleItem: Item;//For item-detail view

  constructor() { }

  /* Methods for adding and retrieving items */
  addItem(item): void {
    this.items$.push(item);
    console.log(this.items$);
  }

  retrieveItems() {
    return this.items$;
  }

  getItemById(id: string) {
    console.log(id);
    this.items$.map((item) => {
      if(item.id === id) {
        
        this.singleItem = item;
        console.log("Currently viewing single item:", this.singleItem);
      }
    })
    return this.singleItem;
  }

  toggleFavoriteItem(id: string) {
    this.items$.map((item: Item) => {
      if(item.id === id) {
        if(!item.favorited) {
          item.favorited = true;
          console.log("Status:", item.favorited);
        } else {
          item.favorited = false;
          console.log("Status:", item.favorited);
        }
        
      }
    });
  }

  setSelectedItem(item: Item) {
    this.selectedItem$ = item;
    // console.log(this.selectedItem$);
    return this.selectedItem$;
  }

  getSelectedItem() {
    // const selectedItemObservable = of(this.selectedItem$);
    // return selectedItemObservable;
    return this.selectedItem$;
  }


  /* Methods for adding and retrieving recipes */
  /* Adds a new recipe to list of recipes */
  addRecipe(recipe) {
    this.recipes$.push(recipe);
  }

  /* Adds items from recipe to shopping list */
  addRecipeItems(recipeItems: Item[]): void {
    console.log(recipeItems);
    recipeItems.map((item) => {
      this.items$.push(item);
    });
    console.log(this.items$);
  }

  /* Methods for adding and retrieving roommates and locations */
  addRoommate(newRoommate: Roommate) {
    this.roommates.push(newRoommate);
  }

  addLocation(newLocale: Location) {
    this.locations.push(newLocale);
  }

  getRoommates() {
    return this.roommates;
  }

  getLocations() {
    return this.locations;
  }

  getFavoriteItems() {
    return this.favorites;
  }

  getRecipes() {
    return this.recipes$;
  }
  
}
