import { Routes } from "@angular/router";
import {TablesComponent} from "./tables/tables.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
export const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: DashboardComponent
  },
  {
    path: "tables",
    component: TablesComponent
  },
];
