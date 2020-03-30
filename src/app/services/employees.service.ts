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
      "2020-01-03",
      "1995-03-02"
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
      "2015-07-03",
      "1990-05-10"
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
      "2004-11-15",
      "1980-05-27"
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
