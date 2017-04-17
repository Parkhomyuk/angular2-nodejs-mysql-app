import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  image1:string="../../../src/img/table_1061.png";
  image2:string="../../../src/img/table_1062.png";

  image:string;
  constructor() { }

  ngOnInit() {
    this.image=this.image1;
  }

  onPress(){
    if(this.image==this.image1){
      this.image=this.image2;
      console.log('yes');
    }else{
      this.image=this.image1;
      console.log('no');
    }

  }

}
