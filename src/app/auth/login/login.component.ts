import { Component, OnInit } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { User } from 'src/app/model/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    email: '',
    password: ''
  };

  constructor(private authService:AuthService) { }

  login() {
    this.authService.login(this.user);
  }

  ngOnInit(): void {
  }


  isLoading(){
    return this.authService.isLoading;
  }


  errorMessage(){
    return this.authService.errorMessage;
  }

}
