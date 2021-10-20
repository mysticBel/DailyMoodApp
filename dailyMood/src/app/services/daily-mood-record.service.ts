import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DailyMoodRecordService {

  // making the request to backend
  constructor(private firestore: AngularFirestore) { }

 
}
