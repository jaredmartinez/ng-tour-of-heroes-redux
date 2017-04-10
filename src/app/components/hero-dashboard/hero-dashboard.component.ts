import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromRoot from '../../app.reducer';
import * as HeroActions from '../../actions/hero.actions';
import {Observable} from "rxjs";
import {Hero} from "../../core/model/hero.model";

@Component({
  selector: 'app-hero-dashboard',
  templateUrl: 'hero-dashboard.component.html',
  styleUrls: ['hero-dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroDashboardComponent implements OnInit {

  heroes: Observable<Hero[]>;
  isLoadingHeroes: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.heroes = this.store.select(fromRoot.selectHeroes);
    this.isLoadingHeroes = this.store.select(fromRoot.selectIsLoadingHeroes);
  }

  ngOnInit() {
    this.store.dispatch(new HeroActions.GetAllAction(null))
  }

}
