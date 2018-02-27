import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  message:string = ' Eugene is awsome ngler !!!';
  toggle:boolean = false;
  log = [  ];

  onLogDetails () {
     this.toggle = !this.toggle;   
     this.log.push(this.message);
     console.log( 'clicked !!! ')
  }

  getFgColor (){
    console.log( 'getColor called !!! ')
    return 'white';
  }
  

  getBgColor (){
    console.log( 'getColor called !!! ')
    return 'blue';
  }
  
}