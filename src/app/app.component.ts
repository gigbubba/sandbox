import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username:String         = 'Eugene Kirillov';
  isUsernameEmpty:boolean = false;
  message:string = '';

  resetUsername () {
     this.username = '';
     this.message = 'Username is reset !!! ';
     this.isUsernameEmpty = true;
  }

  onUpdateUsername () {
    if ( !this.username || this.username.length === 0 ){
       this.isUsernameEmpty = true;
    }else{
      this.isUsernameEmpty = false; 
      this.message = '';
    }
  }
}