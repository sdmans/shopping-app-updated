import { Component, OnInit } from '@angular/core';
import { Roommate } from '../../shared/roommate';
import { Location } from '../../shared/location';
import { DatabaseService } from '../../services/database.service';

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

roommates$: Roommate[];
locations$: Location[];

  constructor(private dbs: DatabaseService) { }

  ngOnInit() {
    this.roommates$ = this.dbs.getRoommates();
    this.locations$ = this.dbs.getLocations();
  }

  addRoommate() {
    const newRoommate = {
      name: this.roommateName,
      value: (this.roommates$.length + 1)
    }
    if (this.roommateName.length > 0) {
      this.dbs.addRoommate(newRoommate);
      this.roommateName = "";
    } else {
      console.log("Name does not meet minimum requirements!");
    }
  }

  addLocation(): void {

    if(this.locationName.length > 0 && this.locationAddress.length > 0) {
      const newLocale = {
        name: this.locationName,
        address: this.locationAddress,
        website: this.locationLink
      }
      this.dbs.addLocation(newLocale);
      this.locationName = "";
      this.locationAddress = "";
      this.locationLink = "";
    }
    else {
      console.log("Make sure you've added a name and location for the new store!");
    }
  } 

}
