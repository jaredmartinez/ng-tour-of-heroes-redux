import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {HeroService} from "../core/service/hero.service";
import {Observable} from "rxjs";

import * as heroActions from '../actions/hero.actions';
import {Action} from "@ngrx/store";
import {Hero} from "../core/model/hero.model";

@Injectable()
export class HeroEffects {

  static HEROES_DB: String = 'heroes';

  constructor(private actions$: Actions, private _heroService: HeroService) { }

  /**
   * This effect makes use of the `startWith` operator to trigger
   * the effect immediately on startup.
   */
  @Effect() getAllHeroes$: Observable<Action> = this.actions$
    .ofType(heroActions.ActionTypes.GET_ALL)
    .switchMap(() =>
      this._heroService.getHeroes()
        .map((heroes: Hero[]) => new heroActions.GetAllSuccessAction(heroes))
        //.catch(error => console.log(error))
    );

  // @Effect()
  // addBookToCollection$: Observable<Action> = this.actions$
  //   .ofType(heroActions.ActionTypes.ADD)
  //   .map((action: heroActions.AddAction) => action.payload)
  //   .mergeMap(hero =>
  //     this.db.insert('heroes', [ hero ])
  //       .map(() => new heroActions.AddBookSuccessAction(book))
  //       //.catch(() => of(new heroActions.AddBookFailAction(book)))
  //   );
  //
  //
  // @Effect()
  // removeBookFromCollection$: Observable<Action> = this.actions$
  //   .ofType(heroActions.ActionTypes.DELETE)
  //   .map((action: heroActions.DeleteAction) => action.payload)
  //   .mergeMap(hero =>
  //     this.db.executeWrite('heroes', 'delete', [ hero.id ])
  //       .map(() => new heroActions.RemoveBookSuccessAction(book))
  //       //.catch(() => of(new heroActions.RemoveBookFailAction(book)))
  //   );

}
