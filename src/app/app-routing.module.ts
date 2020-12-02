import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeriesComponent } from './components/series/series.component';
import { PhonenumberComponent } from './components/phonenumber/phonenumber.component';
import { Component5Component } from './components/component5/component5.component';


const routes: Routes = [
 
 {path:'',component:SeriesComponent},
 {path:'phonenumber',component:PhonenumberComponent},
 {path:'component',component:Component5Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
