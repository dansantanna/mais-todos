import { screen } from "@testing-library/react";

import renderWithProviders from "helpers/renderWithProviders";
import Cart from ".";

describe("<Cart />", () => {
  it("Should render cart page", () => {
    renderWithProviders(<Cart />);
    expect(screen.getByText("Carrinho")).toBeInTheDocument();
  });
});
