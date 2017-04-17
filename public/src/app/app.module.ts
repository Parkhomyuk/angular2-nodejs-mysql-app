import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TablesComponent } from './tables/tables.component';
import {FirebaseService} from "../services/firebase.service";
import {AngularFireModule} from "../../node_modules/angularfire2/angularfire2";
import {ExpressService} from "../services/express.service";
import {FullnamePipe} from "../pipes/fullname.pipe";

import { PaginationComponent } from './pagination/pagination.component';
import { NavbarComponent } from './navbar/navbar.component';
import {InMemoryWebApiModule} from "../../node_modules/angular2-in-memory-web-api/src/index";


import { NavsideComponent } from './navside/navside.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule} from "../../node_modules/@angular/router/src/router_module";
import { routes } from "./app.routes";
import { MainComponent } from './main/main.component';
import {ItemData} from "./sample01_inMemServer/inMemoryServer";






export const firebaseConfig = {
  apiKey: "AIzaSyAJEpuBsjuUhoim6zvs4QbhhPJ1QSXs9xY",
  authDomain: "formula-9676e.firebaseapp.com",
  databaseURL: "https://formula-9676e.firebaseio.com",
  storageBucket: "formula-9676e.appspot.com",
  messagingSenderId: "266776398127"
};
export const firebaseAuthConfig ={
  /* provider:AuthProviders.Google,
   method: AuthMethods.Popup*/
};

@NgModule({
  declarations: [
    AppComponent,
    TablesComponent,
    FullnamePipe,
    PaginationComponent,
    NavbarComponent,
    NavsideComponent,
    DashboardComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    RouterModule.forRoot(routes),
   /* InMemoryWebApiModule.forRoot(ItemData),*/
   /* InMemoryServerModule*/
  ],
  providers: [ExpressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
