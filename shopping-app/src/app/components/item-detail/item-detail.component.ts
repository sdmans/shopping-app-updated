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
    /* Checks if the item detail is set to the default value, then retrieves the item */
      this.getItem();
  }

  getItem() {
    const id = this.route.snapshot.paramMap.get('id');
    this.item = this.dbs.getItemById(id);
  }

  goBack(): void {
    this.location.back();
  }

}
