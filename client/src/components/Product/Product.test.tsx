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

const mockOnAdd = jest.fn();
const mockOnRemove = jest.fn();
const mockOnEnter = jest.fn();

describe("<Product />", () => {
  beforeEach(() => jest.clearAllMocks());

  it("Should render product component", () => {
    renderWithProviders(
      <Product
        {...mockProduct}
        isAdded={false}
        onAdd={mockOnAdd}
        onRemove={mockOnRemove}
        onEnter={mockOnEnter}
      />
    );

    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
    expect(screen.getByAltText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText("Adicionar")).toBeInTheDocument();
  });

  it("Should call onEnter when card is clicked", () => {
    renderWithProviders(
      <Product
        {...mockProduct}
        onRemove={mockOnRemove}
        onAdd={mockOnAdd}
        isAdded
        onEnter={mockOnEnter}
      />
    );

    const card = screen.getByText("Product Title");
    fireEvent.click(card);

    expect(mockOnEnter).toHaveBeenCalledTimes(1);
  });

  it('Should call onAdd when "Adicionar" button is clicked', () => {
    renderWithProviders(
      <Product
        isAdded={false}
        onRemove={mockOnRemove}
        {...mockProduct}
        onAdd={mockOnAdd}
        onEnter={mockOnEnter}
      />
    );

    const addButton = screen.getByText("Adicionar");
    fireEvent.click(addButton);

    expect(mockOnAdd).toHaveBeenCalledTimes(1);
  });

  it('Should call onRemove when "Remover" button is clicked', () => {
    renderWithProviders(
      <Product
        isAdded
        onRemove={mockOnRemove}
        {...mockProduct}
        onAdd={mockOnAdd}
        onEnter={mockOnEnter}
      />
    );

    const addButton = screen.getByText("Remover");
    fireEvent.click(addButton);

    expect(mockOnRemove).toHaveBeenCalledTimes(1);
  });
});
