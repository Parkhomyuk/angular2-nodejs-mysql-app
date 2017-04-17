import { Component, OnInit } from '@angular/core';
import {Users} from "./classes/tables1";
import {heroes} from '../tables/classes/heroes'
import {FirebaseService} from "../../services/firebase.service";
import {AngularFire} from "../../../node_modules/angularfire2/angularfire2";
import {ExpressService} from "../../services/express.service";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {FullnamePipe} from "../../pipes/fullname.pipe";
import {Hiro} from "./classes/hiro";
import {Subject} from "../../../node_modules/rxjs/Subject";
// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';

import 'rxjs/add/operator/distinctUntilChanged';






@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],

})
export class TablesComponent implements OnInit {

  title:string='Members - winter 2015';
  users:Users[];
  usersItems:Users[];


  errorMessage: string;
  user:Users;
  updateopen:string='open';
  filteredItems :Users[];
  items :Users[];
  newId:number=0;
  newFullname:string;
  newProfile:string;


  settings = {
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        class: 'column1'
      },
      fullname: {
        title: 'ФИО',
        type: 'string',
        class: 'column2'
      },
      profile: {
        title: 'Профиль',
        type: 'string',
        class: 'column3'
      }
    }
  }



  pages : number = 4;// is a maximum of Page numbers that can be displayed in pagination bar (it’s the size of ‘pagesIndex’ array).
  pageSize : number = 10; //attribute : indicate the number of entries per page,
  pageNumber : number = 0; //attribute : is the maximum number of page can we deduce from the ‘ users’ in terms of ‘pageSize’ value,
  currentIndex : number = 1;//attribute : is the index of the current selected page,

  pagesIndex : Array<number>; //attribute : have the series of numbers shown in the pagination bar.
  pageStart : number = 1; //attribute : this the start index page in the pagination bar.
  inputName : string;
  private searchTerms = new Subject<string>();
  private searchTerms2 = new Subject<string>();
  users2: Observable<Users[]>;
  users3: Observable<Users[]>;


    constructor(private taskService:ExpressService){
      /*this.refreshItems();*/


    }


  ngOnInit():void {
   /* this.taskService.getTasks()
      .subscribe(tasks => {
       this.users = tasks;
        this.usersp = tasks;
        this.changUser = tasks;
        this.usersItems=tasks;
        this.pageNumber = parseInt(""+ (this.users.length / this.pageSize));
        if(this.usersItems.length % this.pageSize != 0){
          this.pageNumber ++;
        }

        if(this.pageNumber  < this.pages){

          this.pages =  this.pageNumber;

        }
        this.refreshPages();
      });*/
    this.get();
    this.updateopen='close';




  }
