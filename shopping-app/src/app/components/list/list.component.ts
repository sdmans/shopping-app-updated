import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { Output, EventEmitter } from '@angular/core'; //For component interaction
import { Item } from './../../shared/item';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
items$: Item[] = [];
@Output() selectItem = new EventEmitter<Item>();

  constructor(private dbs: DatabaseService) { }

  ngOnInit() {
    this.items$ = this.dbs.retrieveItems();
    console.log(this.items$);
  }

  displayItem(itemData) {
    /* Display data with details at the top of the screen. May also be a drop down box */
    this.dbs.displaySelectedItem(itemData);
  }

  removeItem(event: Event, id, index) {
    /* Right now this just deletes the item based on the ID */
    event.stopPropagation(); //Setting the event to type Event lets you see the stopPropogation available for the method. See example here: https://www.radzen.com/blog/angular-event-bubbling/
    console.log('Removing item...', id);
    console.log("Index is: ", index);
    this.items$.splice(index, 1);
  }

  editItem(event: Event, id) {
    event.stopPropagation();
    console.log('Editing item...', id);
  }

}
