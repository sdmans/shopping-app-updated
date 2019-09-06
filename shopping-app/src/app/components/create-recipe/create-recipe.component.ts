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
  form: FormGroup;
  favorites: Item[];


  constructor(private itemService: ItemService, private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      favorites: new FormArray([])
    })
  }

  ngOnInit() {
    this.favorites = this.itemService.getFavorites();
  }

  addCheckboxes() {
    this.favorites.map((o, i) => {
      const control = new FormControl(i === 0);
      (this.form.controls.favorites as FormArray).push(control);
    })
  }

  submit() {
    const selectedItemIds = this.form.value.orders
    .map((v, i) => v ? this.favorites[i].id : null)
    .filter(v => v !== null);
    console.log(selectedItemIds);
  }

}
