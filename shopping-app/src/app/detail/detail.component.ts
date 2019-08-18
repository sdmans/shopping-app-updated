import { SubmitComponent } from './../components/submit/submit.component';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { Item } from '../shared/item';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
item$: Item;
  

  constructor(private dbs: DatabaseService) { }

  ngOnInit() { 
    this.item$ = this.dbs.getSelectedItem();
  }

}
