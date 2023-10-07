import { fireEvent, screen } from "@testing-library/react";
import ControlNumber from ".";
import renderWithProviders from "helpers/renderWithProviders";

const mockOnChange = jest.fn();

describe("<ControlNumber />", () => {
  beforeEach(() => jest.clearAllMocks());

  it("Should render with default values", () => {
    renderWithProviders(<ControlNumber onChange={mockOnChange} />);

    expect(screen.getByText("-")).toBeInTheDocument();
    expect(screen.getByDisplayValue("1")).toBeInTheDocument();
    expect(screen.getByText("+")).toBeInTheDocument();
  });

  it('decreases the value when "-" button is clicked', () => {
    renderWithProviders(<ControlNumber value={2} onChange={mockOnChange} />);

    fireEvent.click(screen.getByText("-"));

    expect(mockOnChange).toHaveBeenCalledWith(1);
  });

  it('increases the value when "+" button is clicked', () => {
    renderWithProviders(<ControlNumber onChange={mockOnChange} />);

    fireEvent.click(screen.getByText("+"));

    expect(mockOnChange).toHaveBeenCalledWith(2);
  });

  it("updates the value when input is changed", () => {
    renderWithProviders(<ControlNumber onChange={mockOnChange} />);

    const input = screen.getByDisplayValue("1");
    fireEvent.change(input, { target: { value: "3" } });

    expect(mockOnChange).toHaveBeenCalledWith(3);
  });

  it("Should not update the value when input is changed to less than minimum", () => {
    renderWithProviders(<ControlNumber onChange={mockOnChange} />);

    const input = screen.getByDisplayValue("1");
    fireEvent.change(input, { target: { value: "0" } });

    expect(mockOnChange).not.toBeCalled();
  });

  it('disables the "-" button when value is at its minimum', () => {
    renderWithProviders(<ControlNumber min={1} onChange={mockOnChange} />);

    const minusButton = screen.getByText("-");
    fireEvent.click(minusButton);

    expect(mockOnChange).not.toHaveBeenCalled();
  });
});
