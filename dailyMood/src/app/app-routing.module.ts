import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRecordComponent } from './components/create-record/create-record.component';
import { ListDaysComponent } from './components/list-days/list-days.component';

const routes: Routes = [
  { path: '', redirectTo: 'overview' , pathMatch: 'full' },
  { path: 'overview', component:ListDaysComponent },
  { path: 'add-record', component:CreateRecordComponent },
  { path: '**', redirectTo: 'overview' , pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
