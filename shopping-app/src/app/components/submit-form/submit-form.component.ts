import { Component, OnInit } from '@angular/core';

import { Item } from '../../shared/item';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.scss']
})
export class SubmitFormComponent implements OnInit {
  private _item: Item;
  item: Item = {
    name: 'eggs',
    link: 'https://shop.safeway.com/product-details.138350308.html',
    image: 'https://images.unsplash.com/photo-1491524062933-cb0289261700?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80',
    category: 'food'
  }; //Needs a name, link, image and category at a minimum to display properly

   _categories = [
    "food",
    "drinks",
    "cleaning",
    "hygiene",
    "toiletries",
    "cooking",
    "supplies"
  ];

  constructor() { }

  ngOnInit() {
  }

}
