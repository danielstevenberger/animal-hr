import { Employee } from "src/app/models/employee.model";
import { EventEmitter } from "@angular/core";

export class EmployeeService {
  employeeSelected = new EventEmitter<Employee>();

  private employees: Employee[] = [
    new Employee(
      "John",
      "Adams",
      "https://cdn.pixabay.com/photo/2014/04/02/10/39/hippo-304117_1280.png",
      "Web Developer",
      "User Interface Design",
      100000,
      10,
      new Date(),
      new Date()
    ),
    new Employee(
      "Jimmy",
      "Washington",
      "https://cdn.pixabay.com/photo/2013/07/13/11/57/tusk-159025_1280.png",
      "Web Developer",
      "User Interface Design",
      90000,
      9,
      new Date(),
      new Date()
    ),
    new Employee(
      "Timmy",
      "Shapiro",
      "https://cdn.pixabay.com/photo/2012/05/07/01/55/sheep-47527_1280.png",
      "Web Developer",
      "User Interface Design",
      80000,
      8,
      new Date(),
      new Date()
    ),
    new Employee(
      "Eric",
      "Johnson",
      "https://cdn.pixabay.com/photo/2016/04/01/08/27/animal-1298721_1280.png",
      "Web Developer",
      "User Interface Design",
      70000,
      7,
      new Date(),
      new Date()
    )
  ];

  getEmployees() {
    return this.employees.slice();
  }
}
