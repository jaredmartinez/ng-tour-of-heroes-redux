import {Hero} from "../core/model/hero.model";
import * as HeroActions from '../actions/hero.actions';

export interface State {
  heroes: Hero[];
  isLoadingHeroes: boolean;
  selectedHero: Hero | null;
}

const initialState: State = {
  heroes: [],
  isLoadingHeroes: false,
  selectedHero: null
};

export function reducer(state = initialState, action: HeroActions.All): State {

  switch (action.type) {

    case HeroActions.ActionTypes.GET: {
      return {
        ...state,
        isLoadingHeroes: true
      };
    }

    case HeroActions.ActionTypes.GET_ALL: {
      return {
        ...state,
        isLoadingHeroes: true,
        heroes: []
      };
    }

    case HeroActions.ActionTypes.GET_ALL_SUCCESS: {
      const heroes = action.payload;

      return {
        ...state,
        heroes: heroes,
        isLoadingHeroes: false
      };
    }

    case HeroActions.ActionTypes.ADD: {
      return {
        ...state,
        isLoadingHeroes: false
      };
    }

    case HeroActions.ActionTypes.DELETE: {
      return {
        ...state,
        isLoadingHeroes: false
      }
    }

    case HeroActions.ActionTypes.DELETE_SUCCESS: {
      return {
        ...state,
        isLoadingHeroes: false
      }
    }

    case HeroActions.ActionTypes.SELECT: {
      const id = action.payload;
      let selectedHero: Hero;
      for(let hero of state.heroes) {
        if(hero.id == id) {
          selectedHero = hero;
        }
      }

      return {
        ...state,
        selectedHero: selectedHero
      };
    }

    default: {
      return state;
    }

  }

}

export const isHeroesLoading = (state: State) => state.isLoadingHeroes;

export const getAllHeroes = (state: State) => state.heroes;

export const getSelectedHero = (state: State) => state.selectedHero;
