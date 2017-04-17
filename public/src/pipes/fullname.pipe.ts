import { Pipe, PipeTransform } from '@angular/core';
import {Users} from "../app/tables/classes/tables1";


@Pipe({name: 'fullnamePipes'})
export class FullnamePipe implements PipeTransform {
  transform(allmembers: Users[], args:number[] ) {

/*
let array:Users[]=[];
    for(let i=0;i<allmembers.length;i++){
      if(allmembers[i].fullname==args[0]){
        array.push(allmembers[i]);
      }
    }
*/
  let mem=allmembers;
  allmembers=mem.slice(args[0],args[1]);

  }
}
