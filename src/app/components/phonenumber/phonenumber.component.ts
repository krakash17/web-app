import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-phonenumber',
  templateUrl: './phonenumber.component.html',
  styleUrls: ['./phonenumber.component.css']
})
export class PhonenumberComponent implements OnInit {

  numberForm: FormGroup;
  number = false;

  constructor(private fb:FormBuilder) { 
    this.numberForm = this.fb.group({
      numberN:this.fb.array([this.fb.group({number:''})])
    });
  }
  get numbers() {
    return this.numberForm.get('numberN') as FormArray;
  }
  addNumber() {
    this.numbers.push(this.fb.group({numbergit:''}));
  }

  deleteNumber(index) {
    this.numbers.removeAt(index);
  }


  getNumber(){
    this.number = true;

  }

  ngOnInit(): void {
  }

}
