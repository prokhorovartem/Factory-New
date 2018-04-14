import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  private maps: Object;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:5000/api/teams').subscribe(data => {
      this.maps = data;
    });
  }

  onClick(map: string) {
    this.router.navigate(['showmap', map]);
  }
}
