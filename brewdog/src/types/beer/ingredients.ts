import { Hop, Malt } from ".";

export default interface Ingredients {
  malt: Malt[];
  hops: Hop[];
  yeast: string;
}
