import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "src/app/services/employees.service";
import { Employee } from "src/app/models/employee.model";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"],
})
export class EmployeeComponent implements OnInit {
  selectedEmployee: Employee;
  id: number;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.selectedEmployee = this.employeeService.getEmployee(this.id);
    });
    if (!this.selectedEmployee) {
      this.router.navigate([""]);
    }
  }

  editEmployee(employee: Employee) {}
}
