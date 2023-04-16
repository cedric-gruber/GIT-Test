import { Fermentation, MashTemp } from ".";

export default interface Method {
  mash_temp: MashTemp[];
  fermentation: Fermentation;
  twist: null | string;
}
