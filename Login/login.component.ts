import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { UserService } from '../Services/user.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as Firebase from 'firebase/app';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-login-form',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  user: Observable<Firebase.User>;
  authenticated: boolean = false;
  name: string;
  email: string;
  constructor(private router: Router, private af: AngularFireAuth) {
    this.af.authState.subscribe((auth) => {
      console.log(auth);
      console.log(af.authState);
      if (auth != null) {
        this.name = auth.displayName;
        localStorage.setItem("username",this.name);
        localStorage.setItem("useremail",this.email);
        this.user = af.authState;
        console.log(this.user);
        this.authenticated = true
      }
    })
  }
  login() {
    this.af.auth.signInWithPopup(new Firebase.auth.GoogleAuthProvider()).then((res) => {
      if (res.user.emailVerified) {
        this.router.navigate(['home']);
      }
    });
  }

  logout() {
    this.af.auth.signOut();
    this.authenticated = false;
    this.router.navigate(['login']);
  }
}

