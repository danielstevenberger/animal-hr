import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "src/app/services/employees.service";
import { Employee } from "src/app/models/employee.model";

@Component({
  selector: "app-edit-employee",
  templateUrl: "./edit-employee.component.html",
  styleUrls: ["./edit-employee.component.css"]
})
export class EditEmployeeComponent implements OnInit {
  selectedEmployee: Employee;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.editEmployeeSelected.subscribe(
      (employee: Employee) => (this.selectedEmployee = employee)
    );
  }
}
