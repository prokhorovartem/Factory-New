import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  private teams: Object;

  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.http.get('http://localhost:5000/api/teams').subscribe(data => {
      this.teams = data;
    });
  }
}
