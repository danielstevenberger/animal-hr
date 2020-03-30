import { Component, OnInit } from "@angular/core";
import { Employee } from "src/app/models/employee.model";
import { ActivatedRoute, Params } from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";
import { EmployeeService } from "src/app/services/employees.service";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-edit-employee",
  templateUrl: "./edit-employee.component.html",
  styleUrls: ["./edit-employee.component.css"]
})
export class EditEmployeeComponent implements OnInit {
  selectedEmployee: Employee;
  id: number;
  employeeEditForm: FormGroup;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.selectedEmployee = this.employeeService.getEmployee(this.id);
    });
    this.employeeEditForm = new FormGroup({
      profileImage: new FormControl(null),
      firstName: new FormControl(this.selectedEmployee.firstName),
      lastName: new FormControl(this.selectedEmployee.lastName),
      position: new FormControl(this.selectedEmployee.position),
      team: new FormControl(this.selectedEmployee.team),
      salary: new FormControl(this.selectedEmployee.salary),
      performanceRating: new FormControl(
        this.selectedEmployee.performanceRating
      ),
      startDate: new FormControl(this.selectedEmployee.startDate),
      birthDate: new FormControl(this.selectedEmployee.birthDate)
    });
  }

  onSubmit() {
    this.selectedEmployee.firstName = this.employeeEditForm.get(
      "firstName"
    ).value;
    this.selectedEmployee.lastName = this.employeeEditForm.get(
      "lastName"
    ).value;
    this.selectedEmployee.profileImage = this.employeeEditForm.get(
      "profileImage"
    ).value;
    this.selectedEmployee.position = this.employeeEditForm.get(
      "position"
    ).value;
    this.selectedEmployee.team = this.employeeEditForm.get("team").value;
    this.selectedEmployee.salary = this.employeeEditForm.get("salary").value;
    this.selectedEmployee.performanceRating = this.employeeEditForm.get(
      "performanceRating"
    ).value;
    this.selectedEmployee.startDate = this.employeeEditForm.get(
      "startDate"
    ).value;
    this.selectedEmployee.birthDate = this.employeeEditForm.get(
      "birthDate"
    ).value;

    this.employeeService.editEmployee(this.selectedEmployee, this.id);
  }

  onRemove() {
    const answer = confirm("Are you sure you want to remove the employee");
    if (answer) {
      this.employeeService.removeEmployee(this.id);
    }
  }
}
