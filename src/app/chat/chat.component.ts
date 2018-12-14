import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { ApiService } from '../api.service';
import { AngularFirestore } from 'angularfire2/firestore';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  items = [];
  temp = false;
  j = 0;
  k = 13;
  msgs;
  name;
  image;
  getMsgs;
  constructor(private afAuth: AngularFireAuth, private api: ApiService, private af: AngularFirestore) {
    this.afAuth.authState.subscribe(
      auth => {
        if ( auth ) {
          this.name = auth.displayName;
          this.image = auth.photoURL;
        }
      }
    );
    this.display();
  }

  ngOnInit() {
  }
  msg() {
    this.af.collection('chat').doc('33AiGwVS0bmp2FSnAMmE').update({
      msgValue: firebase.firestore.FieldValue.arrayUnion(this.msgs)
  });
  }
  display() {
    this.api.getChatData().subscribe(
      data => {  this.getMsgs = data;
                  this.getMsgs = this.getMsgs.msgValue; }
    );
  }
  // msg(msg) {
  //   this.items.push({msgs: msg});
  //   this.msgValue = ' ';
  //   this.k++;
  //   if ( this.k % 10 === 0 || this.temp) {
  //     this.j++;
  //     this.msgValue = ' ';
  //     this.temp = true;
  //   }
  //   this.msgValue = ' ';

  // }

}
