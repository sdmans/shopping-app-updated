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
  selectedItems: Item[] = [];
  newRecipe: {
    name: '',
    items: []
  };

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

  submitRecipe() {
    // this.favorites.map((item) => {
    //   if(item.checked) {
    //     this.selectedItems.push(item);
    //   } else {
    //     console.log('No items selected!');
    //   }
    // });
    // if(this.selectedItems.length > 0) {
    //   console.log(this.newRecipe);
    //   this.resetCreateRecipe();
    // } else {
    //   console.log('Recipe is empty, no items selected!');
    // }
  }

  /* Function resets all checkboxes and empties the array after a recipe is submitted */
  resetCreateRecipe() {
    this.favorites.map((item) => {
      item.checked = false;
    });
    this.selectedItems = [];
    this.newRecipe.items = [];//Setting the array's length to zero removes the current contents of the array.
    console.log("Array submitted, recipe contents emptied.", this.newRecipe);
  }


}
