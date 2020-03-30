export class Employee {
  public id: number;
  public firstName: string;
  public lastName: string;
  public profileImage: string;
  public position: string;
  public team: string;
  public salary: number;
  public performanceRating: number;
  public startDate: string;
  public birthDate: string;

  constructor(
    id: number,
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
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.profileImage = profileImage;
    this.position = position;
    this.team = team;
    this.salary = salary;
    this.performanceRating = performanceRating;
    this.startDate = startDate;
    this.birthDate = birthDate;
  }
}
