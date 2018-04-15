import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {HttpClient, HttpClientModule, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-game-show',
  templateUrl: './game-show.component.html',
  styleUrls: ['./game-show.component.css']
})
export class GameShowComponent implements OnInit {
  id: string;
  private game: Object;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.http.get('http://localhost:5000/api/games/' + this.id).subscribe(data => {
      this.game = data;
    });
  }

}
