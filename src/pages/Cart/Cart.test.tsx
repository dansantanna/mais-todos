import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import useCart, { CartState } from "hooks/useCart"; // Substitua pelo caminho real do seu hook

import Cart from ".";
import renderWithProviders from "helpers/renderWithProviders";

jest.mock("hooks/useCart");

describe("Cart", () => {
  const mockCartState: CartState = {
    products: [
      {
        id: "1",
        title: "Product 1",
        quantity: 2,
        description: "",
        image: "",
        price: 1,
      },
      {
        id: "2",
        title: "Product 2",
        quantity: 1,
        description: "",
        image: "",
        price: 1,
      },
    ],
    removeProduct: jest.fn(),
    updateQuantity: jest.fn(),
    addProduct: jest.fn(),
  };

  beforeEach(() => {
    (useCart as unknown as jest.Mock).mockReturnValue(mockCartState);
  });

  it("renders Cart component with items", () => {
    renderWithProviders(<Cart />);

    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();

    const removeButtons = screen.getAllByText("Remover");
    const updateButtons = screen.getAllByText("+");
    expect(removeButtons).toHaveLength(2);
    expect(updateButtons).toHaveLength(2);
  });

  it("calls removeProduct and updateQuantity when buttons are clicked", () => {
    const { removeProduct, updateQuantity } = mockCartState;

    renderWithProviders(<Cart />);

    userEvent.click(screen.getAllByText("Remover")[0]);
    userEvent.click(screen.getAllByText("+")[0]);

    expect(removeProduct).toHaveBeenCalledWith(mockCartState.products[0]);
    expect(updateQuantity).toBeCalled();
  });
});
