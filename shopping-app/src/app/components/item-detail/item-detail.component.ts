import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { Item } from '../../shared/item';
/* Imports for routable component */
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  item: Item = {
    name: "",
    link: "#",
    image: "http://via.placeholder.com/400x200",
    description: "",
    category: "",
    note: ""
  }

  constructor(private route: ActivatedRoute, private location: Location, private dbs: DatabaseService) { }

  ngOnInit() {
    console.log(this.item);
    if (this.item.name === "") {
      // this.route.paramMap.subscribe(params => {
      //   console.log(params["params"].id);
      //   let itemId = params["params"].id;
      //   console.log(this.dbs.getItemById(itemId));
      //   this.item = this.dbs.getItemById(itemId);
      // });
      this.getItem();
    }
  }

  getItem() {
    const id = this.route.snapshot.paramMap.get('id');
    this.dbs.itemId = id;
    console.log(id);
  }

}
