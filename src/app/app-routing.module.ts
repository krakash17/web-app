import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeriesComponent } from './components/series/series.component';
import { PhonenumberComponent } from './components/phonenumber/phonenumber.component';


const routes: Routes = [
 
 {path:'',component:SeriesComponent},
 {path:'phonenumber',component:PhonenumberComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
