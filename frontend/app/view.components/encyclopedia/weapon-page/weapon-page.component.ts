import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {HttpClient, HttpClientModule, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-weapon-page',
  templateUrl: './weapon-page.component.html',
  styleUrls: ['./weapon-page.component.css']
})
export class WeaponPageComponent implements OnInit {
  id: string;
  private weapon: Object;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.http.get('http://localhost:5000/api/weapons/' + this.id).subscribe(data => {
      this.weapon = data;
    });
  }

}
