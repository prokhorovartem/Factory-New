import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-team-show',
  templateUrl: './team-show.component.html',
  styleUrls: ['./team-show.component.css']
})
export class TeamShowComponent implements OnInit {
  name: string;
  id: number;
  year: number;
  country: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
     this.name = this.activatedRoute.snapshot.params['name'];
     this.id = this.activatedRoute.snapshot.params['id'];
     this.year = this.activatedRoute.snapshot.queryParams['year'];
     this.country = this.activatedRoute.snapshot.queryParams['country'];

    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.name = params['name'];
    });
  }

}
