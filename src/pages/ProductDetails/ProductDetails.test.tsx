import { screen } from "@testing-library/react";

import renderWithProviders from "helpers/renderWithProviders";
import ProductDetails from ".";

describe("<ProductDetails />", () => {
  it("Should render product details page", () => {
    renderWithProviders(<ProductDetails />);
    expect(screen.getByText("Detalhes do Produto")).toBeInTheDocument();
  });
});
