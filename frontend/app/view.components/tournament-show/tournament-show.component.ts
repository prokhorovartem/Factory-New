import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tournament-show',
  templateUrl: './tournament-show.component.html',
  styleUrls: ['./tournament-show.component.css']
})
export class TournamentShowComponent implements OnInit {
  tournament: string;
  constructor(private activateRoute: ActivatedRoute) {
    this.tournament = this.activateRoute.snapshot.params['tournament'];
  }

  ngOnInit() {
  }

}
