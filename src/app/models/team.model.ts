import { Employee } from "./employee.model";

export class Team {
  public id: number;
  public name: string;
  public description: string;
  public image: string;
  public leader?: Employee;
  public members?: Employee[];

  constructor(
    id: number,
    name: string,
    description: string,
    image: string,
    leader?: Employee,
    members?: Employee[]
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.image = image;
    this.leader = leader;
    this.members = members;
  }
}
