import { Injectable } from '@angular/core';
import { Item } from '../shared/item';
import { Roommate } from '../shared/roommate';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  items$: Item[] = [
    {
    name: 'Eggs',
    link: 'https://shop.safeway.com/product-details.138350308.html',
    image: 'https://images.unsplash.com/photo-1491524062933-cb0289261700?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80',
    description: 'A dozen eggs for scramblin',
    note: 'Get the cage free kind!',
    category: 'food',
    id: 'abc'
    },
    {
    name: 'Pasta',
    link: 'https://www.instacart.com/shopping/products/2595731-barilla%C2%AE-whole-grain-pasta-penne-16-oz?rid=190&utm_source=instacart_google&utm_medium=sem_shopping&utm_campaign=ad_demand_prospecting_shopping&device_id=EAIaIQobChMIjtfekfvj4wIVwpyzCh3KSgXZEAQYAiABEgJvhfD_BwE&utm_source=instacart_google&utm_medium=paid_search_nonbrand&utm_campaign=ad_demand_shopping_food_ma_boston_newengen?ko_click_id=ko_b3c65d440e50c02fc&utm_medium=paid_search&utm_source=instacart_google&utm_campaign=ad_demand_prospecting&utm_term=&gclid=EAIaIQobChMIjtfekfvj4wIVwpyzCh3KSgXZEAQYAiABEgJvhfD_BwE',
    image: 'https://images.unsplash.com/photo-1551462147-37885acc36f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
    description: 'Whole grain penne pasta',
    note: 'Make sure to get whole grain, it should be in a darker brown color!',
    category: 'food',
    id: 'def'
    },
    {
      name: 'Shampoo',
      link: 'https://www.headandshoulders.com/en-us/shop-products/dandruff-shampoo/smooth-and-silky-shampoo',
      image: 'https://azcdn.hubble.pgsitecore.com/en-us/-/media/HeadandShoulders/Images/Products/2018/bali_ii/1600/00037000733393_00037000733393_C1N1_NA_1.jpg?w=460&v=1-201901041204',
      description: 'Head and Shoulders Shampoo',
      note: "Get the silky shampoo kind, if they don't have it, you can get the mint kind!",
      category: 'Hygiene',
      id: 'ghi'

    }
];

roommates: Roommate[] = [
  {
    name: "Sam",
    value: 1
  },
  {
    name: "Rey",
    value: 2
  },
  {
    name: "Matt",
    value: 3
  }, {
    name: "Zack",
    value: 4
  } 
];

locations = [
  {
    name: "Safeway",
    address: "123 Fake Street, New York",
    website: "#",
  },
  {
    name: "Stop & Shop",
    address: "345 Madeup Avenue, Milwaukee",
    website: "#",
  },
  {
    name: "Wegmans",
    address: "678 OutofIdeas Way, Kansas",
    website: "#",
  },
];

selectedItem$: Item;

  constructor() { }

  addItem(item): void {
    this.items$.push(item);
    console.log(this.items$);
  }

  retrieveItems() {
    return this.items$;
  }

  getRoommates() {
    return this.roommates;
  }

  getLocations() {
    return this.locations;
  }

  addRoommate(newRoommate: Roommate) {
    this.roommates.push(newRoommate);
  }

  addLocation() {
    
  }

  setSelectedItem(item: Item) {
    this.selectedItem$ = item;
    console.log(this.selectedItem$);
    return this.selectedItem$;
  }

  getSelectedItem() {
    // const selectedItemObservable = of(this.selectedItem$);
    // return selectedItemObservable;
    return this.selectedItem$;
  }
}
