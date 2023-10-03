import { screen } from "@testing-library/react";

import renderWithProviders from "helpers/renderWithProviders/indext";
import NotFound from ".";

describe("<NotFound />", () => {
  it("Should render cart page", () => {
    renderWithProviders(<NotFound />);
    expect(screen.getByText("Página inexistente")).toBeInTheDocument();
  });
});
