import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { Item } from './../../shared/item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
items$: Item[] = [];

  constructor(private db: DatabaseService) { }

  ngOnInit() {
    this.items$ = this.db.retrieveItems();
    console.log(this.items$);
  }

  displayItem(itemData) {
    /* Display data with details at the top of the screen. May also be a drop down box */
    console.log(itemData);
  }

  removeItem(item) {
    console.log('Removing item...', item);
  }

}
