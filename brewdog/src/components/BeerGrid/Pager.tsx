import { Button } from "@progress/kendo-react-all";

interface PagerProps {
  page: number;
  setPage: (page: number) => void;
  shouldDisableNextButton?: boolean;
}

const Pager = ({
  page,
  setPage,
  shouldDisableNextButton = false,
}: PagerProps): JSX.Element => (
  <div className="mt-2 text-center">
    <div>
      <Button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className="m-1"
        data-testid="previous-page-button"
      >
        Previous Page
      </Button>
      <Button
        onClick={() => {
          setPage(page + 1);
        }}
        disabled={shouldDisableNextButton}
        className="m-1"
        data-testid="next-page-button"
      >
        Next Page
      </Button>
    </div>
    <div>
      <span>Current Page: {page}</span>
    </div>
  </div>
);

export default Pager;
