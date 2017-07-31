import { Injectable } from '@angular/core';
import { User } from './user';
import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
@Injectable()


export class SigninService {
  user: Observable<firebase.User>;
  userAuth: User;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;

  }


  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      _ => this.afAuth.auth.onAuthStateChanged(function (user) {
        if (user) {
          // User is signed in.
          this.userAuth.displayName = user.displayName;
          this.userAuth.email = user.email;
          this.userAuth.emailVerified = user.emailVerified;
          this.userAuth.photoUrl = user.photoURL;
          this.userAuth.isAnonynous = user.isAnonymous;
          this.userAuth.uid = user.uid;

        } else {
          // User is signed out.
          // ...
        }
      })
    );
  }


  logout() {
    this.afAuth.auth.signOut();
  }

  getUid() {
    if (this.afAuth.auth.currentUser.uid !== null) {
      this.afAuth.auth.currentUser.uid
    }
  }
}
