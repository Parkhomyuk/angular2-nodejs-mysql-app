webpackJsonp([1,4],{

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
        this.image1 = "../../../src/img/table_1061.png";
        this.image2 = "../../../src/img/table_1062.png";
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.image = this.image1;
    };
    DashboardComponent.prototype.onPress = function () {
        if (this.image == this.image1) {
            this.image = this.image2;
            console.log('yes');
        }
        else {
            this.image = this.image1;
            console.log('no');
        }
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__(551),
            styles: [__webpack_require__(538)]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Users; });
var Users = (function () {
    /* constructor(id:number, fullname:string, profile:string) {
         this.id = id;
         this.fullname = fullname;
         this.profile = profile;
         }*/
    function Users(id, fullname, profile) {
        this.id = id;
        this.fullname = fullname;
        this.profile = profile;
    }
    return Users;
}());
//# sourceMappingURL=tables1.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_tables1__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_express_service__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_rxjs_Subject__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__node_modules_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TablesComponent = (function () {
    function TablesComponent(taskService) {
        /*this.refreshItems();*/
        this.taskService = taskService;
        this.title = 'Members - winter 2015';
        this.updateopen = 'open';
        this.newId = 0;
        this.settings = {
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
        };
        this.pages = 4; // is a maximum of Page numbers that can be displayed in pagination bar (it’s the size of ‘pagesIndex’ array).
        this.pageSize = 10; //attribute : indicate the number of entries per page,
        this.pageNumber = 0; //attribute : is the maximum number of page can we deduce from the ‘ users’ in terms of ‘pageSize’ value,
        this.currentIndex = 1; //attribute : is the index of the current selected page,
        this.pageStart = 1; //attribute : this the start index page in the pagination bar.
        this.searchTerms = new __WEBPACK_IMPORTED_MODULE_4__node_modules_rxjs_Subject__["Subject"]();
        this.searchTerms2 = new __WEBPACK_IMPORTED_MODULE_4__node_modules_rxjs_Subject__["Subject"]();
    }
    TablesComponent.prototype.ngOnInit = function () {
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
        this.updateopen = 'close';
    };
    TablesComponent.prototype.get = function () {
        var _this = this;
        this.taskService.getTasks()
            .subscribe(function (tasks) {
            _this.users = tasks;
            _this.usersItems = tasks;
            _this.pageNumber = parseInt("" + (_this.users.length / _this.pageSize));
            if (_this.usersItems.length % _this.pageSize != 0) {
                _this.pageNumber++;
            }
            if (_this.pageNumber < _this.pages) {
                _this.pages = _this.pageNumber;
            }
            _this.refreshPages();
        });
    };
    TablesComponent.prototype.refreshPages = function () {
        this.users = this.usersItems.slice((this.currentIndex - 1) * this.pageSize, (this.currentIndex) * this.pageSize);
        this.pagesIndex = this.fillArray();
        console.log(this.pagesIndex + ' это номера страниц');
    };
    TablesComponent.prototype.fillArray = function () {
        var obj = new Array();
        for (var index = this.pageStart; index < this.pageStart + this.pages; index++) {
            obj.push(index);
        }
        return obj;
    };
    TablesComponent.prototype.setPage = function (index) {
        this.currentIndex = index;
        this.refreshItems();
    };
    // Push a search term into the observable stream.
    TablesComponent.prototype.search = function () {
        var _this = this;
        console.log(this.inputName + 'component term');
        if (this.inputName != '') {
            this.taskService.search(this.inputName).subscribe(function (tasks) {
                _this.users = tasks;
                _this.usersItems = tasks;
                _this.pageNumber = parseInt("" + (_this.users.length / _this.pageSize));
                if (_this.usersItems.length % _this.pageSize != 0) {
                    _this.pageNumber++;
                }
                if (_this.pageNumber < _this.pages) {
                    _this.pages = _this.pageNumber;
                }
                _this.users = _this.usersItems.slice((_this.currentIndex - 1) * _this.pageSize, (_this.currentIndex) * _this.pageSize);
                _this.pagesIndex = _this.fillArray();
                console.log(_this.pagesIndex + ' это номера страниц');
            });
        }
        else {
            this.getUsers();
        }
    };
    TablesComponent.prototype.getUsers = function () {
        var _this = this;
        this.taskService.getTasks().subscribe(function (users) { return _this.users = users; }, function (error) { return _this.errorMessage = error; });
        this.refreshItems();
    };
    TablesComponent.prototype.refreshItems = function () {
        /* this.taskService.getTasks().subscribe(
           users => this.users = users,
           users => this.usersItems = users
     
         );*/
        this.get();
    };
    TablesComponent.prototype.onAddUsers = function () {
        var _this = this;
        var user = new __WEBPACK_IMPORTED_MODULE_1__classes_tables1__["a" /* Users */](this.newId, this.newFullname, this.newProfile);
        this.taskService.addTask(user).subscribe(function (task) {
            _this.users.push(task);
        });
        this.refreshItems();
        this.closeAdd();
        this.newFullname = '';
        this.newProfile = '';
    };
    TablesComponent.prototype.onDeleteUsers = function (id) {
        var tasks = this.users;
        this.taskService.deleteTask(id).subscribe(function (data) {
            for (var i = 0; i < tasks.length; i++) {
                //noinspection TypeScriptUnresolvedVariable
                if (tasks[i].id == id) {
                    tasks.splice(i, 1);
                }
            }
        });
        this.refreshItems();
    };
    TablesComponent.prototype.onUpdateUsers = function (item) {
        if (this.newFullname == '') {
            this.newFullname = item.fullname;
        }
        if (this.newProfile == '') {
            this.newProfile = item.profile;
        }
        var task = {
            id: item.id,
            fullname: this.newFullname,
            profile: this.newProfile
        };
        this.user = new __WEBPACK_IMPORTED_MODULE_1__classes_tables1__["a" /* Users */](item.id, this.newFullname, this.newProfile);
        console.log(this.user + ' update');
        this.taskService.updateStatus(task).subscribe(function (task) {
            console.log('This is task' + task);
        });
        this.newFullname = '';
        this.newProfile = '';
        this.updateFalse(item);
        this.refreshItems();
    };
    TablesComponent.prototype.orderByDown = function (param) {
        this.taskService.sortByDown(this.users);
        console.log(this.users);
        console.log(param + ' this is param');
    };
    TablesComponent.prototype.orderByUp = function (param) {
        this.taskService.sortByUp(this.users);
        console.log(this.users);
        console.log(param + ' this is param');
    };
    TablesComponent.prototype.orderByDownName = function (param) {
        this.taskService.sortByDownName(this.users);
        console.log(this.users);
        console.log(param + ' this is param');
    };
    TablesComponent.prototype.orderByUpName = function (param) {
        this.taskService.sortByUpName(this.users);
        console.log(this.users);
        console.log(param + ' this is param');
    };
    TablesComponent.prototype.ngDoCheck = function () {
        this.users;
        this.filteredItems;
        this.newId;
        this.newFullname;
        this.newProfile;
        this.inputName;
    };
    TablesComponent.prototype.ngAfterContentChecked = function () {
        console.log('Members content has been Checked');
    };
    TablesComponent.prototype.ngOnDestroy = function () {
        this.users = null;
        this.usersItems = null;
    };
    TablesComponent.prototype.openAdd = function () {
        if (document.getElementById('addU').hidden == false)
            document.getElementById('addU').hidden = true;
        else
            document.getElementById('addU').hidden = false;
    };
    TablesComponent.prototype.updateTrue = function (item) {
        document.getElementById(item.id + 'a').hidden = true;
        document.getElementById(item.id + 'b').hidden = false;
        document.getElementById(item.id + 'c').hidden = false;
        document.getElementById(item.id + 'd').hidden = true;
        document.getElementById(item.id + 'e').hidden = true;
        document.getElementById(item.id + 'f').hidden = false;
    };
    TablesComponent.prototype.closeAdd = function () {
        document.getElementById('addU').hidden = true;
    };
    TablesComponent.prototype.updateFalse = function (item) {
        document.getElementById(item.id + 'a').hidden = false;
        document.getElementById(item.id + 'b').hidden = true;
        document.getElementById(item.id + 'c').hidden = true;
        document.getElementById(item.id + 'd').hidden = false;
        document.getElementById(item.id + 'e').hidden = false;
        document.getElementById(item.id + 'f').hidden = true;
    };
    TablesComponent.prototype.sortUp = function (prop) {
        console.log(prop);
    };
    TablesComponent.prototype.myFunction = function () {
        var data_type = 'data:application/vnd.ms-excel';
        var table_div = document.getElementById('tableUser');
        var table_html = table_div.outerHTML.replace(/ /g, '%20');
        /*console.log('fff');*/
        var a = document.createElement('a');
        /*console.log(a);*/
        a.href = data_type + ', ' + '\uFEFF' + table_html;
        a.download = 'exported_table_' + Math.floor((Math.random() * 9999999) + 1000000) + '.xls';
        a.click();
    };
    TablesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-tables',
            template: __webpack_require__(556),
            styles: [__webpack_require__(543)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_express_service__["a" /* ExpressService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_express_service__["a" /* ExpressService */]) === 'function' && _a) || Object])
    ], TablesComponent);
    return TablesComponent;
    var _a;
}());
//# sourceMappingURL=tables.component.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_tables_classes_tables1__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpressService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ExpressService = (function () {
    function ExpressService(http) {
        this.http = http;
        this.url = '/api/tasks';
        this.param = 'id';
        console.log('Task Service Initialized...');
    }
    // Отправка GET запроса нв сервер
    ExpressService.prototype.getTasks = function () {
        //noinspection TypeScriptUnresolvedFunction
        var users = this.http.get(this.url)
            .map(this.extractUsers) // преобразовывает ответ в массив экземпляров Userses.
            .catch(this.handleError);
        return users;
        //noinspection TypeScriptUnresolvedFunction
        /* return this.http.get('/api/tasks')
           .map(res => res.json());*/
    };
    ExpressService.prototype.orderTasks = function (par) {
        //noinspection TypeScriptUnresolvedFunction
        var users = this.http.get(this.url + "/" + par)
            .map(this.extractUsers) // преобразовывает ответ в массив экземпляров Userses.
            .catch(this.handleError);
        return users;
    };
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
    ExpressService.prototype.extractUsers = function (response) {
        var res = response.json();
        var users = [];
        for (var i = 0; i < res.length; i++) {
            users.push(new __WEBPACK_IMPORTED_MODULE_3__app_tables_classes_tables1__["a" /* Users */](res[i].id, res[i].fullname, res[i].profile));
        }
        return users;
    };
    ExpressService.prototype.handleError = function (error, cought) {
        var message = "";
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Response */]) {
            var errorData = error.json().error || JSON.stringify(error.json());
            message = error.status + " - " + (error.statusText || '') + " " + errorData;
        }
        else {
            message = error.message ? error.message : error.toString();
        }
        console.error(message);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(message);
    };
    ExpressService.prototype.addTask = function (newTask) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //noinspection TypeScriptUnresolvedFunction
        return this.http.post('/api/tasks', JSON.stringify(newTask), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ExpressService.prototype.deleteTask = function (id) {
        console.log(id + " Delete");
        console.log(this.url + "/" + id);
        //noinspection TypeScriptUnresolvedFunction
        return this.http.delete('/api/tasks/' + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
        /* return this.http.delete(this.url+"/"+id)
           .catch(this.handleError);*/
    };
    ExpressService.prototype.updateStatus = function (task) {
        console.log(task);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        console.log(JSON.stringify(task));
        //noinspection TypeScriptUnresolvedFunction
        return this.http.put('/api/tasks/' + task.id, JSON.stringify(task), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ExpressService.prototype.sortByDown = function (array) {
        var flag = this.sortDown(array);
        var d = 0;
        while (flag == 1) {
            flag = this.sortDown(array);
            d++;
        }
    };
    ExpressService.prototype.sortByUp = function (array) {
        var flag = this.sortUp(array);
        var d = 0;
        while (flag == 1) {
            flag = this.sortUp(array);
            d++;
        }
    };
    ExpressService.prototype.sortDown = function (array) {
        var prom;
        var flag = 0;
        for (var i = 0; i < array.length - 1; i++) {
            if (array[i].id < array[i + 1].id) {
                prom = array[i];
                array[i] = array[i + 1];
                array[i + 1] = prom;
                flag = 1;
            }
        }
        return flag;
    };
    ExpressService.prototype.sortUp = function (array) {
        var prom;
        var flag = 0;
        for (var i = 0; i < array.length - 1; i++) {
            if (array[i].id > array[i + 1].id) {
                prom = array[i];
                array[i] = array[i + 1];
                array[i + 1] = prom;
                flag = 1;
            }
        }
        return flag;
    };
    ExpressService.prototype.sortByDownName = function (array) {
        var flag = this.sortDownName(array);
        var d = 0;
        while (flag == 1) {
            flag = this.sortDownName(array);
            d++;
        }
    };
    ExpressService.prototype.sortByUpName = function (array) {
        var flag = this.sortUpName(array);
        var d = 0;
        while (flag == 1) {
            flag = this.sortUpName(array);
            d++;
        }
    };
    ExpressService.prototype.sortDownName = function (array) {
        var prom;
        var flag = 0;
        for (var i = 0; i < array.length - 1; i++) {
            if (array[i].fullname < array[i + 1].fullname) {
                prom = array[i];
                array[i] = array[i + 1];
                array[i + 1] = prom;
                flag = 1;
            }
        }
        return flag;
    };
    ExpressService.prototype.sortUpName = function (array) {
        var prom;
        var flag = 0;
        for (var i = 0; i < array.length - 1; i++) {
            if (array[i].fullname > array[i + 1].fullname) {
                prom = array[i];
                array[i] = array[i + 1];
                array[i + 1] = prom;
                flag = 1;
            }
        }
        return flag;
    };
    ExpressService.prototype.search = function (term) {
        console.log(term + ' - term');
        //noinspection TypeScriptUnresolvedFunction
        var users = this.http
            .get("/api/tasks/" + term)
            .map(this.extractUsers) // преобразовывает ответ в массив экземпляров Userses.
            .catch(this.handleError);
        console.log("/api/tasks/:fullname=" + term);
        return users;
    };
    ExpressService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], ExpressService);
    return ExpressService;
    var _a;
}());
//# sourceMappingURL=express.service.js.map

