import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {HttpClient, HttpClientModule, HttpParams} from '@angular/common/http';


@Component({
  selector: 'app-tournament-show',
  templateUrl: './tournament-show.component.html',
  styleUrls: ['./tournament-show.component.css']
})
export class TournamentShowComponent implements OnInit {
  id: string;
  private tournament: Object;
  private matches: Object;

  constructor(private activateRoute: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.http.get('http://localhost:5000/api/tournaments/' + this.id).subscribe(data => {
      this.tournament = data;
    });
    this.http.get('http://localhost:5000/api/tournaments/' + this.id + '/matches').subscribe(data => {
      this.matches = data;
    });
  }

}
