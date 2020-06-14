import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  
  signupForm = new FormGroup({
    username : new FormControl('',[Validators.email, Validators.required]),
    password : new FormControl('',[Validators.required]) 

  })
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor(private route:Router) {

   }

  ngOnInit(): void {
    
  }

  onSubmit(){
    if(this.signupForm.value){
      console.log('loginform');
      this.route.navigate(['/main'])
    }
  }
}
