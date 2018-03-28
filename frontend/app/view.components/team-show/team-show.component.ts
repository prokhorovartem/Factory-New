import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-team-show',
  templateUrl: './team-show.component.html',
  styleUrls: ['./team-show.component.css']
})
export class TeamShowComponent implements OnInit {

  team: string;
  constructor(private activateRoute: ActivatedRoute) {
    this.team = this.activateRoute.snapshot.params['team'];
  }

  ngOnInit() {
  }

}
