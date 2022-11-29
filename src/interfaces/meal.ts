import { Ingredient } from "./ingredient";

export interface Meal {
  id: number;
  name: string;
  category: string;
  area: string;
  instructions: string;
  thumb: string;
  tags: string[];
  youtube: string;
  ingredients: Ingredient[];
  source: string;
}