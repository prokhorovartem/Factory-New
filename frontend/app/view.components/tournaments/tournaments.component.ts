import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css']
})
export class TournamentsComponent implements OnInit {
  tournaments = ['Tournament1', 'Tournament2', 'Tournament3', 'Tournament4', 'Tournament5'];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick(tournament: string) {
    this.router.navigate(['showtournament', tournament]);
  }

}
