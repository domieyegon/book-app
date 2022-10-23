import { Component, OnInit } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { User } from 'src/app/model/user';

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

  errorMessage = '';
  errorCode = '';
  isLoading:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  login() {

    if(this.isLoading) return;

    this.isLoading = true;
    this.errorMessage = '';
    this.errorCode = '';

    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.user.email, this.user.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);

        // ...
      })
      .catch((error) => {
        this.errorCode = error.code;
        this.errorMessage = error.message;
      })
      .finally(()=> this.isLoading = false);
  }

}
