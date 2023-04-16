/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Beer } from "../../types/beer";
import { Grid, GridColumn } from "@progress/kendo-react-all";

interface GridProps {
  data?: Beer[];
  isError: boolean;
  isLoading: boolean;
}

const BeerGrid = ({ data, isError, isLoading }: GridProps): JSX.Element => {
  if (isLoading) return <div>Loading ...</div>;
  if (isError) return <div>Error ...</div>;
  if (!data || data.length === 0) return <div>No data</div>;

  return (
    <div
      css={css`
        col:nth-of-type(-n + 2) {
          width: 45%;
        }
      `}
    >
      <Grid data={data} scrollable="none">
        <GridColumn field="name" title="Name" />
        <GridColumn field="tagline" title="Tagline" />
        <GridColumn field="abv" title="AVB" />
      </Grid>
    </div>
  );
};

export default BeerGrid;
