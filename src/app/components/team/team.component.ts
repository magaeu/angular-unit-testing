import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team/team.service';
import {Observable} from 'rxjs';
import {TeamModel} from '../../models/team-model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teams$: Observable<TeamModel[]>;

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teams$ = this.teamService.getTeams();
  }

}
