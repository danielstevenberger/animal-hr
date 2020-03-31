import { Employee } from "src/app/models/employee.model";

export class EmployeeService {
  private id = 0;
  private newId: number;

  generateId() {
    this.id++;
    return this.id;
  }

  private employees: Employee[] = [
    new Employee(
      this.generateId(),
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
      this.generateId(),
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
      this.generateId(),
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
      this.generateId(),
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

  addEmployee(
    firstName: string,
    lastName: string,
    profileImage: string,
    position: string,
    team: string,
    salary: number,
    performanceRating: number,
    startDate: string,
    birthDate: string
  ) {
    this.employees.push(
      new Employee(
        (this.newId = this.generateId()),
        firstName,
        lastName,
        profileImage,
        position,
        team,
        salary,
        performanceRating,
        startDate,
        birthDate
      )
    );
    return this.newId;
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
