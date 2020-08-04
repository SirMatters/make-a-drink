import { ActionTypes, Action } from './types';
import { Ingredient } from './ingredients';
import { User } from './users';

export interface Cocktail {
  id: string;
  raiting: null | number;
  name: string;
  images: string[];
  comments: string[];
  steps: PrepStep[];
  author: User;
}

export type PrepStep = {
  description: string;
  ingredient: Ingredient[];
};

export interface AddCocktailAction {
  type: ActionTypes.addCocktail;
  cocktail: Cocktail;
}

export const addCocktail = (cocktail: Cocktail): AddCocktailAction => ({
  type: ActionTypes.addCocktail,
  cocktail,
});

export interface DeleteCocktailAction {
  type: ActionTypes.deleteCocktail;
  id: number;
}

export const deleteCocktail = (id: number): DeleteCocktailAction => ({
  type: ActionTypes.deleteCocktail,
  id,
});

export interface EditCocktailAction {
  type: ActionTypes.editCocktail;
  cocktail: Cocktail;
}

export const editCocktail = (cocktail: Cocktail): EditCocktailAction => ({
  type: ActionTypes.editCocktail,
  cocktail,
});

// after fetch insert cocktails into Store
export interface GetCocktailsAction {
  type: ActionTypes.getCocktails;
  cocktails: Cocktail[];
}

export const getCocktails = (cocktails: Cocktail[]): GetCocktailsAction => ({
  type: ActionTypes.getCocktails,
  cocktails,
});
