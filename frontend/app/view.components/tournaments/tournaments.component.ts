import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css']
})
export class TournamentsComponent implements OnInit {
  private tournaments: Object;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:5000/api/tournaments').subscribe(data => {
      this.tournaments = data;
    });
  }
}
