import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {HttpClient, HttpClientModule, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  id: string;
  private new: Object;
  private comments: Object;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    this.http.get('http://localhost:5000/api/news/' + this.id).subscribe(data => {
      this.new = data;
    });
    this.http.get('http://localhost:5000/api/news/' + this.id + '/comments').subscribe(data => {
      this.comments = data;
    });

  }

}
