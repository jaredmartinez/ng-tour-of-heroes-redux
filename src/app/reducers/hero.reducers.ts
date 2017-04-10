import {Hero} from "../core/model/hero.model";
import * as hero from '../actions/hero.actions';

export interface State {
  heroes: Hero[];
  loadingHeroes: boolean;
  selectedHero: Hero | null;
};

export const initialState: State = {
  heroes: [],
  loadingHeroes: false,
  selectedHero: null
};

export function reducer(state = initialState, action: hero.Actions): State {

  switch (action.type) {

    case hero.ActionTypes.GET_ALL: {
      return Object.assign({}, state, {
        heroes: state.heroes,
        loadingHeroes: true,
        selectedHero: state.selectedHero
      });
    }

    case hero.ActionTypes.GET_ALL_SUCCESS: {
      const heroes = action.payload;
      console.log('const', heroes);

      return Object.assign({}, state, {
        heroes: heroes,
        loadingHeroes: false,
        selectedHero: state.selectedHero
      });
    }

    case hero.ActionTypes.ADD: {
      return Object.assign({}, state, {
        heroes: state.heroes,
        loadingHeroes: true,
        selectedHero: state.selectedHero
      });
    }

    case hero.ActionTypes.DELETE: {
      return Object.assign({}, state, {
        heroes: state.heroes,
        loadingHeroes: true,
        selectedHero: state.selectedHero
      });
    }

    case hero.ActionTypes.SELECT: {
      const hero = action.payload;

      return Object.assign({}, state, {
        heroes: state.heroes,
        loadingHeroes: state.loadingHeroes,
        selectedHero: hero
      });
    }

    default: {
      return state;
    }

  }

}

export const isHeroesLoading = (state: State) => state.loadingHeroes;

export const getAllHeroes = (state: State) => state.heroes;

export const getSelectedHero = (state: State) => state.selectedHero;
