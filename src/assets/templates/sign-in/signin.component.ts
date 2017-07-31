import { Component } from '@angular/core';
import {SigninService} from './signin.service';
import {Observable} from "rxjs/Observable";

@Component({
	selector: 'sign-in',
	styleUrls: ['./signin.component.css'],
	templateUrl: 'signin.component.html',
  providers: [SigninService]

})

export class SigninComponent {
user: Observable<firebase.User>;

  constructor(private signSvc: SigninService){
    this.user = this.signSvc.user;
  }

  login()
  {
    this.signSvc.login();
  }
  logout()
  {
    this.signSvc.logout();
  }

}
