import { Component, OnInit } from '@angular/core';
import { Roommate } from '../../shared/roommate';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
roommateName = "";
locationName = "";
locationAddress = "";
locationLink = "";

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

  addLocation(): void {
    const newLocale = {
      name: this.locationName,
      address: this.locationAddress,
      website: this.locationLink
    }
    this.locations.push(newLocale);
    this.locationName = "";
    this.locationAddress = "";
    this.locationLink = "";
  }

}
