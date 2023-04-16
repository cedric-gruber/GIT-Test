import { fireEvent, render, screen } from "@testing-library/react";
import Pager from "./Pager";

describe("<Pager> Component", () => {
  describe("renders", () => {
    test("renders 'Current Page' text", () => {
      const mockSetPage = jest.fn();
      render(<Pager page={1} setPage={mockSetPage} />);
      const spanElement = screen.getByText(/Current Page: 1/);
      expect(spanElement).toBeInTheDocument();
    });

    test("renders 'Previous Page' button", () => {
      const mockSetPage = jest.fn();
      render(<Pager page={1} setPage={mockSetPage} />);
      const spanElement = screen.getByText(/Previous Page/);
      expect(spanElement).toBeInTheDocument();
    });

    test("renders 'Next Page' button", () => {
      const mockSetPage = jest.fn();
      render(<Pager page={1} setPage={mockSetPage} />);
      const spanElement = screen.getByText(/Next Page/);
      expect(spanElement).toBeInTheDocument();
    });
  });

  describe("prop 'page'", () => {
    test("renders 'Current Page' with correct page number", () => {
      const mockSetPage = jest.fn();
      render(<Pager page={3} setPage={mockSetPage} />);
      const spanElement = screen.getByText(/Current Page: 3/);
      expect(spanElement).toBeInTheDocument();
    });

    test("when '1' then 'Previous Page' button should have attrbute 'disabled'", () => {
      const mockSetPage = jest.fn();
      render(<Pager page={1} setPage={mockSetPage} shouldDisableNextButton />);
      const buttonElement = screen.getByTestId("previous-page-button");
      expect(buttonElement).toBeDisabled();
    });

    test("when not '1' then 'Previous Page' button should not have attrbute 'disabled'", () => {
      const mockSetPage = jest.fn();
      render(<Pager page={2} setPage={mockSetPage} shouldDisableNextButton />);
      const buttonElement = screen.getByTestId("previous-page-button");
      expect(buttonElement).not.toBeDisabled();
    });
  });

  describe("prop 'shouldDisableNextButton'", () => {
    test("when 'true' then 'Next Page' button should have attrbute 'disabled'", () => {
      const mockSetPage = jest.fn();
      render(<Pager page={1} setPage={mockSetPage} shouldDisableNextButton />);
      const buttonElement = screen.getByTestId("next-page-button");
      expect(buttonElement).toBeDisabled();
    });

    test("when 'false' then 'Next Page' button should not have attrbute 'disabled'", () => {
      const mockSetPage = jest.fn();
      render(<Pager page={1} setPage={mockSetPage} />);
      const buttonElement = screen.getByTestId("next-page-button");
      expect(buttonElement).not.toBeDisabled();
    });
  });

  describe("prop 'setPage'", () => {
    test("is called when 'Previous Page' button is clicked", () => {
      const mockSetPage = jest.fn();
      render(<Pager page={3} setPage={mockSetPage} />);
      const buttonElement = screen.getByTestId("previous-page-button");
      fireEvent.click(buttonElement);
      expect(mockSetPage).toHaveBeenCalledWith(2);
    });

    test("is not called when disabled 'Previous Page' button is clicked", () => {
      const mockSetPage = jest.fn();
      render(<Pager page={1} setPage={mockSetPage} />);
      const buttonElement = screen.getByTestId("previous-page-button");
      fireEvent.click(buttonElement);
      expect(mockSetPage).not.toHaveBeenCalled();
    });

    test("is called when 'Next Page' button is clicked", () => {
      const mockSetPage = jest.fn();
      render(<Pager page={1} setPage={mockSetPage} />);
      const buttonElement = screen.getByTestId("next-page-button");
      fireEvent.click(buttonElement);
      expect(mockSetPage).toHaveBeenCalledWith(2);
    });

    test("is not called when disabled 'Next Page' button is clicked", () => {
      const mockSetPage = jest.fn();
      render(<Pager page={1} setPage={mockSetPage} shouldDisableNextButton />);
      const buttonElement = screen.getByTestId("next-page-button");
      fireEvent.click(buttonElement);
      expect(mockSetPage).not.toHaveBeenCalled();
    });
  });
});
