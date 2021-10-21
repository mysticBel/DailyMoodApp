import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators , FormBuilder } from '@angular/forms';
import { DailyMoodRecordService } from 'src/app/services/daily-mood-record.service';

@Component({
  selector: 'app-create-record',
  templateUrl: './create-record.component.html',
  styleUrls: ['./create-record.component.css']
})
export class CreateRecordComponent implements OnInit {

  createNewRecord: FormGroup;
  submitted= false;
     
  constructor( private fb: FormBuilder, private _moodListService: DailyMoodRecordService ) {
    this.createNewRecord = this.fb.group({
      date: ['', Validators.required],
      time: ['', Validators.required],
      scale: ['', Validators.required],
      keywords: ['', Validators.required],
      event: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

addNewRecord(){
  this.submitted = true;
  if(this.createNewRecord.invalid){
    return;
  }
  const moodRecord: any = {
    date: this.createNewRecord.value.date,
    time: this.createNewRecord.value.time,
    scale: this.createNewRecord.value.scale,
    keywords: this.createNewRecord.value.keywords,
    event: this.createNewRecord.value.event,
    creationDate: new Date(),
    updateDate: new Date()

  }
  // console.log(this.createNewRecord)
  // data that will be sent to Firestore :D
  // console.log(moodRecord);
  this._moodListService.createMoodRecord(moodRecord).then(() => {
    console.log('mood list saved successfully');
  }).catch(error=>{
    console.log(error);
  }) 
}
}
