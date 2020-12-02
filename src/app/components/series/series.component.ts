import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  seriesForm: FormGroup;
  number:number;
  showResult = false;

  constructor() { 
    this.seriesForm = new FormGroup({
      'index': new FormControl(''),

    });
  }

  data = [
    {
      id:1,
      number:2
    },
    {
      id:2,
      number:3
    },
    {
      id:3,
      number:10
    },
    {
      id:4,
      number:15
    },
    {
      id:5,
      number:26
    },
    {
      id:6,
      number:35
    },
    {
      id:7,
      number:50
    },
    {
      id:8,
      number:63
    },
  ]

  getIndex(){
    const index = this.seriesForm.value.index;

    for(let i = 0 ; i<this.data.length;i++){
      if(index === this.data[i].id){
        this.number= this.data[i].number;
        this.showResult = true
        break;
      }
    }

  }

  ngOnInit(): void {
  }

}
