import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmployeesComponent } from "./employees/employees.component";

import { EmployeeComponent } from "./employees/employee/employee.component";
import { EditEmployeeComponent } from "./employees/edit-employee/edit-employee.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AddEmployeeComponent } from "./employees/add-employee/add-employee.component";
import { AuthComponent } from "./auth/auth.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/employees", pathMatch: "full" },
  {
    path: "employees",
    component: HomeComponent,
    children: [
      { path: "", component: EmployeesComponent },
      { path: "add", component: AddEmployeeComponent },
      {
        path: ":id",
        component: EmployeeComponent,
      },

      { path: ":id/edit", component: EditEmployeeComponent },
    ],
  },
  { path: "auth", component: AuthComponent },
  { path: "page-not-found", component: PageNotFoundComponent },
  { path: "**", redirectTo: "/page-not-found" },
  // {
  //   path: "employees",
  //   component: EmployeesComponent,
  //   children: [
  //     { path: ":id", component: EmployeeComponent },
  //     { path: ":id/edit", component: EditEmployeeComponent }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
