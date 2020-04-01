import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { TeamService } from "src/app/services/team.service";
import { Team } from "src/app/models/team.model";

@Component({
  selector: "app-edit-team",
  templateUrl: "./edit-team.component.html",
  styleUrls: ["./edit-team.component.css"]
})
export class EditTeamComponent implements OnInit {
  id: number;
  team: Team;

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.team = this.teamService.getTeam(this.id);
    });
  }
}
