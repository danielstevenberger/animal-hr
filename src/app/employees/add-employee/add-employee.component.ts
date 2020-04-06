import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { EmployeeService } from "src/app/services/employees.service";
import { Router, ActivatedRoute } from "@angular/router";
import { DataStorageService } from "src/app/services/data-storage.service";

@Component({
  selector: "app-add-employee",
  templateUrl: "./add-employee.component.html",
  styleUrls: ["./add-employee.component.css"],
})
export class AddEmployeeComponent implements OnInit {
  employeeAddForm: FormGroup;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataStorageService
  ) {}

  ngOnInit(): void {
    this.employeeAddForm = new FormGroup({
      profileImage: new FormControl(null, Validators.required),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      position: new FormControl(null, Validators.required),
      team: new FormControl(null, Validators.required),
      salary: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[0-9]+[0-9]*$/),
      ]),
      performanceRating: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[0-9]+[0-9]*$/),
        Validators.max(10),
      ]),
      startDate: new FormControl(null, Validators.required),
      birthDate: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    const id = this.employeeService.addEmployee(
      this.employeeAddForm.get("firstName").value,
      this.employeeAddForm.get("lastName").value,
      this.employeeAddForm.get("profileImage").value,
      this.employeeAddForm.get("position").value,
      this.employeeAddForm.get("salary").value,
      this.employeeAddForm.get("performanceRating").value,
      this.employeeAddForm.get("startDate").value,
      this.employeeAddForm.get("birthDate").value,
      this.employeeAddForm.get("team").value
    );
    console.log(id);

    this.dataService.storeEmployees().subscribe((resDta) => {
      this.router.navigate(["../", id], {
        relativeTo: this.route,
      });
    });
  }
}
