import { Component, OnInit, Input } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { Item } from '../../shared/item';
/* Imports for routable component */
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
@Input() item: Item = {
  name: "",
  link: "#",
  image: "http://via.placeholder.com/400x200",
  description: "",
  category: "",
  note: ""
}
  

  constructor(private route: ActivatedRoute, private location: Location, private dbs: DatabaseService) {
     
  }

  ngOnInit() { 
  }

}
