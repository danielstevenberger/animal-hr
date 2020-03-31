import { Component, OnInit } from "@angular/core";
import { TeamService } from "../services/team.service";
import { Team } from "../models/team.model";

@Component({
  selector: "app-teams",
  templateUrl: "./teams.component.html",
  styleUrls: ["./teams.component.css"]
})
export class TeamsComponent implements OnInit {
  query = "";
  search: any = "";
  teams: Team[];

  constructor(private teamService: TeamService) {
    this.teams = teamService.getTeams();
    console.log(this.teams[0]);
  }

  ngOnInit(): void {}
}
