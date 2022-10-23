import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  errorMessage = '';
  errorCode = '';
  isLoading: boolean = false;
  passwordMatched: boolean = true;
  isAuthenticated: boolean = false;

  constructor(private router: Router) { }

  login(user: User) {

    if (this.isLoading) return;

    this.isLoading = true;
    this.errorMessage = '';
    this.errorCode = '';

    const auth = getAuth();
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        this.isAuthenticated = true;
        this.router.navigate(['']);
      })
      .catch((error) => {
        this.errorCode = error.code;
        this.errorMessage = error.message;
        this.isAuthenticated = false;
      })
      .finally(() => this.isLoading = false);
  }

  register(user: User) {

    if (this.isLoading) return;

    this.isLoading = true;

    this.errorMessage = '';
    this.errorCode = '';

    if (user.password !== user.confirmPassword) {
      this.passwordMatched = false;
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {

        const user = userCredential.user;

        this.isAuthenticated = true;
      })
      .catch((error) => {
        this.errorCode = error.code;
        this.errorMessage = error.message;
        this.isAuthenticated = false;
      })
      .finally(() => this.isLoading = false);
  }

  logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      this.isAuthenticated = false;
      this.router.navigate(['login']);
    }).catch((error) => {
      this.errorCode = error.code;
      this.errorMessage = error.message;
      this.isAuthenticated = true;
    });

  }
}
