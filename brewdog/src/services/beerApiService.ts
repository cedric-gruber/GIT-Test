import axios from "axios";
import { Beer, BeerApiFilter } from "../types/beer";

const api = axios.create({ baseURL: "https://api.punkapi.com/v2/" });

const GetBeers = async function GetBeers(
  page: number,
  perPage: number,
  filters?: BeerApiFilter | null
): Promise<Beer[]> {
  const response = await api.get<Beer[]>("beers", {
    params: {
      page,
      per_page: perPage,
      ...filters,
    },
  });
  return response.data;
};

const httpCalls = { GetBeers };
export default httpCalls;
