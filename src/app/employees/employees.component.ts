import { Component, OnInit } from "@angular/core";
import { Employee } from "../models/employee.model";
import { EmployeeService } from "../services/employees.service";
import { DataStorageService } from "../services/data-storage.service";

@Component({
  selector: "app-employees",
  templateUrl: "./employees.component.html",
  styleUrls: ["./employees.component.css"],
})
export class EmployeesComponent implements OnInit {
  query = "";
  search: any = "";

  employees: Employee[];

  constructor(
    private employeeService: EmployeeService,
    private dataService: DataStorageService
  ) {
    // this.employees = employeeService.getEmployees();
  }

  ngOnInit() {
    this.dataService.fetchEmployees().subscribe((employees) => {
      if (employees) {
        this.employeeService.setEmployees(employees);
        this.employees = employees;
      }
      return;
    });
  }
}
