import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {Store} from "@ngrx/store";
import {Hero} from "../../core/model/hero.model";
import * as fromRoot from '../../app.reducer';
import * as HeroActions from '../../actions/hero.actions';
import {Observable} from "rxjs";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Observable<Hero>;

  constructor(private store: Store<fromRoot.State>,
              private _location: Location,
              private _route: ActivatedRoute) {
    this.store.select(fromRoot.selectHero);
  }


  ngOnInit() {
  }

  saveHero() {

  }

  goBack(): void {
    this._location.back();
  }

}
