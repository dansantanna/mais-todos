import { screen, fireEvent } from "@testing-library/react";

import CartItem from ".";
import renderWithProviders from "helpers/renderWithProviders";

const mockProduct = {
  id: "00001",
  title: "Test Product",
  image: "/test-image.jpg",
  description: "Test Description",
  price: 10.99,
  quantity: 2,
};

describe("<CartItem />", () => {
  it("Should render CartItem component correctly", () => {
    renderWithProviders(
      <CartItem
        {...mockProduct}
        onEnter={jest.fn()}
        onChange={jest.fn()}
        onRemove={jest.fn()}
      />
    );

    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
    expect(screen.getByAltText("Test Product")).toBeInTheDocument();
  });

  it("Should call onChange when the quantity is changed", () => {
    const onChangeMock = jest.fn();

    renderWithProviders(
      <CartItem
        {...mockProduct}
        onEnter={jest.fn()}
        onChange={onChangeMock}
        onRemove={jest.fn()}
      />
    );

    const input = screen.getByDisplayValue("2");
    fireEvent.change(input, { target: { value: "3" } });

    expect(onChangeMock).toHaveBeenCalledWith(3);
  });

  it("Should call onRemove when the Remove button is clicked", () => {
    const onRemoveMock = jest.fn();

    renderWithProviders(
      <CartItem
        {...mockProduct}
        onEnter={jest.fn()}
        onChange={jest.fn()}
        onRemove={onRemoveMock}
      />
    );

    fireEvent.click(screen.getByText("Remover"));

    expect(onRemoveMock).toHaveBeenCalled();
  });

  it("Should call onEnter when user click", () => {
    const onEnter = jest.fn();

    renderWithProviders(
      <CartItem
        {...mockProduct}
        onEnter={onEnter}
        onChange={jest.fn()}
        onRemove={jest.fn()}
      />
    );

    fireEvent.click(screen.getByText("Test Product"));
    expect(onEnter).toHaveBeenCalled();
  });
});
