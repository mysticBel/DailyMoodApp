import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from '@firebase/util';

@Injectable({
  providedIn: 'root'
})
export class DailyMoodRecordService {

  // making the request to backend
  constructor(private firestore: AngularFirestore) { }

  createMoodRecord(moodList:any): Promise<any>{
   return this.firestore.collection('DB_MoodList').add(moodList);
  }

  // get data from Firestore
  getMoodRecord(){
   // makes petition to the collection 
   return this.firestore.collection('DB_MoodList', ref => ref.orderBy('date' , 'asc')).snapshotChanges();} 

  //deletes data using id 
  deleteMoodRecord(id: string): Promise<any> {
    return this.firestore.collection('DB_MoodList').doc(id).delete();
  }

  // get data from Firestore for EDItinG !!
  getAgainMoodRecord(id: string){
    return this.firestore.collection('DB_MoodList').doc(id).snapshotChanges();
  }
 
  updateMoodRecord(id: string,data: any): Promise<any>{
    return this.firestore.collection('DB_MoodList').doc(id).update(data);
  }
}