get(){
  this.taskService.getTasks()
    .subscribe(tasks => {
      this.users = tasks;
      this.usersItems=tasks;
      this.pageNumber = parseInt(""+ (this.users.length / this.pageSize));
      if(this.usersItems.length % this.pageSize != 0){
        this.pageNumber ++;
      }

      if(this.pageNumber  < this.pages){

        this.pages =  this.pageNumber;

      }
      this.refreshPages();
    });
}

  refreshPages(){

    this.users = this.usersItems.slice((this.currentIndex - 1)*this.pageSize, (this.currentIndex) * this.pageSize);
    this.pagesIndex =  this.fillArray();
    console.log(this.pagesIndex+' это номера страниц');
  }

  fillArray(): any{
    var obj = new Array();
    for(var index = this.pageStart; index< this.pageStart + this.pages; index ++) {

      obj.push(index);

    }

    return obj;

  }
  setPage(index : number){
    this.currentIndex = index;
    this.refreshItems();
  }













  // Push a search term into the observable stream.
  search( ): void {
    console.log(this.inputName + 'component term');
    if(this.inputName!=''){
    this.taskService.search(this.inputName).subscribe(tasks => {
      this.users = tasks;
      this.usersItems=tasks;


      this.pageNumber = parseInt("" + (this.users.length / this.pageSize));
      if (this.usersItems.length % this.pageSize != 0) {
        this.pageNumber++;
      }

      if (this.pageNumber < this.pages) {

        this.pages = this.pageNumber;

      }
      this.users = this.usersItems.slice((this.currentIndex - 1)*this.pageSize, (this.currentIndex) * this.pageSize);
      this.pagesIndex =  this.fillArray();
      console.log(this.pagesIndex+' это номера страниц');
    });
    }else{
      this.getUsers();
    }
  }



  private getUsers() {
    this.taskService.getTasks().subscribe(
      users => this.users = users,
      error => this.errorMessage = error
    );


    this.refreshItems();
  }


  refreshItems(){

   /* this.taskService.getTasks().subscribe(
      users => this.users = users,
      users => this.usersItems = users

    );*/
    this.get();

  }




  onAddUsers(): void {

       let user= new Users(this.newId, this.newFullname, this.newProfile);
      this.taskService.addTask(user).subscribe(task=>{
        this.users.push(task);
      });
   this.refreshItems();
    this.closeAdd();
    this.newFullname='';
    this.newProfile='';
  }

  onDeleteUsers(id): void {
    var tasks = this.users;

    this.taskService.deleteTask(id).subscribe(data => {

        for(var i = 0;i < tasks.length;i++){
          //noinspection TypeScriptUnresolvedVariable
          if(tasks[i].id == id){
            tasks.splice(i, 1);
          }
        }

    });
    this.refreshItems();
  }

  onUpdateUsers(item){
    if(this.newFullname==''){
      this.newFullname=item.fullname;
    }
    if(this.newProfile==''){
      this.newProfile=item.profile;
    }
    let task = {
      id:item.id,
      fullname: this.newFullname,
      profile: this.newProfile
    };

    this.user= new Users(item.id, this.newFullname, this.newProfile);
    console.log(this.user+' update');
    this.taskService.updateStatus(task).subscribe(task=>{
            console.log('This is task' + task);
    });
    this.newFullname='';
    this.newProfile='';
    this.updateFalse(item);
    this.refreshItems();

  }



  orderByDown(param){
    this.taskService.sortByDown(this.users);
    console.log(this.users);
    console.log(param+' this is param');

  }
  orderByUp(param){
    this.taskService.sortByUp(this.users);
    console.log(this.users);
    console.log(param+' this is param');

  }
  orderByDownName(param){
    this.taskService.sortByDownName(this.users);
    console.log(this.users);
    console.log(param+' this is param');

  }
  orderByUpName(param){
    this.taskService.sortByUpName(this.users);
    console.log(this.users);
    console.log(param+' this is param');

  }


 ngDoCheck(){
  this.users;
  this.filteredItems;
   this.newId;
   this.newFullname;
   this.newProfile;
   this.inputName;



  }
  ngAfterContentChecked() {

    console.log('Members content has been Checked');

  }

  ngOnDestroy(){
    this.users = null;
    this.usersItems=null;
  }
  openAdd(){
    if(document.getElementById('addU').hidden==false)
    document.getElementById('addU').hidden=true;
    else
      document.getElementById('addU').hidden=false;
     }
  updateTrue(item) {
    document.getElementById(item.id+'a').hidden=true;
    document.getElementById(item.id+'b').hidden=false;
    document.getElementById(item.id+'c').hidden=false;
    document.getElementById(item.id+'d').hidden=true;
    document.getElementById(item.id+'e').hidden=true;
    document.getElementById(item.id+'f').hidden=false;


  }
  closeAdd(){
    document.getElementById('addU').hidden=true;

  }
  updateFalse(item) {
    document.getElementById(item.id+'a').hidden=false;
    document.getElementById(item.id+'b').hidden=true;
    document.getElementById(item.id+'c').hidden=true;
    document.getElementById(item.id+'d').hidden=false;
    document.getElementById(item.id+'e').hidden=false;
    document.getElementById(item.id+'f').hidden=true;
  }
  sortUp(prop){
    console.log(prop);


  }

  myFunction() {
    var data_type = 'data:application/vnd.ms-excel';
    var table_div = document.getElementById('tableUser');
    var table_html = table_div.outerHTML.replace(/ /g, '%20');

    /*console.log('fff');*/
    var a = document.createElement('a');
    /*console.log(a);*/
    a.href = data_type + ', '+'\uFEFF' + table_html;
    a.download = 'exported_table_' + Math.floor((Math.random() * 9999999) + 1000000) + '.xls';
    a.click();

  }
  /*

   fillArray(): any{
   var obj = new Array();
   for(var index = this.pageStart; index< this.pageStart + this.pages; index ++) {

   obj.push(index);

   }

   return obj;

   }

   deleteT(event){
   this.taskService.deleteTask(event.data.id);

   }
   deleteW(id){
   var tasks = this.users;

   this.taskService.deleteTask(id).subscribe(data => {

   for(var i = 0;i < tasks.length;i++){
   //noinspection TypeScriptUnresolvedVariable
   if(tasks[i].id == id){
   tasks.splice(i, 1);
   }
   }

   });

   }

   onDeleteConfirm(event): void {
   if (window.confirm('Are you sure you want to delete?'+' -'+event.data.fullname)) {
   event.confirm.resolve();
   /!* this.taskService.deleteTask(event.data.id);*!/
   this.deleteW(event);
   console.log(event.data.id);
   console.log(event.data);
   console.log(event.data.id +"передали");
   } else {
   event.confirm.reject();
   }
   }*/

  /*onSaveConfirm(event): void {
   if (window.confirm('Are you sure you want to save?')) {
   /!*event.confirm.resolve(event.newData);*!/
   event.confirm.resolve(event.newData);
   console.log(event.newData+" Yes!");
   this.user= new Users(event.newData['id'],event.newData['fullname'],event.newData['profile']);
   this.activeKey=event.newData.id;
   this.activeUser=event.newData;
   console.log('neww '+event.newData);
   this.activeFlag=true;
   this.taskService.updateStatus(this.user).subscribe(task=>{
   task.id=event.newData.id;
   task.fullname=event.newData.fullname;
   task.profile=event.newData.profile;
   });
   } else {
   event.confirm.reject();
   }



   }*/


  /*onCreateConfirm(event): void {
   if (window.confirm('Are you sure you want to create?')) {
   /!* event.newData['fullname'] += ' + added in code';*!/
   event.confirm.resolve(event.newData);
   this.user= new Users(event.newData['id'],event.newData['fullname'],event.newData['profile']);
   this.taskService.addTask(this.user).subscribe(task=>{
   this.users.push(task);
   });
   } else {
   event.confirm.reject();
   }
   }
   */
}
