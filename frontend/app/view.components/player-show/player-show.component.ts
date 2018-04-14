import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {HttpClient, HttpClientModule, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-player-show',
  templateUrl: './player-show.component.html',
  styleUrls: ['./player-show.component.css']
})
export class PlayerShowComponent implements OnInit {
  id: string;
  private player: Object;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.http.get('http://localhost:5000/api/players/' + this.id).subscribe(data => {
      this.player = data;
    });
  }

}
