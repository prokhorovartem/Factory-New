import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import { PlayerShowComponent } from './view.components/player-show/player-show.component';
import { WeaponPageComponent } from './view.components/encyclopedia/weapon-page/weapon-page.component';
import { MatchShowComponent} from './view.components/match-show/match-show.component';
import { GameShowComponent } from './view.components/game-show/game-show.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'teams', component: TeamsComponent},
  { path: 'tournaments', component: TournamentsComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'maps', component: MapsComponent},
  { path: 'teams/:id', component: TeamShowComponent},
  { path: 'tournaments/:id', component: TournamentShowComponent},
  { path: 'showmap/:map', component: MapShowComponent},
  { path: 'player/:id', component: PlayerShowComponent},
  { path: 'weapon/:id', component: WeaponPageComponent},
  { path: 'match/:id', component: MatchShowComponent},
  { path: 'game/:id', component: GameShowComponent},
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
    PlayerShowComponent,
    WeaponPageComponent,
    MatchShowComponent,
    GameShowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
