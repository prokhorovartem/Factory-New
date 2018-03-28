import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams = ['Team1', 'Team2', 'Team3', 'Team4', 'Team5'];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick(team: string) {
    this.router.navigate(['showteam', team]);
  }
}
