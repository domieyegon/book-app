import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  user: User = {
    email: '',
    password: '',
    confirmPassword: '',
  }


  constructor(private authService: AuthService) { }


  register() {
    this.authService.register(this.user);
  }

  ngOnInit(): void {
  }

  isLoading(){
    return this.authService.isLoading;
  }


  errorMessage(){
    return this.authService.errorMessage;
  }

  passwordMatched(){
    return this.authService.passwordMatched;
  }

}
