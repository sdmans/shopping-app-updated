import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../shared/item';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipeComponent implements OnInit {
  favorites: Item[];

  constructor(private itemService: ItemService, private formBuilder: FormBuilder) { 
    this.favorites = this.itemService.getFavorites();
  }

  ngOnInit() {
    console.log(this.favorites);
  }

  submitRecipe() {

  }

}
