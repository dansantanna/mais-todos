import { screen } from "@testing-library/react";

import renderWithProviders from "helpers/renderWithProviders";
import NotFound from ".";

describe("<NotFound />", () => {
  it("Should render 404 page", () => {
    renderWithProviders(<NotFound />);
    expect(screen.getByTestId("error-lottie")).toBeInTheDocument();
  });
});
