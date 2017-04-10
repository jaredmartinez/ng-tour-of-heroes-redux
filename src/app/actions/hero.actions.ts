import {type} from "../app.util";
import {Action} from "@ngrx/store";
import {Hero} from "../core/model/hero.model";

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 *
 * The 'type' utility function coerces strings into string
 * literal types and runs a simple check to guarantee all
 * action types in the application are unique.
 */
export const ActionTypes = {
  GET_ALL:           type('[Hero] Get All Heroes'),
  GET_ALL_SUCCESS:   type('[Hero] Get All Heroes Success'),
  ADD:               type('[Hero] Add Hero'),
  ADD_SUCCESS:       type('[Hero] Add Hero Success'),
  DELETE:            type('[Hero] Delete Hero'),
  DELETE_SUCCESS:    type('[Hero] Delete Hero Success'),
  SEARCH:            type('[Hero] Search'),
  SELECT:            type('[Hero] SELECT')
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class GetAllAction implements Action {
  type = ActionTypes.GET_ALL;

  constructor(public payload: any) { }
}

export class GetAllSuccessAction implements Action {
  type = ActionTypes.GET_ALL_SUCCESS;

  constructor(public payload: Hero[]) { }
}

export class AddAction implements Action {
  type = ActionTypes.ADD;

  constructor(public payload: String) { }
}

export class DeleteAction implements Action {
  type = ActionTypes.DELETE;

  constructor(public payload: number) { }
}

export class SearchAction implements Action {
  type = ActionTypes.SEARCH;

  constructor(public payload: String) { }
}

export class SelectAction implements Action {
  type = ActionTypes.SELECT;

  constructor(public payload: Hero) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = GetAllAction
  | GetAllSuccessAction
  | AddAction
  | DeleteAction
  | SearchAction
  | SelectAction;
