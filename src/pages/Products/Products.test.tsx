import { screen } from "@testing-library/react";

import renderWithProviders from "helpers/renderWithProviders/indext";
import Products from ".";

describe("<Products />", () => {
  it("Should render products page", () => {
    renderWithProviders(<Products />);
    expect(screen.getByText("Produtos")).toBeInTheDocument();
  });
});
