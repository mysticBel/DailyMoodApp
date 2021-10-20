import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators , FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-record',
  templateUrl: './create-record.component.html',
  styleUrls: ['./create-record.component.css']
})
export class CreateRecordComponent implements OnInit {

  createNewRecord: FormGroup;
  submitted: boolean = false;
     
  constructor( private fb: FormBuilder) {
    this.createNewRecord = this.fb.group({
      date: ['', Validators.required],
      time: ['', Validators.required],
      scale: ['', Validators.required],
      keywords: ['', [Validators.required, Validators.maxLength(7) ]],
      event: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

addNewRecord(){
  console.log(this.createNewRecord)
}
}
