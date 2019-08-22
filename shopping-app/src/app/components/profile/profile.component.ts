import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { Roommate } from '../../shared/roommate';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  roommates: Roommate[] = [];
  locations = [];

  constructor(private dbs: DatabaseService) { }

  ngOnInit() {
    console.log(this.dbs.getLocations());
    console.log(this.dbs.getRoommates());
  }

}
