import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Users} from "../app/tables/classes/tables1";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';


@Injectable()
export class ExpressService{
  private url='/api/tasks';
  param:any='id';
  constructor(private http:Http){
    console.log('Task Service Initialized...');
  }
  // Отправка GET запроса нв сервер
  getTasks():Observable<Users[]>{
    //noinspection TypeScriptUnresolvedFunction
    let users=this.http.get(this.url)
      .map(this.extractUsers) // преобразовывает ответ в массив экземпляров Userses.
      .catch(this.handleError);
    return users;
    //noinspection TypeScriptUnresolvedFunction
   /* return this.http.get('/api/tasks')
      .map(res => res.json());*/
  }
  orderTasks(par):Observable<Users[]>{
    //noinspection TypeScriptUnresolvedFunction
    let users=this.http.get(this.url+"/"+par)
      .map(this.extractUsers) // преобразовывает ответ в массив экземпляров Userses.
      .catch(this.handleError);
    return users;

  }

/*
private extractOrderUsers(response: Response,par){
  let res = response.json();
  let users: Users[] = [];
  let flag=1;
  while(flag==1){
    flag=this.sortBy(res,par);
  }
  for (let i = 0; i < res.length; i++) {

    users.push(new Users(res[i].id, res[i].fullname, res[i].profile));
  }
  return users;
}
  private sortBy(array,par):number{
    let prom:any;
    let flag:number=0;
    for(let i=0;i<array.length-1;i++){
      if(array[i].par<array[i+1].par){
        prom=array[i].par;
        array[i].par=array[i+1].par;
        array[i+1].par=prom;
        flag=1;
      }
    }
return flag;
  }
*/

  private extractUsers(response: Response) {
    let res = response.json();
    let users: Users[] = [];
    for (let i = 0; i < res.length; i++) {
      users.push(new Users(res[i].id, res[i].fullname, res[i].profile));
    }
    return users;
  }

  private handleError(error: any, cought: Observable<any>): any {
    let message = "";

    if (error instanceof Response) {
      let errorData = error.json().error || JSON.stringify(error.json());
      message = `${error.status} - ${error.statusText || ''} ${errorData}`
    } else {
      message = error.message ? error.message : error.toString();
    }

    console.error(message);

    return Observable.throw(message);
  }

  addTask(newTask){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //noinspection TypeScriptUnresolvedFunction
    return this.http.post('/api/tasks', JSON.stringify(newTask), {headers: headers})
      .map(res => res.json());
  }

  deleteTask(id){
    console.log(id +" Delete");
    console.log(this.url+"/"+id);
    //noinspection TypeScriptUnresolvedFunction
    return this.http.delete('/api/tasks/'+id)
      .map(res => res.json())
      .catch(this.handleError);
   /* return this.http.delete(this.url+"/"+id)
      .catch(this.handleError);*/

  }

  updateStatus(task){
    console.log(task);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(JSON.stringify(task));
    //noinspection TypeScriptUnresolvedFunction

    return this.http.put('/api/tasks/'+task.id, JSON.stringify(task), {headers: headers})
      .map(res => res.json());

  }

  public sortByDown(array){
    let flag=this.sortDown(array);

    let d=0;
    while(flag==1){
      flag=this.sortDown(array);
      d++;
    }

  }
  public sortByUp(array){
    let flag=this.sortUp(array);

    let d=0;
    while(flag==1){
      flag=this.sortUp(array);
      d++;
    }

  }
  private sortDown(array):number{
    let prom:any;
    let flag:number=0;

    for(let i=0;i<array.length-1;i++){
      if(array[i].id<array[i+1].id){
        prom=array[i];
        array[i]=array[i+1];
        array[i+1]=prom;
        flag=1;
      }
    }
    return flag;
  }
  private sortUp(array):number{
    let prom:any;
    let flag:number=0;

    for(let i=0;i<array.length-1;i++){
      if(array[i].id>array[i+1].id){
        prom=array[i];
        array[i]=array[i+1];
        array[i+1]=prom;
        flag=1;
      }
    }
    return flag;
  }

  public sortByDownName(array){
    let flag=this.sortDownName(array);

    let d=0;
    while(flag==1){
      flag=this.sortDownName(array);
      d++;
    }

  }
  public sortByUpName(array){
    let flag=this.sortUpName(array);

    let d=0;
    while(flag==1){
      flag=this.sortUpName(array);
      d++;
    }

  }
  private sortDownName(array):number{
    let prom:any;
    let flag:number=0;

    for(let i=0;i<array.length-1;i++){
      if(array[i].fullname<array[i+1].fullname){
        prom=array[i];
        array[i]=array[i+1];
        array[i+1]=prom;
        flag=1;
      }
    }
    return flag;
  }
  private sortUpName(array):number{
    let prom:any;
    let flag:number=0;

    for(let i=0;i<array.length-1;i++){
      if(array[i].fullname>array[i+1].fullname){
        prom=array[i];
        array[i]=array[i+1];
        array[i+1]=prom;
        flag=1;
      }
    }
    return flag;
  }

  search(term: string): Observable<Users[]> {
    console.log(term+' - term');
    //noinspection TypeScriptUnresolvedFunction

    let users= this.http
      .get(`/api/tasks/`+term)
      .map(this.extractUsers) // преобразовывает ответ в массив экземпляров Userses.
      .catch(this.handleError);
     console.log(`/api/tasks/:fullname=`+term);
    return users;

  }


}
