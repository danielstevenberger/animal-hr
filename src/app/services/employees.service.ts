import { Employee } from "src/app/models/employee.model";
import { Subject } from "rxjs";

export class EmployeeService {
  private id = 0;
  private newId: number;
  employeesChanged = new Subject<Employee[]>();

  generateId() {
    this.id++;
    return this.id;
  }

  private employees: Employee[] = [
    // new Employee(
    //   this.generateId(),
    //   "John",
    //   "Adams",
    //   "../assets/images/dog.png",
    //   "Web Developer",
    //   100000,
    //   10,
    //   "2020-01-03",
    //   "1995-03-02",
    //   "User Interface Design"
    // ),
    // new Employee(
    //   this.generateId(),
    //   "Jimmy",
    //   "Washington",
    //   "../assets/images/walrus.png",
    //   "Web Developer",
    //   90000,
    //   9,
    //   "2015-07-03",
    //   "1990-05-10",
    //   "User Experience Design"
    // ),
    // new Employee(
    //   this.generateId(),
    //   "Timmy",
    //   "Shapiro",
    //   "../assets/images/hippo.png",
    //   "Web Developer",
    //   80000,
    //   8,
    //   "2004-11-15",
    //   "1980-05-27",
    //   "Database Design"
    // ),
    // new Employee(
    //   this.generateId(),
    //   "Eric",
    //   "Johnson",
    //   "../assets/images/turkey.png",
    //   "Web Developer",
    //   70000,
    //   7,
    //   "2015-12-04",
    //   "1993-04-18",
    //   "User Experience Design"
    // ),
  ];

  setEmployees(employees: Employee[]) {
    this.employees = employees;
    this.employeesChanged.next(this.employees.slice());
  }

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
    salary: number,
    performanceRating: number,
    startDate: string,
    birthDate: string,
    team: string
  ) {
    if (this.employees) {
      this.employees.push(
        new Employee(
          (this.newId = this.generateId()),
          firstName,
          lastName,
          profileImage,
          position,
          salary,
          performanceRating,
          startDate,
          birthDate,
          team
        )
      );
    } else {
      this.employees = [
        new Employee(
          (this.newId = this.generateId()),
          firstName,
          lastName,
          profileImage,
          position,
          salary,
          performanceRating,
          startDate,
          birthDate,
          team
        ),
      ];
    }
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
