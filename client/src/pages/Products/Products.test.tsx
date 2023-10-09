import { screen, fireEvent, renderHook } from "@testing-library/react";
import { useNavigate } from "react-router-dom";

import useProducts from "hooks/useProducts";
import Products from ".";
import IProduct from "types/IProduct";
import renderWithProviders from "helpers/renderWithProviders";
import useCart from "hooks/useCart";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

jest.mock("hooks/useProducts", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("Products component", () => {
  beforeEach(() => {
    (useNavigate as jest.Mock).mockClear();
    (useProducts as jest.Mock).mockClear();
  });

  it("renders loading indicator when isLoading is true", () => {
    (useProducts as jest.Mock).mockReturnValue({
      products: [],
      isLoading: true,
      onChangeQuantity: jest.fn(),
      isError: false,
    });

    renderWithProviders(<Products />);

    expect(screen.getByTestId("loading-lottie")).toBeInTheDocument();
  });

  it("renders loading indicator when isError is true", () => {
    (useProducts as jest.Mock).mockReturnValue({
      products: [],
      isLoading: false,
      onChangeQuantity: jest.fn(),
      isError: true,
    });

    renderWithProviders(<Products />);

    expect(screen.getByTestId("error-lottie")).toBeInTheDocument();
  });

  it("renders products when products are available", () => {
    (useNavigate as jest.Mock).mockReturnValue(jest.fn());
    (useProducts as jest.Mock).mockReturnValue({
      products: [
        { id: "1", title: "Product 1", price: 10 },
        { id: "2", title: "Product 2", price: 20 },
      ] as IProduct[],
      isLoading: false,
      onChangeQuantity: jest.fn(),
      isError: false,
    });

    renderWithProviders(<Products />);

    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
  });

  it("Should redirect user to product details page", () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    (useProducts as jest.Mock).mockReturnValue({
      products: [
        { id: "1", title: "Product 1", price: 10 },
        { id: "2", title: "Product 2", price: 20 },
      ] as IProduct[],
      isLoading: false,
      onChangeQuantity: jest.fn(),
      isError: false,
    });

    renderWithProviders(<Products />);
    fireEvent.click(screen.getByText("Product 1"));
    expect(mockNavigate).toBeCalled();
  });

  it("Should add and remove product when user click", () => {
    const products = [{ id: "1", title: "Product 1", price: 10 }];
    const { result } = renderHook(() => useCart());
    (useNavigate as jest.Mock).mockReturnValue(jest.fn());
    (useProducts as jest.Mock).mockReturnValue({
      products: products as IProduct[],
      isLoading: false,
      isError: false,
    });

    renderWithProviders(<Products />);
    expect(result.current.products).toEqual([]);
    fireEvent.click(screen.getByText("Adicionar"));
    expect(result.current.products).toEqual(products);
    fireEvent.click(screen.getByText("Remover"));
    expect(result.current.products).toEqual([]);
  });
});
