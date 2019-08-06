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

  removeItem(event: Event, id) {
    /* Right now this just deletes the item based on the ID */
    event.stopPropagation(); //Setting the event to type Event lets you see the stopPropogation available for the method. See example here: https://www.radzen.com/blog/angular-event-bubbling/
    console.log('Removing item...', id);
  }

}
