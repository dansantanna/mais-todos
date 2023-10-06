import { screen } from "@testing-library/react";

import renderWithProviders from "helpers/renderWithProviders";
import Error from ".";

test("Should render normally", () => {
  renderWithProviders(<Error />);
  const lottieElement = screen.getByTestId("error-lottie");
  expect(lottieElement).toBeInTheDocument();
});
