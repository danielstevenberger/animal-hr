import { Employee } from "src/app/models/employee.model";

export class EmployeeService {
  private employees: Employee[] = [
    new Employee(
      5,
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
      6,
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
      7,
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
      8,
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

  getEmployee(index: number) {
    for (let employee of this.employees) {
      if (employee.id === index) {
        return employee;
      }
    }
  }
}