/***/ }),

/***/ 346:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 346;


/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(474);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(550),
            styles: [__webpack_require__(544)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tables_tables_component__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_angularfire2_angularfire2__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_express_service__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_fullname_pipe__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pagination_pagination_component__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__navbar_navbar_component__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__navside_navside_component__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__node_modules_angular_router_src_router_module__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_routes__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__main_main_component__ = __webpack_require__(469);
/* unused harmony export firebaseConfig */
/* unused harmony export firebaseAuthConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var firebaseConfig = {
    apiKey: "AIzaSyAJEpuBsjuUhoim6zvs4QbhhPJ1QSXs9xY",
    authDomain: "formula-9676e.firebaseapp.com",
    databaseURL: "https://formula-9676e.firebaseio.com",
    storageBucket: "formula-9676e.appspot.com",
    messagingSenderId: "266776398127"
};
var firebaseAuthConfig = {};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__tables_tables_component__["a" /* TablesComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pipes_fullname_pipe__["a" /* FullnamePipe */],
                __WEBPACK_IMPORTED_MODULE_9__pagination_pagination_component__["a" /* PaginationComponent */],
                __WEBPACK_IMPORTED_MODULE_10__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__navside_navside_component__["a" /* NavsideComponent */],
                __WEBPACK_IMPORTED_MODULE_12__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_15__main_main_component__["a" /* MainComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__node_modules_angularfire2_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig, firebaseAuthConfig),
                __WEBPACK_IMPORTED_MODULE_13__node_modules_angular_router_src_router_module__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_14__app_routes__["a" /* routes */]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_express_service__["a" /* ExpressService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tables_tables_component__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__ = __webpack_require__(310);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });


var routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: "tables",
        component: __WEBPACK_IMPORTED_MODULE_0__tables_tables_component__["a" /* TablesComponent */]
    },
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__(552),
            styles: [__webpack_require__(539)]
        }), 
        __metadata('design:paramtypes', [])
    ], MainComponent);
    return MainComponent;
}());
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__(553),
            styles: [__webpack_require__(540)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavsideComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavsideComponent = (function () {
    function NavsideComponent() {
    }
    NavsideComponent.prototype.ngOnInit = function () {
    };
    NavsideComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-navside',
            template: __webpack_require__(554),
            styles: [__webpack_require__(541)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavsideComponent);
    return NavsideComponent;
}());
//# sourceMappingURL=navside.component.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tables_classes_heroes__ = __webpack_require__(473);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaginationComponent = (function () {
    /*  Constructor method : initialize the ‘filterditems’ from ‘ProductList’, and the pagination.
      Init method : used to calculate the pagination values, and update the view screen.
      FilterByName method : this function return a list of Products which the text in ‘inputName’ is a substring of the Product name. The result will be inserted in ‘filteredItems’ List.
      refreshItems method : refresh the content of table depending mainly on values of the following attributes : ‘currentIndex’ , ‘pageSize’ , 'pages' and 'pageStart' .
      prevPage method : this function will decrease the selected page index (‘currentIndex’) by one, and will refresh the display.
      nextPage method : this function will increase the selected page index (‘currentIndex’) by one, and will refresh the display.
      setPage method : invoked when user select a number from pagination. It will modify the ‘currentIndex’ value and refresh the view.*/
    function PaginationComponent() {
        this.pages = 4; // is a maximum of Page numbers that can be displayed in pagination bar (it’s the size of ‘pagesIndex’ array).
        this.pageSize = 3; //attribute : indicate the number of entries per page,
        this.pageNumber = 0; //attribute : is the maximum number of page can we deduce from the ‘ heroes’ in terms of ‘pageSize’ value,
        this.currentIndex = 1; //attribute : is the index of the current selected page,
        this.pageStart = 1; //attribute : this the start index page in the pagination bar.
        this.inputName = ''; //attribute : is used to search a new list of Heroes  which the value of the attribute name for each one contains the text in ‘inputName’ .
        this.filteredItems = __WEBPACK_IMPORTED_MODULE_1__tables_classes_heroes__["a" /* heroes */];
        this.init();
    }
    PaginationComponent.prototype.init = function () {
        this.currentIndex = 1;
        this.pageStart = 1;
        this.pages = 4;
        this.pageNumber = parseInt("" + (this.filteredItems.length / this.pageSize));
        if (this.filteredItems.length % this.pageSize != 0) {
            this.pageNumber++;
        }
        if (this.pageNumber < this.pages) {
            this.pages = this.pageNumber;
        }
        this.refreshItems();
        console.log("this.pageNumber :  " + this.pageNumber);
    };
    PaginationComponent.prototype.FilterByName = function () {
        var _this = this;
        this.filteredItems = [];
        if (this.inputName != "") {
            __WEBPACK_IMPORTED_MODULE_1__tables_classes_heroes__["a" /* heroes */].forEach(function (element) {
                if (element.name.toUpperCase().indexOf(_this.inputName.toUpperCase()) >= 0) {
                    _this.filteredItems.push(element);
                }
            });
        }
        else {
            this.filteredItems = __WEBPACK_IMPORTED_MODULE_1__tables_classes_heroes__["a" /* heroes */];
        }
        console.log(this.filteredItems);
        this.init();
    };
    PaginationComponent.prototype.fillArray = function () {
        var obj = new Array();
        for (var index = this.pageStart; index < this.pageStart + this.pages; index++) {
            obj.push(index);
        }
        return obj;
    };
    PaginationComponent.prototype.refreshItems = function () {
        this.items = this.filteredItems.slice((this.currentIndex - 1) * this.pageSize, (this.currentIndex) * this.pageSize);
        this.pagesIndex = this.fillArray();
    };
    PaginationComponent.prototype.ngOnInit = function () {
    };
    PaginationComponent.prototype.prevPage = function () {
        if (this.currentIndex > 1) {
            this.currentIndex--;
        }
        if (this.currentIndex < this.pageStart) {
            this.pageStart = this.currentIndex;
        }
        this.refreshItems();
    };
    PaginationComponent.prototype.nextPage = function () {
        if (this.currentIndex < this.pageNumber) {
            this.currentIndex++;
        }
        if (this.currentIndex >= (this.pageStart + this.pages)) {
            this.pageStart = this.currentIndex - this.pages + 1;
        }
        this.refreshItems();
    };
    PaginationComponent.prototype.setPage = function (index) {
        this.currentIndex = index;
        this.refreshItems();
    };
    PaginationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-pagination',
            template: __webpack_require__(555),
            styles: [__webpack_require__(542)]
        }), 
        __metadata('design:paramtypes', [])
    ], PaginationComponent);
    return PaginationComponent;
}());
//# sourceMappingURL=pagination.component.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return heroes; });
var heroes = [
    { id: 11, name: 'Mr. Nice Роман', profile: 'омега' },
    { id: 12, name: 'Narco Алексей', profile: 'альфа' },
    { id: 13, name: 'Bombasto Александр', profile: 'бета' },
    { id: 14, name: 'Celeritas Валерий', profile: 'омега' },
    { id: 15, name: 'Magneta Андрей', profile: 'бета' },
    { id: 16, name: 'RubberMan Алексей', profile: 'альфа' },
    { id: 17, name: 'Dynama Анатолий', profile: 'омега' },
    { id: 18, name: 'Dr IQ Дмитрий', profile: 'омега' },
    { id: 19, name: 'Magma Анатолий', profile: 'бета' },
    { id: 20, name: 'Tornado Валерий', profile: 'альфа' },
    { id: 11, name: 'Mr. Nice Роман', profile: 'омега' },
    { id: 12, name: 'Narco Алексей', profile: 'альфа' },
    { id: 13, name: 'Bombasto Александр', profile: 'бета' },
    { id: 14, name: 'Celeritas Валерий', profile: 'омега' },
    { id: 15, name: 'Magneta Андрей', profile: 'бета' },
    { id: 16, name: 'RubberMan Алексей', profile: 'альфа' },
    { id: 17, name: 'Dynama Анатолий', profile: 'омега' },
    { id: 18, name: 'Dr IQ Дмитрий', profile: 'омега' },
    { id: 19, name: 'Magma Анатолий', profile: 'бета' },
    { id: 20, name: 'Tornado Валерий', profile: 'альфа' }
];
//# sourceMappingURL=heroes.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullnamePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FullnamePipe = (function () {
    function FullnamePipe() {
    }
    FullnamePipe.prototype.transform = function (allmembers, args) {
        /*
        let array:Users[]=[];
            for(let i=0;i<allmembers.length;i++){
              if(allmembers[i].fullname==args[0]){
                array.push(allmembers[i]);
              }
            }
        */
        var mem = allmembers;
        allmembers = mem.slice(args[0], args[1]);
    };
    FullnamePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Pipe */])({ name: 'fullnamePipes' }), 
        __metadata('design:paramtypes', [])
    ], FullnamePipe);
    return FullnamePipe;
}());
//# sourceMappingURL=fullname.pipe.js.map

