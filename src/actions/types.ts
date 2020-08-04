import {
  AddCocktailAction,
  DeleteCocktailAction,
  EditCocktailAction,
  GetCocktailsAction,
} from './cocktails';

export enum ActionTypes {
  getCocktails,
  addCocktail,
  deleteCocktail,
  editCocktail,
}

export type Action =
  | AddCocktailAction
  | DeleteCocktailAction
  | EditCocktailAction
  | GetCocktailsAction;
