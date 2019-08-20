import { Component, OnInit } from '@angular/core';
import { Roommate } from '../../shared/roommate';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
roommateName = "";
placeAddress = "";
placeLink = "";

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

places = [
  {
    address: "123 Fake Street, New York",
    website: "#",
  },
  {
    address: "345 Madeup Avenue, Milwaukee",
    website: "#",
  },
  {
    address: "678 OutofIdeas Way, Kansas",
    website: "#",
  },
];

  constructor() { }

  ngOnInit() {
  }

  addRoommate() {
    const newRoommate = {
      name: this.roommateName,
      value: (this.roommates.length + 1)
    }
    if (this.roommateName.length > 0) {
      this.roommates.push(newRoommate);
      this.roommateName = "";
    } else {
      console.log("Name does not meet minimum requirements!");
    }
  }

  addPlace(): void {
    const newPlace = {
      address: this.placeAddress,
      website: this.placeLink
    }
    this.places.push(newPlace);
    this.placeAddress = "";
    this.placeLink = "";
  }

}
