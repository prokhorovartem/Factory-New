import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {HttpClient, HttpClientModule, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-match-show',
  templateUrl: './match-show.component.html',
  styleUrls: ['./match-show.component.css']
})
export class MatchShowComponent implements OnInit {
  id: string;
  //tournamentName: string;
  private match: Object;
  private games: Object;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    //this.tournamentName = this.activatedRoute.snapshot.params['tournamentName'];
    this.http.get('http://localhost:5000/api/matches/' + this.id).subscribe(data => {
      this.match = data;
    });
    this.http.get('http://localhost:5000/api/matches/' + this.id + '/games').subscribe(data => {
      this.games = data;
    });
  }

}
