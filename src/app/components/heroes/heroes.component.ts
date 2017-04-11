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
  selectedHero: Observable<Hero>;
  isLoadingHeroes: Observable<boolean>;
  heroName: string = '';

  constructor(private store: Store<fromRoot.State>) {
    this.heroes = this.store.select(fromRoot.selectHeroes);
    this.selectedHero = this.store.select(fromRoot.selectHero);
    this.isLoadingHeroes = this.store.select(fromRoot.selectIsLoadingHeroes);
  }

  ngOnInit() {
    this.store.dispatch(new HeroActions.GetAllAction(null))
  }

  selectHero(id: number) {
    this.store.dispatch(new HeroActions.SelectAction(id))
  }

  deleteHero(id: number) {
    this.store.dispatch(new HeroActions.DeleteAction(id))
  }

  addHero() {
    this.store.dispatch(new HeroActions.AddAction(this.heroName));
    this.heroName = '';
  }

}
