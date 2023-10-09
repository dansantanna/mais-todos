import { screen, fireEvent } from "@testing-library/react";

import renderWithProviders from "helpers/renderWithProviders";
import useProducts from "hooks/useProducts";
import Admin from ".";

jest.mock("hooks/useProducts", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("Admin Component", () => {
  it("renders the component correctly when there are products", async () => {
    (useProducts as jest.Mock).mockReturnValue({
      products: [
        { id: 1, title: "Product 1" },
        { id: 2, title: "Product 2" },
      ],
      isLoading: false,
      isError: false,
      removeMutation: { mutate: jest.fn() },
    });
    renderWithProviders(<Admin />);

    expect(screen.getByText("Produtos")).toBeInTheDocument();
    expect(screen.getByText("Novo Produto")).toBeInTheDocument();
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
  });

  it("renders an error message when isError is true", async () => {
    (useProducts as jest.Mock).mockReturnValue({
      products: [],
      isLoading: false,
      isError: true,
      removeMutation: { mutate: jest.fn() },
    });

    renderWithProviders(<Admin />);

    expect(
      screen.getByText("Houve um erro na conexão com o servidor")
    ).toBeInTheDocument();
  });

  it("renders a loading indicator when isLoading is true", async () => {
    (useProducts as jest.Mock).mockReturnValue({
      isLoading: true,
      isError: false,
      products: [],
      removeMutation: { mutate: jest.fn() },
    });

    renderWithProviders(<Admin />);

    expect(screen.getByTestId("loading-lottie")).toBeInTheDocument();
  });

  it("navigates to the product edit page when edit button is clicked", async () => {
    (useProducts as jest.Mock).mockReturnValue({
      products: [{ id: 1, title: "Product 1" }],
      isLoading: false,
      isError: false,
      removeMutation: { mutate: jest.fn() },
    });
    renderWithProviders(<Admin />);

    fireEvent.click(screen.getByText("Editar"));

    expect(window.location.pathname).toBe("/admin/product/1");
  });

  it("navigates to the product edit page when user click on item", async () => {
    (useProducts as jest.Mock).mockReturnValue({
      products: [{ id: 1, title: "Product 1" }],
      isLoading: false,
      isError: false,
      removeMutation: { mutate: jest.fn() },
    });
    renderWithProviders(<Admin />);

    fireEvent.click(screen.getByText("Product 1"));

    expect(window.location.pathname).toBe("/admin/product/1");
  });

  it("calls the mutate function when delete button is clicked", async () => {
    (useProducts as jest.Mock).mockReturnValue({
      products: [{ id: 1, title: "Product 1" }],
      isLoading: false,
      isError: false,
      removeMutation: { mutate: jest.fn() },
    });
    renderWithProviders(<Admin />);

    fireEvent.click(screen.getByText("Deletar"));

    expect(
      require("hooks/useProducts").default().removeMutation.mutate
    ).toHaveBeenCalledWith(1);
  });
});
