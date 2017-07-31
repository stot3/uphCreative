import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdCardModule, MdInputModule, MdButtonModule } from '@angular/material';
import { NavigationComponent } from '../assets/templates/navigation/navigation.component';
import { ProductEntryComponent } from '../assets/templates/product-entry/product-entry.component';
import { RouterModule, Routes } from '@angular/router';
import { MainContentWrapper } from '../assets/templates/main-content/main-content.component';
import { SigninComponent } from '../assets/templates/sign-in/signin.component'
import {environment} from "../environments/environment";


const appRoutes: Routes = [
	{
		path: 'product-entry',
		component: ProductEntryComponent
	},
	{
		path: 'signin',
		component: SigninComponent
	}


];

@NgModule({
  declarations: [
    AppComponent,
	NavigationComponent,
	ProductEntryComponent,
	MainContentWrapper,
	SigninComponent
  ],

  imports: [
  BrowserModule,
	BrowserAnimationsModule,
  AngularFireModule.initializeApp(environment.firebase),
  AngularFireDatabaseModule,
  AngularFireAuthModule,
	MdToolbarModule,
	MdCardModule,
	MdInputModule,
  MdButtonModule,
	RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
