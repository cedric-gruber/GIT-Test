import { Amount, Ingredients, Method } from ".";

export default interface Beer {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number | null;
  srm: number | null;
  ph: number | null;
  attenuation_level: number;
  volume: Amount;
  boil_volume: Amount;
  method: Method;
  ingredients: Ingredients;
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
}
