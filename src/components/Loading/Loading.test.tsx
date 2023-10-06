import { screen } from "@testing-library/react";

import renderWithProviders from "helpers/renderWithProviders";
import Loading from ".";

test("Should render normally", () => {
  renderWithProviders(<Loading />);
  const lottieElement = screen.getByTestId("loading-lottie");
  expect(lottieElement).toBeInTheDocument();
});
