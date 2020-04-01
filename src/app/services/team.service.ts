import { Team } from "../models/team.model";
import { Injectable } from "@angular/core";
import { EmployeeService } from "./employees.service";

@Injectable()
export class TeamService {
  constructor(private employeeService: EmployeeService) {}

  private id = 0;
  private newId: number;
  private employeeTeam: string;

  generateId() {
    this.id++;
    return this.id;
  }

  // updateTeam(employees: Employee[], teamName: string) {
  //   const teamEmployees = [];
  //   for (let employee of employees) {
  //     if (employee.team === teamName) {
  //       teamEmployees.push(employee);
  //     }
  //   }
  //   return teamEmployees;
  // }

  private teams: Team[] = [
    new Team(
      this.generateId(),
      "User Interface Design",
      "In charge of designing each screen or page with which a user interacts",
      "https://cdn.pixabay.com/photo/2016/09/08/17/46/user-interface-1655006_1280.png"
    ),
    new Team(
      this.generateId(),
      "User Experience Design",
      "In charge of developing wireframes and task flows based on user needs.",
      "https://cdn.pixabay.com/photo/2019/01/31/20/52/web-3967926_1280.jpg"
    ),
    new Team(
      this.generateId(),
      "Database Design",
      "In charge of keeping information organized, so that it is easily accessible.",
      "https://cdn.pixabay.com/photo/2018/08/06/21/32/darknet-3588402_1280.jpg"
    )
  ];

  getTeams() {
    return this.teams.slice();
  }

  getTeam(id: number) {
    for (let team of this.teams) {
      if (team.id === id) {
        return team;
      }
    }
  }
}
