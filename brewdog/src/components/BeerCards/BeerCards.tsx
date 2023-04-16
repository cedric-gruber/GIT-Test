import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Api from "../../services/beerApiService";
import { BeerApiFilter } from "../../types/beer";
import BeerCard from "./BeerCard";
import BeerFilters from "../BeerFilters/BeerFilters";

const pageSize = 10;

const BeerCards = (): JSX.Element => {
  const [filter, setFilter] = useState<BeerApiFilter>({});

  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ["beers", filter],
    ({ pageParam = 1 }) => Api.GetBeers(pageParam, pageSize, filter),
    {
      getNextPageParam: (_, allPages) => {
        const nextPage = allPages.length + 1;
        return nextPage;
      },
    }
  );

  useEffect(() => {
    let fetching = false;
    const handleScroll = async (e: any) => {
      const { scrollHeight, scrollTop, clientHeight } =
        e.target.scrollingElement;
      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.2) {
        fetching = true;
        if (hasNextPage) await fetchNextPage();
        fetching = false;
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [fetchNextPage, hasNextPage]);

  if (!data) {
    if (isLoading) return <>Loading ...</>;
    return <>No Data ...</>;
  }

  return (
    <>
      <BeerFilters filter={filter} setFilter={(filter) => setFilter(filter)} />
      <div className="row gx-4 gy-4">
        {data.pages.map((page) =>
          page.map((beer) => (
            <div className="col-md-6 col-xl-4">
              <BeerCard key={beer.id} data={beer} />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default BeerCards;
