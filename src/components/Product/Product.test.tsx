import { screen, fireEvent } from "@testing-library/react";
import Product from ".";
import renderWithProviders from "helpers/renderWithProviders";

const mockProduct = {
  id: "0001",
  title: "Product Title",
  description: "Product Description",
  quantity: 2,
  price: 19.99,
  image: "product.jpg",
};

const mockOnChange = jest.fn();
const mockOnAdd = jest.fn();
const mockOnEnter = jest.fn();

describe("<Product />", () => {
  beforeEach(() => jest.clearAllMocks());

  it("Should render product component", () => {
    renderWithProviders(
      <Product
        {...mockProduct}
        onChange={mockOnChange}
        onAdd={mockOnAdd}
        onEnter={mockOnEnter}
      />
    );

    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
    expect(screen.getByAltText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText("Add")).toBeInTheDocument();
  });

  it("Should call onEnter when card is clicked", () => {
    renderWithProviders(
      <Product
        {...mockProduct}
        onChange={mockOnChange}
        onAdd={mockOnAdd}
        onEnter={mockOnEnter}
      />
    );

    const card = screen.getByText("Product Title");
    fireEvent.click(card);

    expect(mockOnEnter).toHaveBeenCalledTimes(1);
  });

  it("Should call onChange when ControlNumber is used", () => {
    renderWithProviders(
      <Product
        {...mockProduct}
        onChange={mockOnChange}
        onAdd={mockOnAdd}
        onEnter={mockOnEnter}
      />
    );

    const decreaseButton = screen.getByText("-");
    const increaseButton = screen.getByText("+");

    fireEvent.click(decreaseButton);
    expect(mockOnChange).toHaveBeenCalledWith(1);

    fireEvent.click(increaseButton);
    expect(mockOnChange).toHaveBeenCalledWith(3);
  });

  it('Should call onAdd when "Add" button is clicked', () => {
    renderWithProviders(
      <Product
        {...mockProduct}
        onChange={mockOnChange}
        onAdd={mockOnAdd}
        onEnter={mockOnEnter}
      />
    );

    const addButton = screen.getByText("Add");
    fireEvent.click(addButton);

    expect(mockOnAdd).toHaveBeenCalledTimes(1);
  });
});
