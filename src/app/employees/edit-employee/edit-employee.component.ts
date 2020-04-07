import { Component, OnInit } from "@angular/core";
import { Employee } from "src/app/models/employee.model";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { EmployeeService } from "src/app/services/employees.service";
import { DataStorageService } from "src/app/services/data-storage.service";

@Component({
  selector: "app-edit-employee",
  templateUrl: "./edit-employee.component.html",
  styleUrls: ["./edit-employee.component.css"],
})
export class EditEmployeeComponent implements OnInit {
  selectedEmployee: Employee;
  id: number;
  employeeEditForm: FormGroup;
  confirmRemove = false;
  message: string;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataStorageService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.selectedEmployee = this.employeeService.getEmployee(this.id);
    });
    if (!this.selectedEmployee) {
      this.router.navigate([""]);
    }
    this.employeeEditForm = new FormGroup({
      profileImage: new FormControl(
        this.selectedEmployee.profileImage,
        Validators.required
      ),
      firstName: new FormControl(
        this.selectedEmployee.firstName,
        Validators.required
      ),
      lastName: new FormControl(
        this.selectedEmployee.lastName,
        Validators.required
      ),
      position: new FormControl(
        this.selectedEmployee.position,
        Validators.required
      ),
      team: new FormControl(this.selectedEmployee.team, Validators.required),
      salary: new FormControl(this.selectedEmployee.salary, [
        Validators.required,
        Validators.pattern(/^[0-9]+[0-9]*$/),
      ]),
      performanceRating: new FormControl(
        this.selectedEmployee.performanceRating,
        [
          Validators.required,
          Validators.pattern(/^[0-9]+[0-9]*$/),
          Validators.max(10),
        ]
      ),
      startDate: new FormControl(
        this.selectedEmployee.startDate,
        Validators.required
      ),
      birthDate: new FormControl(
        this.selectedEmployee.birthDate,
        Validators.required
      ),
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
    this.dataService.storeEmployees().subscribe((resData) => {
      this.router.navigate(["../../", this.selectedEmployee.id], {
        relativeTo: this.route,
      });
    });
  }

  onCancel() {
    this.confirmRemove = false;
  }

  onConfirmRemove() {
    this.employeeService.removeEmployee(this.id);
    this.dataService.storeEmployees().subscribe((resData) => {
      this.router.navigate(["../"]);
    });
  }

  onRemove() {
    this.message = "Are you sure you want to remove this employee?";
    this.confirmRemove = true;
  }
}
