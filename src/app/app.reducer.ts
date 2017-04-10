import {environment} from "../environments/environment.prod";
import {combineReducers, ActionReducer} from "@ngrx/store";
import {compose} from "@ngrx/core/compose";
import {storeFreeze} from "ngrx-store-freeze";
import {AppState} from "./app.state.interfaces";

const reducers = {
};

export const developmentReducer: ActionReducer<AppState> = compose(storeFreeze, combineReducers)(reducers);;
const productionReducer: ActionReducer<AppState> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}
