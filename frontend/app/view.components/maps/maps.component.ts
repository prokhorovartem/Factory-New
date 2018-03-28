import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  maps = ['map1', 'map2', 'map3', 'map4', 'map5'];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick(map: string) {
    this.router.navigate(['showmap', map]);
  }
}
