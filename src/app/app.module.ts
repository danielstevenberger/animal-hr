import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { EmployeesComponent } from "./employees/employees.component";
import { EmployeeComponent } from "./employees/employee/employee.component";
import { EmployeeService } from "./services/employees.service";
import { SearchPipe } from "./_pipe/search/search.pipe";
import { EditEmployeeComponent } from "./employees/edit-employee/edit-employee.component";
import { AppRoutingModule } from "./app-routing.module";
import { TeamsComponent } from "./teams/teams.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { DatePipe, CommonModule } from "@angular/common";
import { AddEmployeeComponent } from "./employees/add-employee/add-employee.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    EmployeesComponent,
    EmployeeComponent,
    SearchPipe,
    EditEmployeeComponent,
    TeamsComponent,
    PageNotFoundComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [EmployeeService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
