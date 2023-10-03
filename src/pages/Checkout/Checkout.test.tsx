import { screen } from "@testing-library/react";

import renderWithProviders from "helpers/renderWithProviders/indext";
import Checkout from ".";

describe("<Checkout />", () => {
  it("Should render checkout page", () => {
    renderWithProviders(<Checkout />);
    expect(screen.getByText("Pagamento")).toBeInTheDocument();
  });
});
