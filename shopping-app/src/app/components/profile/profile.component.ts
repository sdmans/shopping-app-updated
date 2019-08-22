import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { Roommate } from '../../shared/roommate';
import { Location } from '../../shared/location';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  roommates: Roommate[];
  locations: Location[];

  constructor(private dbs: DatabaseService) { }

  ngOnInit() {
    /* Retrieves roommates from database service which will eventually be available as an observable on a database */
    this.roommates = this.dbs.getRoommates();
    this.locations = this.dbs.getLocations();
  }

}
