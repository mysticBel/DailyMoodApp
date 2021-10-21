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
      // console.log(data);
      this.moodListArray = [];
      data.forEach((e:any) => {
        //  console.log(e.payload.doc.id);  
        //  console.log(e.payload.doc.data());  Shows array in console

        this.moodListArray.push({
          id: e.payload.doc.id,
          ...e.payload.doc.data()    //The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
        })
      });
      console.log(this.moodListArray);
    })
  }

  deleteMoodRecord(id:string){
    this._moodListService.deleteMoodRecord(id).then(() => {
      console.log('deleting record succesfully')
    }).catch(error => {
      console.log(error);
    })

  }
}
