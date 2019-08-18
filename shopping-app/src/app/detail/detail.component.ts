import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { Item } from '../shared/item';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
item$: Item = {
  name: "",
  link: "#",
  image: "http://via.placeholder.com/400x200",
  description: "",
  category: "",
  note: ""
}
  

  constructor(dbs: DatabaseService) { }

  ngOnInit() {
  }

}
