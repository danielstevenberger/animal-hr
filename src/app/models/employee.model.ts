export class Employee {
  public firstName: string;
  public lastName: string;
  public profileImage: string;
  public position: string;
  public team: string;
  public salaray: number;
  public performanceRating: number;
  public startDate: Date;
  public birthDate: Date;

  constructor(
    firstName: string,
    lastName: string,
    profileImage: string,
    position: string,
    team: string,
    salaray: number,
    performanceRating: number,
    startDate: Date,
    birthDate: Date
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profileImage = profileImage;
    this.position = position;
    this.team = team;
    this.salaray = salaray;
    this.performanceRating = performanceRating;
    this.startDate = startDate;
    this.birthDate = birthDate;
  }
}
