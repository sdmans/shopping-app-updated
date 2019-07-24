import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
/* map is an operator that transforms data by applying a function. More about Map here https://blog.angularindepth.com/reading-the-rxjs-6-sources-map-and-pipe-94d51fec71c2 */  
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { filter } from 'rxjs/operators';
/* Of emits any number of provided values in sequence. More about the 'of' operator here: https://www.learnrxjs.io/operators/creation/of.html */
import { of } from 'rxjs';

export interface Comment { comment: string, name: string, userId: string, id: string}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopping-app';
  $comments: Observable<Comment[]>;

  constructor(private afs: AngularFirestore) {
    this.$comments = this.afs.collection<Comment>('comments').valueChanges();
  }

  ngOnInit() {
    this.$comments.subscribe(data => console.log(data));
  }
}
