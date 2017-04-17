import {Injectable} from '@angular/core'
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';


import { AuthProviders, AuthMethods } from 'angularfire2';

import {Users} from "../app/tables/classes/tables1";
import User = firebase.User;



@Injectable()
export class FirebaseService{

  users: FirebaseListObservable<Users[]>;
  users_reserve: FirebaseListObservable<Users[]>;
  name:any;
  toggle:boolean=true;



  constructor(private _af:AngularFire){
    this._af.auth.subscribe(auth => {
      if(auth) {
         this.name=auth;
      }
    });


  }



  getUsers(){
    this.users=this._af.database.list('/table_zima') as FirebaseListObservable<Users[]>
    return this.users;
  }

  addUsers(user){
    return  this.users.push(user);
  }

  updateUsers(key, user){

    /*var user={
      id:id,
      fullName:fullName,
      profile:profile
    }*/
  return this.users.update(key, user);
/*   return console.log(key+" - "+id+'  '+fullName+''+profile);*/

  }






  deleteUser(user){
    let u:Array<Users>;
    let keyS:any;
    this.users_reserve=this._af.database.list('table_reverse') as FirebaseListObservable<Users[]>
    this.users=this._af.database.list('/table_zima') as FirebaseListObservable<Users[]>
    this.users_reserve.push(user);


    return this.users.remove(user.$key);

  }

  togleMenu(){
   return this.toggle=!this.toggle;
  }
}

