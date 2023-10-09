import { fireEvent, waitFor, screen } from "@testing-library/react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import SaveProduct from ".";
import renderWithProviders from "helpers/renderWithProviders";
import userEvent from "@testing-library/user-event";

jest.mock("notistack");
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
  useParams: jest.fn(),
}));

jest.mock("react-hook-form", () => ({
  useForm: jest.fn(),
}));

describe("SaveProduct Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the SaveProduct component for creating a new product", () => {
    (useParams as jest.Mock).mockReturnValue({ id: null }); // Mock useParams value for new product
    (useForm as jest.Mock).mockReturnValue({
      register: jest.fn(),
      handleSubmit: jest.fn(),
      reset: jest.fn(),
      watch: jest.fn(),
      formState: { errors: {} },
    });

    renderWithProviders(<SaveProduct />);
    expect(screen.getByText("Cadastrar")).toBeInTheDocument();
  });

  it("should render the SaveProduct component for editing an existing product", () => {
    (useParams as jest.Mock).mockReturnValue({ id: "123" }); // Mock useParams value for editing
    (useForm as jest.Mock).mockReturnValue({
      register: jest.fn(),
      handleSubmit: jest.fn(),
      reset: jest.fn(),
      watch: jest.fn(),
      formState: { errors: {} },
    });

    renderWithProviders(<SaveProduct />);
    expect(screen.getByText("Salvar")).toBeInTheDocument();
  });

  it("should call saveProduct when the form is submitted", async () => {
    const saveProductMock = jest.fn();
    (useParams as jest.Mock).mockReturnValue({ id: "123" });
    (useForm as jest.Mock).mockReturnValue({
      register: jest.fn(),
      handleSubmit: saveProductMock,
      reset: jest.fn(),
      watch: jest.fn(),
      formState: { errors: {} },
      saveProductMock,
    });

    const navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);

    renderWithProviders(<SaveProduct />);
    userEvent.type(
      screen.getByText("Imagem (URL)"),
      "https://example.com/image.jpg"
    );
    userEvent.type(screen.getByText("Título"), "Produto de Teste");
    userEvent.type(screen.getByText("Preço"), "19.99");
    userEvent.type(screen.getByText("Nome da categoria"), "Categoria de Teste");
    userEvent.type(
      screen.getByText("Descrição"),
      "Descrição do produto de teste"
    );

    fireEvent.submit(screen.getByText("Salvar"));

    await waitFor(() => expect(saveProductMock).toHaveBeenCalled());
  });
});
