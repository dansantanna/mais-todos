import { screen, render, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import theme from "helpers/themes";

import useProducts from "hooks/useProducts";
import ProductDetails from ".";
import IProduct from "types/IProduct";
import useCart, { CartState } from "hooks/useCart";

jest.mock("hooks/useCart");

jest.mock("hooks/useProducts", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("services/api", () => {
  return {
    fetchProducts: jest.fn(),
  };
});

describe("<ProductDetails />", () => {
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
    ],
    removeProduct: jest.fn(),
    updateQuantity: jest.fn(),
    clearProducts: jest.fn(),
    addProduct: jest.fn(),
  };
  beforeEach(() => {
    (useCart as unknown as jest.Mock).mockReturnValue(mockCartState);

    jest.clearAllMocks();
  });

  it("Should render loading indicator when isLoading is true", () => {
    (useProducts as jest.Mock).mockReturnValue({
      products: [],
      isLoading: true,
      onChangeQuantity: jest.fn(),
      isError: false,
    });
    const queryClient = new QueryClient();

    render(
      <MemoryRouter initialEntries={["/product/1"]}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="product/1" element={<ProductDetails />}></Route>
            </Routes>
          </ThemeProvider>
        </QueryClientProvider>
      </MemoryRouter>
    );

    expect(screen.getByTestId("loading-lottie")).toBeInTheDocument();
  });

  it("Should render loading indicator when isError is true", () => {
    (useProducts as jest.Mock).mockReturnValue({
      products: [],
      isLoading: false,
      onChangeQuantity: jest.fn(),
      isError: true,
    });

    const queryClient = new QueryClient();
    render(
      <MemoryRouter initialEntries={["/product/1"]}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="product/1" element={<ProductDetails />}></Route>
            </Routes>
          </ThemeProvider>
        </QueryClientProvider>
      </MemoryRouter>
    );

    expect(screen.getByTestId("error-lottie")).toBeInTheDocument();
  });

  it("Should render product with details", () => {
    const product = {
      id: "1",
      title: "Product 1",
      description: "Description 1",
      category: "Category 1",
      quantity: 1,
    };

    (useProducts as jest.Mock).mockReturnValue({
      products: [product] as IProduct[],
      isLoading: false,
      onChangeQuantity: jest.fn(),
      isError: false,
    });

    const queryClient = new QueryClient();
    render(
      <MemoryRouter initialEntries={["/product/1"]}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="product/1" element={<ProductDetails />}></Route>
            </Routes>
          </ThemeProvider>
        </QueryClientProvider>
      </MemoryRouter>
    );

    expect(screen.getByText(product.title)).toBeInTheDocument();
    expect(screen.getByText(product.description)).toBeInTheDocument();
    expect(screen.getByText(product.category)).toBeInTheDocument();
  });

  it("Should change quantity", () => {
    const mockOnChangeQuantity = jest.fn();
    const product = {
      id: "1",
      title: "Product 1",
      description: "Description 1",
      category: "Category 1",
    };

    (useProducts as jest.Mock).mockReturnValue({
      products: [product] as IProduct[],
      isLoading: false,
      onChangeQuantity: mockOnChangeQuantity,
      isError: false,
    });

    const queryClient = new QueryClient();
    render(
      <MemoryRouter initialEntries={["/product/1"]}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="product/1" element={<ProductDetails />}></Route>
            </Routes>
          </ThemeProvider>
        </QueryClientProvider>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("+"));
    fireEvent.click(screen.getByText("+"));
    expect(screen.getByDisplayValue("4")).toBeInTheDocument();
  });

  it("Should add product to cart", () => {
    const mockOnChangeQuantity = jest.fn();
    const product = {
      id: "1",
      title: "Product 1",
      description: "Description 1",
      category: "Category 1",
    };

    (useProducts as jest.Mock).mockReturnValue({
      products: [product] as IProduct[],
      isLoading: false,
      onChangeQuantity: mockOnChangeQuantity,
      isError: false,
    });
    const addProduct = jest.fn();
    (useCart as unknown as jest.Mock).mockReturnValue({
      products: [],
      removeProduct: jest.fn(),
      updateQuantity: jest.fn(),
      addProduct: addProduct,
    });

    const queryClient = new QueryClient();
    render(
      <MemoryRouter initialEntries={["/product/1"]}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="product/1" element={<ProductDetails />}></Route>
            </Routes>
          </ThemeProvider>
        </QueryClientProvider>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("Adicionar"));
    expect(addProduct).toBeCalled();
  });

  it("Should remove product's cart", () => {
    const mockOnChangeQuantity = jest.fn();
    const product = {
      id: "1",
      title: "Product 1",
      description: "Description 1",
      category: "Category 1",
    };

    (useProducts as jest.Mock).mockReturnValue({
      products: [product] as IProduct[],
      isLoading: false,
      onChangeQuantity: mockOnChangeQuantity,
      isError: false,
    });

    const removeProduct = jest.fn();
    (useCart as unknown as jest.Mock).mockReturnValue({
      products: [product],
      removeProduct,
      updateQuantity: jest.fn(),
      addProduct: jest.fn(),
    });

    const queryClient = new QueryClient();
    render(
      <MemoryRouter initialEntries={["/product/1"]}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="product/1" element={<ProductDetails />}></Route>
            </Routes>
          </ThemeProvider>
        </QueryClientProvider>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("-"));
    fireEvent.click(screen.getByText("Remover"));
    expect(removeProduct).toBeCalled();
  });

  it("Should update product's cart", () => {
    const mockOnChangeQuantity = jest.fn();
    const product = {
      id: "1",
      title: "Product 1",
      description: "Description 1",
      category: "Category 1",
      quantity: 0,
    };

    (useProducts as jest.Mock).mockReturnValue({
      products: [product] as IProduct[],
      isLoading: false,
      onChangeQuantity: mockOnChangeQuantity,
      isError: false,
    });

    const updateQuantity = jest.fn();
    (useCart as unknown as jest.Mock).mockReturnValue({
      products: [product],
      removeProduct: jest.fn(),
      updateQuantity,
      addProduct: jest.fn(),
    });

    const queryClient = new QueryClient();
    render(
      <MemoryRouter initialEntries={["/product/1"]}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="product/1" element={<ProductDetails />}></Route>
            </Routes>
          </ThemeProvider>
        </QueryClientProvider>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("+"));
    fireEvent.click(screen.getByText("Atualizar"));
    expect(updateQuantity).toBeCalled();
  });

  it("Should render 'Adicionado' button", () => {
    const mockOnChangeQuantity = jest.fn();

    (useProducts as jest.Mock).mockReturnValue({
      products: [
        {
          id: "1",
          title: "Product 1",
          description: "Description 1",
          category: "Category 1",
        },
      ] as IProduct[],
      isLoading: false,
      onChangeQuantity: mockOnChangeQuantity,
      isError: false,
    });

    const updateQuantity = jest.fn();
    (useCart as unknown as jest.Mock).mockReturnValue({
      products: [
        {
          id: "1",
          title: "Product 1",
          description: "Description 1",
          category: "Category 1",
        },
      ],
      removeProduct: jest.fn(),
      updateQuantity,
      addProduct: jest.fn(),
    });

    const queryClient = new QueryClient();
    render(
      <MemoryRouter initialEntries={["/product/1"]}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="product/1" element={<ProductDetails />}></Route>
            </Routes>
          </ThemeProvider>
        </QueryClientProvider>
      </MemoryRouter>
    );

    expect(screen.getByText("Adicionado")).toBeInTheDocument();
  });
});
