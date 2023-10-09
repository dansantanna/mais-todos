import { screen } from "@testing-library/react";

import Button from ".";
import renderWithProviders from "helpers/renderWithProviders";

describe("<Button />", () => {
  it("Should render children text", () => {
    const text = "text_test";
    renderWithProviders(<Button>{text}</Button>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("Should render children text with fontSize sent", () => {
    const text = "text_test";
    renderWithProviders(<Button>{text}</Button>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
