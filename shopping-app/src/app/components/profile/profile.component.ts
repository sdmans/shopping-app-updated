import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { ItemService } from '../../services/item.service';
import { Roommate } from '../../shared/roommate';
import { Location } from '../../shared/location';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  roommates: Roommate[];
  locations: Location[];
  recipes$;

  constructor(private dbs: DatabaseService, private itemService: ItemService) { }

  ngOnInit() {
    /* Retrieves roommates from database service which will eventually be available as an observable on a database */
    this.roommates = this.dbs.getRoommates();
    this.locations = this.dbs.getLocations();
    this.recipes$ = this.itemService.getRecipes();
  }

  addRecipe(recipe): void {
    console.log(recipe.name);
    this.itemService.addRecipeItems(recipe.items);
  }

}
