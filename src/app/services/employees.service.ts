import { Employee } from "src/app/models/employee.model";

export class EmployeeService {
  private employees: Employee[] = [
    new Employee(
      5,
      "John",
      "Adams",
      "../assets/images/dog.png",
      "Web Developer",
      "User Interface Design",
      100000,
      10,
      "2020-01-03",
      "1995-03-02"
    ),
    new Employee(
      6,
      "Jimmy",
      "Washington",
      "../assets/images/walrus.png",
      "Web Developer",
      "User Interface Design",
      90000,
      9,
      "2015-07-03",
      "1990-05-10"
    ),
    new Employee(
      7,
      "Timmy",
      "Shapiro",
      "../assets/images/hippo.png",
      "Web Developer",
      "User Interface Design",
      80000,
      8,
      "2004-11-15",
      "1980-05-27"
    ),
    new Employee(
      8,
      "Eric",
      "Johnson",
      "../assets/images/turkey.png",
      "Web Developer",
      "User Interface Design",
      70000,
      7,
      "2015-12-04",
      "1993-04-18"
    )
  ];

  getEmployees() {
    return this.employees.slice();
  }

  getEmployee(id: number) {
    for (let employee of this.employees) {
      if (employee.id === id) {
        return employee;
      }
    }
  }

  editEmployee(employeeInfo: Employee, id: number) {
    let i = 0;
    for (let employee of this.employees) {
      if (employee.id === id) {
        this.employees[i] = employeeInfo;
      }
      i++;
    }
  }

  removeEmployee(id: number) {
    let i = 0;
    for (let employee of this.employees) {
      if (employee.id === id) {
        this.employees.splice(i, 1);
      }
      i++;
    }
  }
}
