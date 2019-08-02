import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Item } from '../../shared/item';
import { Observable } from 'rxjs';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {
  items$: Item[] = [];
  options: FormGroup;
  item: Item = {
    name: 'eggs',
    link: 'https://shop.safeway.com/product-details.138350308.html',
    image: 'https://images.unsplash.com/photo-1491524062933-cb0289261700?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80',
    description: 'A dozen cage free eggs',
    category: 'food'
  };;

  constructor(private db: DatabaseService) {
  }

  ngOnInit() {
    this.items$ = this.db.retrieveItems();
  }

  displayItem(itemData) {
    /* Display data with details at the top of the screen. May also be a drop down box */
    console.log(itemData);
  }

}
