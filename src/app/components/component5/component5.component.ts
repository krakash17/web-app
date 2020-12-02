import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-component5',
  templateUrl: './component5.component.html',
  styleUrls: ['./component5.component.css']
})
export class Component5Component implements OnInit {

  textForm: FormGroup;
  showResult = false;

  constructor( private dataService : DataService) { 
    this.textForm = new FormGroup({
      'text': new FormControl(''),

    });
  }

  getSubmitData(){
    const data = this.textForm.value.text;
    this.dataService.getTextData(data);




  }

  ngOnInit(): void {
  }

}
