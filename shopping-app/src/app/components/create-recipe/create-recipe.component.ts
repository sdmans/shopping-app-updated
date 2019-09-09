import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../shared/item';
import { FormBuilder, FormGroup, FormArray, FormControl, FormGroupDirective, NgForm, Validators, ValidatorFn } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. Source: https://material.angular.io/components/input/examples */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipeComponent implements OnInit {
  favorites: Item[];
  selectedItems = [];
  recipeName: string;

  nameFormControl = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private itemService: ItemService, private formBuilder: FormBuilder) { 
    
    this.favorites = this.itemService.getFavorites();
  }

  ngOnInit() {
    console.log(this.favorites);
  }

  addItem(selectedItem) {
    if (selectedItem.checked) {
      console.log('Adding item');
      this.selectedItems.push(selectedItem);
    } else {
      console.log('removing Item');
      /* Removed unchecked item from the array */
      this.selectedItems.map((item, index) => {
        if (selectedItem.id === item.id) {
          this.selectedItems.splice(index, 1);
    }
      })
    }
  }

  submitRecipe(name: string) {
    this.recipeName = name;
    if(this.selectedItems.length > 0 && this.recipeName !== undefined && this.recipeName.length > 0) {
      const newRecipe = {
        name: this.recipeName,
        items: this.selectedItems
      };
      console.log(newRecipe);
      this.itemService.addRecipe(newRecipe);
      this.resetRecipe();
    } else {
      console.log('Recipe is empty, have you selected your items and given the recipe a name?');
    }
  }

  /* Function resets all checkboxes and empties the array after a recipe is submitted */
  resetRecipe() {
    // debugger
    this.favorites.map((item) => {
      item.checked = false;
    });
    this.selectedItems = [];
    console.log("Array submitted, recipe contents emptied.", this.selectedItems);
  }


}
