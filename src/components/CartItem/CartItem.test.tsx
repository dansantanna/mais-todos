import { screen, fireEvent } from "@testing-library/react";

import CartItem from ".";
import renderWithProviders from "helpers/renderWithProviders";

const mockProduct = {
  title: "Test Product",
  image: "/test-image.jpg",
  description: "Test Description",
  price: 10.99,
  quantity: 2,
};

test("renders CartItem component correctly", () => {
  renderWithProviders(
    <CartItem {...mockProduct} onChange={() => {}} onRemove={() => {}} />
  );

  expect(screen.getByText("Test Product")).toBeInTheDocument();
  expect(screen.getByText("Test Description")).toBeInTheDocument();
  expect(screen.getByAltText("Test Product")).toBeInTheDocument();
});

test("calls onChange when the quantity is changed", () => {
  const onChangeMock = jest.fn();

  renderWithProviders(
    <CartItem {...mockProduct} onChange={onChangeMock} onRemove={() => {}} />
  );

  const input = screen.getByDisplayValue("2");
  fireEvent.change(input, { target: { value: "3" } });

  expect(onChangeMock).toHaveBeenCalledWith(3);
});

test("calls onRemove when the Remove button is clicked", () => {
  const onRemoveMock = jest.fn();

  renderWithProviders(
    <CartItem {...mockProduct} onChange={() => {}} onRemove={onRemoveMock} />
  );

  const removeButton = screen.getByText("Remover");
  fireEvent.click(removeButton);

  expect(onRemoveMock).toHaveBeenCalled();
});
