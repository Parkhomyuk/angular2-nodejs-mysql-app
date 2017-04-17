import { Component, OnInit } from '@angular/core';
import {heroes} from '../tables/classes/heroes'
import {Hiro} from "../tables/classes/hiro";
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  filteredItems :Hiro[];//attribute: is an array of ‘Hero’ used to stock the result of the search process executed by ‘FilterByName’ function.
  pages : number = 4;// is a maximum of Page numbers that can be displayed in pagination bar (it’s the size of ‘pagesIndex’ array).
  pageSize : number = 3; //attribute : indicate the number of entries per page,
  pageNumber : number = 0; //attribute : is the maximum number of page can we deduce from the ‘ heroes’ in terms of ‘pageSize’ value,
  currentIndex : number = 1;//attribute : is the index of the current selected page,
  items: Hiro[]; //attribute : the content of selected page,
  pagesIndex : Array<number>; //attribute : have the series of numbers shown in the pagination bar.
  pageStart : number = 1; //attribute : this the start index page in the pagination bar.
  inputName : string = ''; //attribute : is used to search a new list of Heroes  which the value of the attribute name for each one contains the text in ‘inputName’ .
/*  Constructor method : initialize the ‘filterditems’ from ‘ProductList’, and the pagination.
  Init method : used to calculate the pagination values, and update the view screen.
  FilterByName method : this function return a list of Products which the text in ‘inputName’ is a substring of the Product name. The result will be inserted in ‘filteredItems’ List.
  refreshItems method : refresh the content of table depending mainly on values of the following attributes : ‘currentIndex’ , ‘pageSize’ , 'pages' and 'pageStart' .
  prevPage method : this function will decrease the selected page index (‘currentIndex’) by one, and will refresh the display.
  nextPage method : this function will increase the selected page index (‘currentIndex’) by one, and will refresh the display.
  setPage method : invoked when user select a number from pagination. It will modify the ‘currentIndex’ value and refresh the view.*/


  constructor() {
    this.filteredItems=heroes;
    this.init();
  }
  init(){
  this.currentIndex = 1;
  this.pageStart = 1;
  this.pages = 4;

  this.pageNumber = parseInt(""+ (this.filteredItems.length / this.pageSize));
  if(this.filteredItems.length % this.pageSize != 0){
    this.pageNumber ++;
  }

  if(this.pageNumber  < this.pages){

    this.pages =  this.pageNumber;

  }



  this.refreshItems();

  console.log("this.pageNumber :  "+this.pageNumber);

}

  FilterByName(){

    this.filteredItems = [];

    if(this.inputName != ""){

      heroes.forEach(element => {
        if(element.name.toUpperCase().indexOf(this.inputName.toUpperCase())>=0){
          this.filteredItems.push(element);
        }
      });
    }else{
      this.filteredItems = heroes;
    }
    console.log(this.filteredItems);
    this.init();
  }
  fillArray(): any{
    var obj = new Array();
    for(var index = this.pageStart; index< this.pageStart + this.pages; index ++) {

      obj.push(index);

    }

    return obj;

  }
  refreshItems(){

    this.items = this.filteredItems.slice((this.currentIndex - 1)*this.pageSize, (this.currentIndex) * this.pageSize);

    this.pagesIndex =  this.fillArray();

  }


  ngOnInit() {
  }
  prevPage(){

    if(this.currentIndex>1){
      this.currentIndex --;
    }
    if(this.currentIndex < this.pageStart){

      this.pageStart = this.currentIndex;

    }

    this.refreshItems();

  }

  nextPage(){

    if(this.currentIndex < this.pageNumber){

      this.currentIndex ++;

    }

    if(this.currentIndex >= (this.pageStart + this.pages)){
      this.pageStart = this.currentIndex - this.pages + 1;
    }

    this.refreshItems();
  }
  setPage(index : number){
    this.currentIndex = index;
    this.refreshItems();
  }

}
