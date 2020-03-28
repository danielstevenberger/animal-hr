import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "src/app/services/employees.service";
import { Employee } from "src/app/models/employee.model";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  selectedEmployee: Employee;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.employeeSelected.subscribe(
      (employee: Employee) => (this.selectedEmployee = employee)
    );
  }
}
