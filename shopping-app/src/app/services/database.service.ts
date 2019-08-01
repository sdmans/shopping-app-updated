import { Injectable } from '@angular/core';
import { Item } from '../shared/item';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  items$: Item[] = [];

  constructor() { }

  addItem(item): void {
    this.items$.push(item);
    console.log(this.items$);
  }
}
