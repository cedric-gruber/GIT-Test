import { Button } from "@progress/kendo-react-all";
import { BeerApiFilter } from "../../types/beer";

interface BeerFiltersProps {
  filter: BeerApiFilter;
  setFilter: (filter: BeerApiFilter) => void;
}

const BeerFilters = ({ filter, setFilter }: BeerFiltersProps): JSX.Element => {
  const handleStrongBeersClick = () => {
    if (!filter.abv_gt) {
      setFilter({ ...filter, abv_gt: 8 });
    } else {
      const { abv_gt, ...rest } = filter;
      setFilter({ ...rest });
    }
  };

  return (
    <div className="mb-3">
      <Button
        themeColor={filter.abv_gt ? "primary" : "base"}
        onClick={handleStrongBeersClick}
      >
        Strong beers only
      </Button>
    </div>
  );
};

export default BeerFilters;
