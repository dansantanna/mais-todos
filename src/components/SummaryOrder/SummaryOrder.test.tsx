import { screen } from "@testing-library/react";
import SummaryOrder from ".";
import renderWithProviders from "helpers/renderWithProviders";

const mockItems = [
  {
    id: "1",
    image: "",
    title: "Test Product 1",
    description: "",
    price: 10.99,
    quantity: 2,
  },
  {
    id: "2",
    image: "",
    title: "Test Product 2",
    description: "",
    price: 15.99,
    quantity: 1,
  },
];

test("renders SummaryOrder component correctly", () => {
  renderWithProviders(
    <SummaryOrder items={mockItems} checkoutRoute="/checkout" />
  );

  expect(screen.getByText("Detalhes do Pedido")).toBeInTheDocument();
  expect(screen.getByText("2x Test Product 1")).toBeInTheDocument();
  expect(screen.getByText("1x Test Product 2")).toBeInTheDocument();
  expect(screen.getByText(/37,97/)).toBeInTheDocument();
  expect(screen.getByText("Realizar Pagamento")).toBeInTheDocument();
});

test("calculates the total price correctly", () => {
  renderWithProviders(
    <SummaryOrder items={mockItems} checkoutRoute="/checkout" />
  );

  expect(screen.getByText(/37,97/)).toBeInTheDocument();
});
