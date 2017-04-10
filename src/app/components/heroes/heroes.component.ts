import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Hero} from "../../core/model/hero.model";
import {Observable} from "rxjs";
import * as fromRoot from '../../app.reducer';
import * as HeroActions from '../../actions/hero.actions';

@Component({
  selector: 'app-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Observable<Hero[]>;

  constructor(private store: Store<fromRoot.State>) {
    this.heroes = this.store.select(fromRoot.selectHeroes);
  }

  ngOnInit() {
    this.store.dispatch(new HeroActions.GetAllAction(null))
  }

}
