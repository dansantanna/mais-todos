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
  {
    id: "3",
    image: "",
    title: "Test Product 3",
    description: "",
    price: 15.99,
  },
];

test("renders SummaryOrder component correctly", () => {
  renderWithProviders(
    <SummaryOrder items={mockItems} checkoutRoute="/checkout" />
  );

  expect(screen.getByText("Informações de Pagamento")).toBeInTheDocument();
  expect(screen.getByText("2x Test Product 1")).toBeInTheDocument();
  expect(screen.getByText("1x Test Product 2")).toBeInTheDocument();
  expect(screen.getByText(/53,96/)).toBeInTheDocument();
});
