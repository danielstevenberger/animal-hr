export class Employee {
  public id: number;
  public firstName: string;
  public lastName: string;
  public profileImage: string;
  public position: string;
  public salary: number;
  public performanceRating: number;
  public startDate: string;
  public birthDate: string;
  public team: string;

  constructor(
    id: number,
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
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.profileImage = profileImage;
    this.position = position;
    this.salary = salary;
    this.performanceRating = performanceRating;
    this.startDate = startDate;
    this.birthDate = birthDate;
    this.team = team;
  }
}
