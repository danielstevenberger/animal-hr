import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { EmployeeService } from "./employees.service";
import { Employee } from "../models/employee.model";
import { AuthService } from "../auth/auth.service";
import { take, exhaustMap } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private employeeService: EmployeeService,
    private authService: AuthService
  ) {}

  storeEmployees() {
    const recipes = this.employeeService.getEmployees();
    return this.http.put(
      "https://animal-hr.firebaseio.com/employees.json",
      recipes
    );
    // .subscribe((response) => {});
  }

  fetchEmployees() {
    return this.http.get<Employee[]>(
      "https://animal-hr.firebaseio.com/employees.json"
    );

    // .subscribe((employees) => {
    //   this.employeeService.setEmployees(employees);
    //   return employees;
    // });
  }
}
