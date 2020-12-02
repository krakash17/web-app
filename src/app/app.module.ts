import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeriesComponent } from './components/series/series.component';
import { PhonenumberComponent } from './components/phonenumber/phonenumber.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component1Component } from './components/component1/component1.component';
import { Component2Component } from './components/component2/component2.component';
import { Component3Component } from './components/component3/component3.component';
import { Component4Component } from './components/component4/component4.component';
import { Component5Component } from './components/component5/component5.component';
import { DataService } from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent,
    PhonenumberComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    Component4Component,
    Component5Component
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DataService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
