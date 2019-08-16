import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { Item } from '../shared/item';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
SelectedItem$: Item;
  

  constructor(dbs: DatabaseService) { }

  ngOnInit() {
  }

}
