export default interface BeerApiFilter {
  abv_gt?: number;
  abv_lt?: number;
  beer_name?: string;
  brewed_after?: Date;
  brewed_before?: Date;
  ebc_gt?: number;
  ebc_lt?: number;
  food?: string;
  hops?: string;
  ibu_gt?: number;
  ibu_lt?: number;
  ids?: string;
  malt?: string;
  yeast?: string;
}
