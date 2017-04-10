import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromRoot from '../../reducers/hero.reducers';
import * as heroActions from '../../actions/hero.actions';
import {Observable} from "rxjs";
import {Hero} from "../../core/model/hero.model";

@Component({
  selector: 'app-hero-dashboard',
  templateUrl: 'hero-dashboard.component.html',
  styleUrls: ['hero-dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroDashboardComponent implements OnInit {

  heroes = [];
  heroes$: Observable<Hero[]>;
  heroesLoading$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.heroes$ = this.store.select(fromRoot.getAllHeroes);
    this.heroesLoading$ = this.store.select(fromRoot.isHeroesLoading);
  }

  ngOnInit() {
    console.log('getting heroes');
    console.log('loading', this.heroesLoading$);
    this.store.dispatch(new heroActions.GetAllAction(null))
  }

}
