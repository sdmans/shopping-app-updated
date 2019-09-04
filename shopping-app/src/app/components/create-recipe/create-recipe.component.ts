import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipeComponent implements OnInit {
  favorites;

  constructor(private itemService: ItemService) { 

  }

  ngOnInit() {
    this.favorites = this.itemService.getFavorites();
  }

}
