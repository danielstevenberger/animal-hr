import { Component, OnInit } from "@angular/core";
import { TeamService } from "src/app/services/team.service";
import { Team } from "src/app/models/team.model";

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
  }

  ngOnInit(): void {}
}
