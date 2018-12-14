import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private afauth: AngularFireAuth, private api: ApiService, private router: Router) {
  }

  loginButton = true;
  userData;
  name;

  doGoogleLogin() {
    this.api.login().then(
      data => { console.log('logged in');
       this.router.navigate(['./chat']);
    }
    );
    }
  logout() {
  this.afauth.auth.signOut().then(
     () => { this.router.navigate(['/app']); }
  );
  }
}
