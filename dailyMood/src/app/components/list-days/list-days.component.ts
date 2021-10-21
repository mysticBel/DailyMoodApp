import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { DailyMoodRecordService } from 'src/app/services/daily-mood-record.service';



@Component({
  selector: 'app-list-days',
  templateUrl: './list-days.component.html',
  styleUrls: ['./list-days.component.css']
})
export class ListDaysComponent implements OnInit {
  // items: Observable<any[]>;
  // constructor(firestore: AngularFirestore) { 
  // this.items = firestore.collection('items').valueChanges();
  // }
 moodListArray : any[] = [];
  constructor(private _moodListService:DailyMoodRecordService ) { 
  }


  ngOnInit(): void {
    this.getMoodRecord()
  }
  getMoodRecord(){
    this._moodListService.getMoodRecord().subscribe(data => {
      console.log(data);
    })
  }
}
