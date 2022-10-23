import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  passwordMatched:boolean = true;

  user: User = {
    email: '',
    password: '',
    confirmPassword: '',
  }

  constructor() { }

  register() {

    if(this.user.password !== this.user.confirmPassword){
      this.passwordMatched = false;
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.user.email, this.user.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  ngOnInit(): void {
  }

}
