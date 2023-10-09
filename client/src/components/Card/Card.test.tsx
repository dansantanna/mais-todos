import { screen } from "@testing-library/react";

import Card from ".";
import renderWithProviders from "helpers/renderWithProviders";

describe("<Card />", () => {
  it("Should render children text", () => {
    const text = "text_test";
    renderWithProviders(<Card>{text}</Card>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("Should render children text with fontSize sent", () => {
    const text = "text_test";
    renderWithProviders(<Card>{text}</Card>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
