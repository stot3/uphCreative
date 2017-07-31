import { Component } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { ProductForm } from './product-form';
import { SigninService } from '../sign-in/signin.service';
import {AngularFireAuth} from 'angularfire2/auth';


@Component({
	selector: 'product-entry',
	templateUrl: 'product-entry.component.html',
	styleUrls: ['product-entry.component.css'],
  providers: [SigninService]

})

export class ProductEntryComponent {
  products= new ProductForm();
  basePath = `users/`;
  productsList: FirebaseListObservable<any>;
  uid: string;



	constructor(private db: AngularFireDatabase, private auth: AngularFireAuth){

    this.productsList = this.db.list(`${this.basePath}/products/`);
    if(auth.auth.currentUser.uid) {
      this.uid = auth.auth.currentUser.uid;
    }
  }

  save(products: ProductForm){
	  if(this.uid != null){
	    console.log(this.uid);
	    this.basePath += this.uid;
	    console.log(this.basePath);
      this.productsList.push(products).then(() => console.log(this.uid),
        (error) => console.log(error));
    }
    else{
      console.log('please wait a moment');
    }


  }

}
