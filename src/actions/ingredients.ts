export type Ingredient = {
  id: string;
  name: string;
  alcoholContent: number;
  primaryName: PrimaryAlcohol;
  image: string;
  type: IngredientType;
};

export enum PrimaryAlcohol {
  'Vodka',
  'Vermut',
  'Rum',
  'Beer',
}

export enum IngredientType {
  'Fluid',
  'Solid',
  'Loose',
}
