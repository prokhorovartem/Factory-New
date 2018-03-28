import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-map-show',
  templateUrl: './map-show.component.html',
  styleUrls: ['./map-show.component.css']
})
export class MapShowComponent implements OnInit {
  map: string;

  constructor(private activateRoute: ActivatedRoute) {
    this.map = this.activateRoute.snapshot.params['map'];
  }

  ngOnInit() {
  }

}
