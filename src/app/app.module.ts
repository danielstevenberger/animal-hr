import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { EmployeesComponent } from "./employees/employees.component";
import { EmployeeComponent } from "./employees/employee/employee.component";
import { EmployeeService } from "./services/employees.service";
import { SearchPipe } from "./_pipe/search/search.pipe";
import { EditEmployeeComponent } from "./employees/edit-employee/edit-employee/edit-employee.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    EmployeesComponent,
    EmployeeComponent,
    SearchPipe,
    EditEmployeeComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
