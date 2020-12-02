import { Injectable} from '@angular/core';




 @Injectable()
 export class DataService{

    inputdata:string;


    getTextData(data){

        this.inputdata = data;

    }
 }