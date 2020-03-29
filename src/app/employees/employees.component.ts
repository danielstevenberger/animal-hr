import { Component, OnInit } from "@angular/core";
import { Employee } from "../models/employee.model";
import { EmployeeService } from "../services/employees.service";

@Component({
  selector: "app-employees",
  templateUrl: "./employees.component.html",
  styleUrls: ["./employees.component.css"]
})
export class EmployeesComponent implements OnInit {
  query = "";
  search: any = "";

  employees: Employee[];

  constructor(private employeeService: EmployeeService) {
    this.employees = employeeService.getEmployees();
  }

  ngOnInit(): void {}
}