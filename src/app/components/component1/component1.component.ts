import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
data:string;
  constructor( private dataService : DataService) { }

  ngOnInit(): void {
    this.data = this.dataService.inputdata;
  }

}
