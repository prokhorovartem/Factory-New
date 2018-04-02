import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {HomeComponent } from './view.components/home/home.component';
import { AboutComponent } from './view.components/about/about.component';
import { DashboardComponent } from './view.components/dashboard/dashboard.component';
import { NotFoundComponent } from './view.components/not-found/not-found.component';
import { TeamsComponent } from './view.components/teams/teams.component';
import { TournamentsComponent } from './view.components/tournaments/tournaments.component';
import { SigninComponent } from './view.components/signin/signin.component';
import { SignupComponent } from './view.components/signup/signup.component';
import {TeamShowComponent} from './view.components/team-show/team-show.component';
import { TournamentShowComponent } from './view.components/tournament-show/tournament-show.component';
import { MapsComponent } from './view.components/maps/maps.component';
import { MapShowComponent } from './view.components/map-show/map-show.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'teams', component: TeamsComponent},
  { path: 'tournaments', component: TournamentsComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'maps', component: MapsComponent},
  { path: 'showteam/:team/:id', component: TeamShowComponent},
  { path: 'showtournament/:tournament', component: TournamentShowComponent},
  { path: 'showmap/:map', component: MapShowComponent},
  // { path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    TeamsComponent,
    TournamentsComponent,
    SigninComponent,
    SignupComponent,
    DashboardComponent,
    NotFoundComponent,
    TeamShowComponent,
    TournamentShowComponent,
    MapsComponent,
    MapShowComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
