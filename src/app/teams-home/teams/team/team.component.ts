import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Team } from "src/app/models/team.model";
import { TeamService } from "src/app/services/team.service";

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.css"]
})
export class TeamComponent implements OnInit {
  id: number;
  team: Team;

  constructor(
    private teamSerivce: TeamService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.team = this.teamSerivce.getTeam(this.id);
    });
  }
}
