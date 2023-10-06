import { screen, fireEvent } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import useProducts from "hooks/useProducts"; // Importe as tipagens necessárias
import Products from ".";
import IProduct from "types/IProduct";
import renderWithProviders from "helpers/renderWithProviders";

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

  it("calls onChangeQuantity when quantity is changed", () => {
    const onChangeQuantityMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(jest.fn());
    (useProducts as jest.Mock).mockReturnValue({
      products: [
        {
          id: "1",
          price: 10,
          description: "",
          image: "",
          quantity: 1,
          title: "Product 1",
        },
      ] as IProduct[],
      isLoading: false,
      isError: false,
      onChangeQuantity: onChangeQuantityMock,
    });

    renderWithProviders(<Products />);

    const input = screen.getByDisplayValue("1");
    fireEvent.change(input, { target: { value: "5" } });

    expect(onChangeQuantityMock).toHaveBeenCalledWith("1", 5);
  });
});
