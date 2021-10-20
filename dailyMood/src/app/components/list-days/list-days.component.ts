import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-list-days',
  templateUrl: './list-days.component.html',
  styleUrls: ['./list-days.component.css']
})
export class ListDaysComponent implements OnInit {
  items: Observable<any[]>;
  constructor(firestore: AngularFirestore) { 
  this.items = firestore.collection('items').valueChanges();
  }
  ngOnInit(): void {
  }

}
