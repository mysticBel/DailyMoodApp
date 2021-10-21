import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DailyMoodRecordService {

  // making the request to backend
  constructor(private firestore: AngularFirestore) { }

  createMoodRecord(moodList:any): Promise<any>{
   return this.firestore.collection('DB_MoodList').add(moodList);
  }

 
}
