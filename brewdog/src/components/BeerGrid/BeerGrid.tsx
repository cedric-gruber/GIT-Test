import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Api from "../../services/beerApiService";
import { BeerApiFilter } from "../../types/beer";
import Pager from "./Pager";
import Grid from "./Grid";
import BeerFilters from "../BeerFilters/BeerFilters";

const pageSize = 10;

const BeerGrid = (): JSX.Element => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<BeerApiFilter>({});

  const { isLoading, isError, data, isPreviousData } = useQuery({
    queryKey: ["beers", page, filter],
    queryFn: () => Api.GetBeers(page, pageSize, filter),
    keepPreviousData: true,
  });

  const handleFilter = (filter: BeerApiFilter) => {
    setPage(1);
    setFilter(filter);
  };

  return (
    <>
      <BeerFilters filter={filter} setFilter={handleFilter} />
      <Grid data={data} isLoading={isLoading} isError={isError} />
      <Pager
        page={page}
        setPage={(page) => setPage(page)}
        shouldDisableNextButton={
          isPreviousData || !data || data.length < pageSize
        }
      />
    </>
  );
};

export default BeerGrid;
