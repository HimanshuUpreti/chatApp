import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private afauth: AngularFireAuth,  private af: AngularFirestore) {}
  login() {
    return this.afauth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  getChatData() {
    return this.af.collection('chat').doc('33AiGwVS0bmp2FSnAMmE').valueChanges();
  }

}
