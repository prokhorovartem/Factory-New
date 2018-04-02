import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams = [
    {name: 'Team1', id: 1, year: 2004, country: 'Russia'},
    {name: 'Team2', id: 2, year: 2005, country: 'Japan'},
    {name: 'Team3', id: 3, year: 2006, country: 'China'},
    {name: 'Team4', id: 4, year: 2007, country: 'Canada'},
    {name: 'Adam Jensen', id: 5, year: 2027, country: 'USA'}
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick(team: string, id: number) {
    this.router.navigate(['showteam', team,  id]);
  }
}
