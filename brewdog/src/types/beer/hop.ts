import { Amount } from ".";

export default interface Hop {
  name: string;
  amount: Amount;
  add: string;
  attribute: string;
}
