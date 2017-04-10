import {environment} from "../environments/environment.prod";
import {combineReducers, ActionReducer} from "@ngrx/store";
import {compose} from "@ngrx/core/compose";
import {storeFreeze} from "ngrx-store-freeze";
import {AppState} from "./app.state.interfaces";

import * as fromHero from './reducers/hero.reducers';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  hero: fromHero.State;
}

export const reducers = {
  hero: fromHero.reducer,
};

export const developmentReducer: ActionReducer<AppState> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<AppState> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

export function selectHeroes(state: State) {
  return state.hero.heroes;
}

export function selectIsLoadingHeroes(state: State) {
  return state.hero.isLoadingHeroes;
}