/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)();
// imports


// module
exports.push([module.i, ".dashboard {\n  margin-top: 8vh;\n  margin-left: 8%;\n  background-color: white;\n  height: 100%; }\n\n.example-shadow-3 {\n  text-align: left;\n  cursor: pointer; }\n\n.example-shadow-3 span {\n  border-radius: 10px;\n  background-color: rgba(238, 232, 35, 0.58);\n  display: inline-block;\n  width: 10vw;\n  height: 10vw;\n  margin: 50px;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); }\n\n.example-shadow-3 span:hover {\n  background: #afafaf;\n  box-shadow: inset 2px 2px 5px rgba(154, 147, 140, 0.5), 1px 1px 5px white; }\n\n.example-shadow-3 > a > span {\n  /* background: url('../../img/table_1061.png');*/\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat; }\n\n.example-shadow-3 > a > span:hover {\n  /*  background: url('../../img/table_1062.png');*/\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat; }\n\n.table1 {\n  padding-top: 10vh;\n  padding-left: 2vw; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)();
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.black {\n  /*width: 100%;\r\n  height: 100%;\r\n  background-color: black;*/\n  position: fixed;\n  padding-top: 0;\n  margin-top: 0; }\n\n.navbar {\n  z-index: 904;\n  box-shadow: 2px 0 3px rgba(0, 0, 0, 0.5);\n  /*  height: 74px;*/\n  height: 9%;\n  width: 100%;\n  min-width: 320px;\n  padding: 0 32px 0 40px; }\n  .navbar .dropdown-toggle::after {\n    display: none; }\n\n.navbar-light .navbar-nav > li > a {\n  color: #ffffff; }\n\n.navbar-light .navbar-nav > li > a:hover,\n.navbar-light .navbar-nav > li > a:focus {\n  color: #ff1815; }\n\n.navbar-default .navbar-nav > li > a {\n  color: grey; }\n\n/* цвет текста (название сайта или бренда), при поднесении к нему курсора мышки или при его нахождении в фокусе */\n.navbar-light .navbar-brand:hover,\n.navbar-light .navbar-brand:focus {\n  color: #ff1815; }\n\n.imag_nav {\n  width: 45px;\n  height: 45px;\n  border-radius: 50%; }\n\n.tog {\n  cursor: pointer; }\n\n.navbar-nav > .tog > a, .navbar-nav > li > a {\n  color: #0000ff; }\n\n.navbar-nav > .tog > a:hover {\n  /* background-color: #999999;*/\n  color: #ff1815; }\n\n.navbar-nav > li > a:hover {\n  /*  background-color: #999999;*/\n  color: #ff1815; }\n\n/* Цвет и фон активного пункта меню, а также поднесении к нему курсора мышки или при его нахождении в фокусе */\n/*\r\n.navbar-default .navbar-nav > .active > a,\r\n.navbar-default .navbar-nav > .active > a:hover,\r\n.navbar-default .navbar-nav > .active > a:focus {\r\n  color: #ff1815;\r\n  background-color: #E7E7E7;\r\n}\r\n*/\nli:hover {\n  /* background-color: #999999;*/ }\n\n.container-fluid {\n  background-color: black;\n  width: 100%; }\n\n.navbar {\n  background-color: black; }\n\n.navbar-toggle {\n  background-color: yellow; }\n\n.icon-bar {\n  background-color: black; }\n\n.grid {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: space-around;\n  -webkit-box-align: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap; }\n\n.menuleft {\n  width: 10%; }\n\n.punkt {\n  margin-top: 10vh;\n  margin-left: 1vw;\n  color: #ffffff; }\n\nul:hover {\n  /* background-color: #000000;*/ }\n\n.nav li :hover {\n  background-color: #000000; }\n\n.dropdown-item {\n  background-color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)();
// imports


// module
exports.push([module.i, "/** content+sidebar styles **/\nsection#content {\n  background-color: #fff; }\n\naside#sidebar {\n  width: 8%;\n  height: 100%;\n  position: fixed;\n  background-color: black; }\n\naside {\n  padding-top: 10%; }\n\narticle {\n  /* padding: 10px 10px 30px;\r\n  font-size: 1.2em;\r\n  border-bottom: 1px solid #eee;*/ }\n\narticle h2 {\n  /* padding-bottom: 0;\r\n  line-height: 1.1em;\r\n  letter-spacing: -2px;\r\n  font-size: 2.5em;*/ }\n\narticle .article-info {\n  /* color: #C0c0c0;\r\n  font-size: 0.92em;\r\n  padding: 0px 0px 10px;*/ }\n\narticle .article-info a {\n  color: #ccc; }\n\nli {\n  margin-top: 2vh; }\n\n.side_menu {\n  color: #ffffff; }\n\n.side {\n  padding: 10% 0 0 5%; }\n\n.glyphicon:hover {\n  color: red; }\n\n@media screen and (max-width: 740px) {\n  .side_menu {\n    visibility: hidden; }\n  .glyphicon {\n    margin-left: 20%; }\n  #sidebar {\n    margin-top: 20%; } }\n\n@media screen and (max-width: 1024px) {\n  .side_menu {\n    visibility: hidden; }\n  .glyphicon {\n    margin-left: 20%; }\n  #sidebar {\n    margin-top: 0%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)();
// imports


// module
exports.push([module.i, ".pagination {\n  margin: 0px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)();
// imports


// module
exports.push([module.i, ".card_table {\n  margin-top: 8vh;\n  margin-left: 8%;\n  width: 100%;\n  height: 100%;\n  background-color: white;\n  overflow: scroll; }\n\n.searchin, .addin {\n  width: 100%;\n  background-color: rgba(153, 153, 153, 0.13);\n  border-radius: 5px;\n  border: 1px solid grey;\n  height: 4vh;\n  z-index: 20; }\n\n.addth {\n  text-align: center; }\n\n.addth > span {\n  margin-right: 0.5vw;\n  margin-left: 0.5vw; }\n\n.glyphicon {\n  cursor: pointer; }\n\ninput::-webkit-input-placeholder {\n  color: grey;\n  padding-left: 1vw; }\n\n.smart > th {\n  text-align: center; }\n\n.smarttable {\n  margin-left: 0vw;\n  margin-right: 2vw; }\n\n.manager {\n  margin-left: 2vw;\n  margin-right: 10vw;\n  margin-top: 10vh; }\n\n.manager > h3 {\n  margin-left: 2vw;\n  margin-bottom: 2vh; }\n\n.zero {\n  width: 10%;\n  text-align: center; }\n\n.first {\n  width: 10%; }\n\n.second {\n  width: 60%; }\n\n.first > span,\n.second > span,\n.third > span {\n  color: rgba(62, 62, 62, 0.48); }\n\nspan {\n  cursor: pointer; }\n\n.third {\n  width: 20%; }\n\n.pagers {\n  width: 100%;\n  height: auto;\n  text-align: center; }\n\n#menu ul, li {\n  display: inline-block; }\n\n.smart > th {\n  background-color: rgba(238, 232, 35, 0.11); }\n\n.header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: space-around;\n  -webkit-box-align: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  margin: 1vh 1vh;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n\n.btn-icon {\n  height: 80%;\n  margin-top: 1vh; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 550:
/***/ (function(module, exports) {

module.exports = "<app-navside></app-navside>\r\n<router-outlet></router-outlet>\r\n<app-navbar></app-navbar>\r\n\r\n"

/***/ }),

/***/ 551:
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard\"  >\r\n   <div class=\"table1\" (mouseover)=\"onPress()\"> <a routerLink=\"/tables\" style=\"color: #0f0f0f\" ><span><img src={{image1}}> </span></a></div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 552:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  main works!\r\n</p>\r\n"

/***/ }),

/***/ 553:
/***/ (function(module, exports) {

module.exports = "<div class=\"black\">\r\n  <!--======Nav BAr===============================================-->\r\n  <nav    class=\"navbar navbar-light navbar-fixed-top \"  >\r\n    <div class=\"container-fluid\">\r\n      <!-- Brand and toggle get grouped for better mobile display -->\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <a class=\"navbar-brand\" href=\"#\">{{\"Formula\" }}</a>\r\n      </div>\r\n\r\n      <!-- Collect the nav links, forms, and other content for toggling -->\r\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\" >\r\n        <ul class=\"nav navbar-nav\">\r\n          <li class=\"active tog\">\r\n\r\n            <a (click)=\"toggleSideBar()\">\r\n              <span class=\"glyphicon glyphicon-resize-horizontal\" aria-hidden=\"true\"> </span>\r\n             <!-- <i class=\"fa fa-toggle-on\"  *ngIf=\"toggle\"></i>\r\n              <i class=\"fa fa-toggle-off\" *ngIf=\"!toggle\"></i>-->\r\n              <span class=\"sr-only\">(current)</span></a>\r\n          </li>\r\n\r\n          <!--<li>\r\n            <a href=\"#\">Link</a>\r\n          </li>-->\r\n          <!--<li class=\"dropdown\">\r\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\r\n            <ul class=\"dropdown-menu\">\r\n              <li><a href=\"#\">Action</a></li>\r\n              <li><a href=\"#\">Another action</a></li>\r\n              <li><a href=\"#\">Something else here</a></li>\r\n              <li role=\"separator\" class=\"divider\"></li>\r\n              <li><a href=\"#\">Separated link</a></li>\r\n              <li role=\"separator\" class=\"divider\"></li>\r\n              <li><a href=\"#\">One more separated link</a></li>\r\n            </ul>\r\n          </li>-->\r\n\r\n        </ul>\r\n\r\n       <!-- <form class=\"navbar-form navbar-left\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n          </div>\r\n          <button type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n        </form>-->\r\n        <ul class=\"nav navbar-nav navbar-right\" >\r\n          <li><a href=\"#\"> <span class=\"glyphicon glyphicon-bell\" aria-hidden=\"true\"> </span><br><span>5</span></a></li>\r\n          <li><a href=\"#\"> <span class=\"glyphicon glyphicon-envelope\" aria-hidden=\"true\"> </span><br><span>5</span></a></li>\r\n          <li class=\"dropdown\">\r\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n              <img src=\"../src/img/Nasta.png\" class=\"imag_nav\"> <span class=\"caret\"></span></a>\r\n            <ul class=\"dropdown-menu\">\r\n              <!-- <li><a href=\"#\">Action</a></li>\r\n               <li><a href=\"#\">Another action</a></li>\r\n               <li><a href=\"#\">Something else here</a></li>\r\n               <li role=\"separator\" class=\"divider\"></li>\r\n               <li><a href=\"#\">Separated link</a></li>-->\r\n              <li class=\"dropdown-item\"><i class=\"dropdown-arr\"></i></li>\r\n              <li class=\"dropdown-item\"><a href><i class=\"fa fa-user\"></i>Profile</a></li>\r\n              <li class=\"dropdown-item\"><a href><i class=\"fa fa-cog\"></i>Settings</a></li>\r\n              <li class=\"dropdown-item\"><a href class=\"signout\"><i class=\"fa fa-power-off\"></i>Sign out</a></li>\r\n            </ul>\r\n          </li>\r\n        </ul>\r\n      </div><!-- /.navbar-collapse -->\r\n    </div><!-- /.container-fluid -->\r\n  </nav>\r\n  <!--<div class=\"row\">\r\n\r\n  <div class='menuleft col-md-2' style=\"text-align: start\">\r\n  <h4 class=\"punkt\">Home</h4>\r\n  <h4 class=\"punkt\" style=\"margin-top: 0\">Tables</h4>\r\n  <h4 class=\"punkt\" style=\"margin-top: 0\">Calendar</h4>\r\n  <h4 class=\"punkt\" style=\"margin-top: 0\">Chat</h4>\r\n  <h4 class=\"punkt\" style=\"margin-top: 0\">Redactor</h4>\r\n  <h4 class=\"punkt\" style=\"margin-top: 0\">Forms</h4>\r\n  </div>\r\n    <div class=\"col-md-10\">\r\n    <app-tables></app-tables>\r\n    </div>\r\n  </div>-->\r\n  <!--<app-tables></app-tables>-->\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ 554:
/***/ (function(module, exports) {

module.exports = "<aside id=\"sidebar\" class=\"column-left\">\r\n\r\n  <header>\r\n\r\n\r\n\r\n  </header>\r\n\r\n\r\n  <nav id=\"main_navside\">\r\n <!--   <ul>\r\n      <li><a href=\"index.html\"><span class=\"glyphicon glyphicon-home\" aria-hidden=\"true\" style=\"margin-right: 0.2vw\"></span></a><a class=\"icons\" href=\"index.html\">Home</a></li>\r\n      <li><a href=\"examples.html\"><span class=\"glyphicon glyphicon-list-alt\" aria-hidden=\"true\" style=\"margin-right: 0.2vw\"></span></a><a class=\"icons\" href=\"examples.html\">Tables</a></li>\r\n      <li><a href=\"#\"><span class=\"glyphicon glyphicon-calendar\" aria-hidden=\"true\" style=\"margin-right: 0.2vw\"></span></a><a class=\"icons\" href=\"#\">Calendar</a></li>\r\n      <li><a href=\"#\"><span class=\"glyphicon glyphicon-earphone\" aria-hidden=\"true\" style=\"margin-right: 0.2vw\"></span></a><a class=\"icons\" href=\"#\">Feed</a></li>\r\n      <li><a href=\"#\"><span class=\"glyphicon glyphicon-list\" aria-hidden=\"true\" style=\"margin-right: 0.2vw\"></span></a><a class=\"icons\" href=\"#\">Forms</a></li>\r\n      <li><a href=\"#\"><span class=\"glyphicon glyphicon-object-align-bottom\" aria-hidden=\"true\" style=\"margin-right: 0.2vw\"></span><a class=\"icons\" href=\"#\">Diagram</a></a></li>\r\n    </ul>-->\r\n    <div>\r\n      <div class=\"side\"><a routerLink=\"\"><span class=\"glyphicon glyphicon-home\" aria-hidden=\"true\" style=\"margin-right: 1vw\"></span></a><a class=\"side_menu\" routerLink=\"\">Home</a></div>\r\n      <div class=\"side\"><a routerLink=\"/tables\"><span class=\"glyphicon glyphicon-list-alt\" aria-hidden=\"true\" style=\"margin-right: 1vw\"></span></a><a class=\"side_menu\" routerLink=\"/tables\">Tables</a></div>\r\n      <div class=\"side\"><a href=\"#\"><span class=\"glyphicon glyphicon-calendar\" aria-hidden=\"true\" style=\"margin-right: 1vw\"></span></a><a class=\"side_menu\" href=\"#\">Calendar</a></div>\r\n      <div class=\"side\"><a href=\"#\"><span class=\"glyphicon glyphicon-transfer\" aria-hidden=\"true\" style=\"margin-right: 1vw\"></span></a><a class=\"side_menu\" href=\"#\">Feed</a></div>\r\n      <div class=\"side\"><a href=\"#\"><span class=\"glyphicon glyphicon-list\" aria-hidden=\"true\" style=\"margin-right: 1vw\"></span></a><a class=\"side_menu\" href=\"#\">Forms</a></div>\r\n      <div class=\"side\"><a href=\"#\"><span class=\"glyphicon glyphicon-object-align-bottom\" aria-hidden=\"true\" style=\"margin-right: 1vw\"></span><a class=\"side_menu\" href=\"#\">Diagram</a></a></div>\r\n    </div>\r\n  </nav>\r\n\r\n\r\n\r\n</aside>\r\n"

/***/ }),

/***/ 555:
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\r\n  <label>Filter </label>\r\n  <input  type=\"text\"  id=\"inputName\" [(ngModel)]=\"inputName\"/>\r\n  <input type=\"button\" (click)=\"FilterByName()\" value=\"Apply\"/>\r\n</div>\r\n<div class='row'>\r\n  <div class=\"panel panel-default\">\r\n    <!-- Default panel contents -->\r\n    <div class='panel-heading'>Product List</div>\r\n    <div class='panel-body'>\r\n      <table class=\"table table-bordered table-condensed \">\r\n        <thead>\r\n        <th>Id</th>\r\n        <th>Name</th>\r\n        <th>Description</th>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let item of items\">\r\n          <td>{{item.id}}</td>\r\n          <td>{{item.name}}</td>\r\n          <td>{{item.description}}</td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n      <div class=\"btn-toolbar\" role=\"toolbar\" style=\"margin: 0;\">\r\n        <div class=\"btn-group\">\r\n          <label style=\"margin-top:10px\">Page {{currentIndex}}/{{pageNumber}}</label>\r\n        </div>\r\n        <div class=\"btn-group pull-right\">\r\n          <ul class=\"pagination\" >\r\n            <li [ngClass]=\"{'disabled': (currentIndex == 1 || pageNumber == 0)}\" ><a  (click)=\"prevPage()\" href=\"#\">Prev</a></li>\r\n            <li *ngFor=\"let page of pagesIndex\"  [ngClass]=\"{'active': (currentIndex == page)}\">\r\n              <a (click)=\"setPage(page)\" href=\"#\" >{{page}}</a>\r\n            </li>\r\n            <li [ngClass]=\"{'disabled': (currentIndex == pageNumber || pageNumber == 0)}\" ><a   (click)=\"nextPage()\" href=\"#\">Next</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 556:
/***/ (function(module, exports) {

module.exports = "<div class=\"card_table\" id=\"table_wrapper\">\r\n  <!--<div class=\"title\">\r\n\r\n    <h1>{{title2}}</h1>\r\n    <button type=\"button\" class=\"btn btn-warning btn-icon\" (click)=\"myFunction()\"><i class=\"fa fa-exclamation-circle\" aria-hidden=\"true\">Export to Excel</i></button>\r\n  </div>-->\r\n\r\n  <!--<ng2-smart-table  [settings]=\"settings\"\r\n                    [source]=\"source\"\r\n                    (deleteConfirm)=\"onDeleteConfirm($event)\"\r\n                    (editConfirm)=\"onSaveConfirm($event)\"\r\n                    (createConfirm)=\"onCreateConfirm($event)\"  class=\"ng2-smart-table \" >\r\n\r\n  </ng2-smart-table>&ndash;&gt;\r\n-->\r\n\r\n <!-- <table class=\"table table-bordered\" id=\"tableUser\"  >\r\n    <caption >{{title}}</caption>\r\n    <thead>\r\n    <tr>\r\n      <th style=\"background-color: #f8ffda; border: 1px solid #0f0f0f\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></th>\r\n      <th style=\"background-color: #BCEBDD;  border: 1px solid #0f0f0f\">{{settings.columns.id.title}}</th>\r\n      <th class=\"align-right\" style=\"background-color: #BCEBDD; border: 1px solid #0f0f0f\">{{settings.columns.fullName.title}}</th>\r\n      <th class=\"align-right\" style=\"background-color: #BCEBDD; border: 1px solid #0f0f0f\">{{settings.columns.profile.title}}</th>\r\n      <input type=\"text\" [ngModel]=\"fullname\"  />\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let item of users\">\r\n      <td style=\"background-color: #f8ffda; border: 1px solid #0f0f0f\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></td>\r\n      <td style=\"background-color: #f8ffda; border: 1px solid #0f0f0f\">{{item.id}}</td>\r\n      <td ngClass=\"nowrap\" style=\"background-color: #dbe2bd; border: 1px solid #0f0f0f\" value=\"fullname\">{{item.fullname}}</td>\r\n      <td class=\"align-right\" style=\"background-color: #f8ffda; border: 1px solid #0f0f0f\">{{item.profile}}</td>\r\n\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n\r\n\r\n  <table class=\"table table-bordered\" id=\"tableUser1\"  >\r\n    <caption >{{title}}</caption>\r\n    <thead>\r\n    <tr>\r\n      <th style=\"background-color: #f8ffda; border: 1px solid #0f0f0f\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></th>\r\n      <th style=\"background-color: #BCEBDD;  border: 1px solid #0f0f0f\">{{settingsa.columns.id.title}}</th>\r\n      <th class=\"align-right\" style=\"background-color: #BCEBDD; border: 1px solid #0f0f0f\">{{settingsa.columns.fullName.title}}</th>\r\n      <th class=\"align-right\" style=\"background-color: #BCEBDD; border: 1px solid #0f0f0f\">{{settingsa.columns.profile.title}}</th>\r\n\r\n    </tr>\r\n    <tr>\r\n    <th><input type=\"text\" [(ngModel)]=\"fullname\"  /></th>\r\n\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let item of u \" >\r\n\r\n      <td style=\"background-color: #f8ffda; border: 1px solid #0f0f0f\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></td>\r\n      <td style=\"background-color: #f8ffda; border: 1px solid #0f0f0f\">{{item.id}}</td>\r\n      <td ngClass=\"nowrap\" style=\"background-color: #dbe2bd; border: 1px solid #0f0f0f\" value=\"fullname\" >{{item.fullname}}</td>\r\n      <td class=\"align-right\" style=\"background-color: #f8ffda; border: 1px solid #0f0f0f\">{{item.profile}}</td>\r\n\r\n    </tr>\r\n    </tbody>\r\n  </table>-->\r\n\r\n\r\n  <section id=\"content\" class=\"column-right\">\r\n\r\n  <div class=\"manager\">\r\n    <div class=\"header\">\r\n      <h3>{{title}}  </h3>   <button type=\"button\" class=\"btn btn-warning btn-icon\" (click)=\"myFunction()\"><i class=\"fa fa-exclamation-circle\" aria-hidden=\"true\">Export to Excel</i></button>\r\n    </div>\r\n  <!--  <h3>{{title}}    <button type=\"button\" class=\"btn btn-warning btn-icon\" (click)=\"myFunction()\"><i class=\"fa fa-exclamation-circle\" aria-hidden=\"true\">Export to Excel</i></button> </h3>-->\r\n  <table class=\"table table-bordered smarttable\" >\r\n\r\n    <thead>\r\n    <tr>\r\n      <td class=\"zero\" style=\"background-color: #f8ffda; border: 1px solid #0f0f0f\">Manage</td>\r\n      <th class=\"first\" style=\"background-color: #f8ffda; border: 1px solid #0f0f0f\">{{settings.columns.id.title}}\r\n        <span #id  class=\"glyphicon glyphicon-chevron-up\" aria-hidden=\"true\" (click)=\"orderByUp('id')\"></span><span  class=\"glyphicon glyphicon-chevron-down\" aria-hidden=\"true\" (click)=\"orderByDown('id')\"></span>\r\n      </th>\r\n      <th class=\"align-right second\" style=\"background-color: #f8ffda; border: 1px solid #0f0f0f\">{{settings.columns.fullname.title}}\r\n        <span  class=\"glyphicon glyphicon-chevron-up\" aria-hidden=\"true\" (click)=\"orderByUpName('fullname')\"></span><span  class=\"glyphicon glyphicon-chevron-down\" aria-hidden=\"true\" (click)=\"orderByDownName('fullname')\"></span> </th>\r\n      <th class=\"align-right third\" style=\"background-color: #f8ffda; border: 1px solid #0f0f0f\">{{settings.columns.profile.title}}\r\n        <span  class=\"glyphicon glyphicon-chevron-up\" aria-hidden=\"true\"></span><span  class=\"glyphicon glyphicon-chevron-down\" aria-hidden=\"true\"></span>\r\n      </th>\r\n\r\n    </tr>\r\n\r\n    <tr class=\"smart\">\r\n      <th> <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\" (click)=\"openAdd()\" style=\"border: 1px solid black; padding: 1vh; border-radius: 50px; margin-right: 1vw\"> </span>|<span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\" style=\"margin-left: 1vw\"> </span><span class=\"glyphicon glyphicon-arrow-right\" aria-hidden=\"true\" > </span></th>\r\n      <th><input   class=\"searchin\"   placeholder=\" id\"/></th>\r\n      <th><input #searchBox  class=\"searchin\" (keyup)=\"search(searchBox.value)\" [(ngModel)]=\"inputName\"   placeholder=\" full name\"/></th>\r\n      <th><input #searchBox class=\"searchin\" (keyup)=\"search(searchBox.value)\" placeholder=\" profile\"/></th>\r\n    </tr>\r\n    <tr class=\"addUser\" id=\"addU\" hidden>\r\n      <th class=\"addth\">\r\n        <span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\" (click)=\"onAddUsers()\"></span>\r\n        |\r\n        <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\" (click)=\"closeAdd()\"> </span>\r\n      </th>\r\n      <th><!--<input #inputName class=\"addin\" [(ngModel)]=\"newId\" placeholder=\" id\"/>--></th>\r\n      <th><input  class=\"addin\"  [(ngModel)]=\"newFullname\"  placeholder=\" full name\"/></th>\r\n      <th><input #searchBox class=\"addin\"  [(ngModel)]=\"newProfile\" placeholder=\" profile\"/></th>\r\n    </tr>\r\n\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let item of  users  let i=index \">\r\n\r\n      <td id =\"{{item.id}}\" class=\"zero\" style=\"background-color: #f8ffda; border: 1px solid #0f0f0f\">\r\n        <div id=\"{{item.id+'a'}}\">\r\n        <span   class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\" (click)=\"updateTrue(item)\"> </span>\r\n        |\r\n        <span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\" (click)=\"onDeleteUsers(item.id)\"> </span>\r\n        </div>\r\n         <div id=\"{{item.id+'b'}}\" hidden>\r\n        <span   class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\" (click)=\"onUpdateUsers(item)\"></span>\r\n        |\r\n        <span  class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\" (click)=\"updateFalse(item)\"> </span>\r\n        </div>\r\n      </td >\r\n\r\n      <td class=\"first\" style=\"background-color: #dbe2bd; border: 1px solid #0f0f0f\">{{item.id}}</td>\r\n      <td id=\"{{item.id+'c'}}\" hidden><input class=\"addin\"  placeholder=\"{{item.fullname}}\" [(ngModel)]=\"newFullname\" ></td>\r\n      <td id=\"{{item.id+'d'}}\" class=\"second\" ngClass=\"nowrap\" style=\"background-color: rgba(219, 226, 189, 0.68); border: 1px solid #0f0f0f\">{{item.fullname}}</td>\r\n      <td id=\"{{item.id+'e'}}\" class=\"align-right third\" style=\"background-color: #dbe2bd; border: 1px solid #0f0f0f\">{{item.profile}}</td>\r\n      <td id=\"{{item.id+'f'}}\" hidden><input class=\"addin\"  placeholder=\"{{item.profile}}\" [(ngModel)]=\"newProfile\"></td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n    <div class=\"pagers\">\r\n\r\n     <div class=\"btn-toolbar\" role=\"toolbar\" style=\"margin: 0;\">\r\n        <div class=\"btn-group\">\r\n          <label style=\"margin-top:10px\">Page {{currentIndex}}/{{pageNumber}}</label>\r\n        </div>\r\n        <div class=\"btn-group pull-right\">\r\n          <ul class=\"pagination\" >\r\n            <li [ngClass]=\"{'disabled': (currentIndex == 1 || pageNumber == 0)}\" ><a  (click)=\"prevPage()\" href=\"#\">Prev</a></li>\r\n            <li *ngFor=\"let page of pagesIndex\"  [ngClass]=\"{'active': (currentIndex == page)}\">\r\n              <a (click)=\"setPage(page)\" href=\"#\" >{{page}}</a>\r\n            </li>\r\n            <li [ngClass]=\"{'disabled': (currentIndex == pageNumber || pageNumber == 0)}\" ><a   (click)=\"nextPage()\" href=\"#\">Next</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</section>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(347);


/***/ })

},[585]);
//# sourceMappingURL=main.bundle.js.map