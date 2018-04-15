import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {HttpClient, HttpClientModule, HttpParams} from '@angular/common/http';


@Component({
  selector: 'app-team-show',
  templateUrl: './team-show.component.html',
  styleUrls: ['./team-show.component.css']
})
export class TeamShowComponent implements OnInit {
  id: string;
  private team: Object;
  private players: Object;
  private matches: Object;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.http.get('http://localhost:5000/api/teams/' + this.id).subscribe(data => {
      this.team = data;
    });
    this.http.get('http://localhost:5000/api/teams/' + this.id + '/players').subscribe(data => {
      this.players = data;
    });
    this.http.get('http://localhost:5000/api/teams/' + this.id + '/matches').subscribe(data => {
      this.matches = data;
    });
  }

}
