import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators , FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DailyMoodRecordService } from 'src/app/services/daily-mood-record.service';

@Component({
  selector: 'app-create-record',
  templateUrl: './create-record.component.html',
  styleUrls: ['./create-record.component.css']
})
export class CreateRecordComponent implements OnInit {

  createNewRecord: FormGroup;
  submitted= false;
  id: string | null;
     
  constructor( private fb: FormBuilder, private _moodListService: DailyMoodRecordService,
    private router: Router,
    private aRoute: ActivatedRoute) {
    this.createNewRecord = this.fb.group({
      date: ['', Validators.required],
      time: ['', Validators.required],
      scale: ['', Validators.required],
      keywords: ['', Validators.required],
      event: ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id);


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
    this.router.navigate(['/list-days'])
  }).catch(error=>{
    console.log(error);
  }) 
}
}
