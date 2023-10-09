import { screen } from "@testing-library/react";

import Title from ".";
import renderWithProviders from "helpers/renderWithProviders";

describe("<Title />", () => {
  it("Should render children text", () => {
    const text = "text_test";
    renderWithProviders(<Title>{text}</Title>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("Should render children text with fontSize sent", () => {
    const text = "text_test";
    renderWithProviders(<Title fontSize={16}>{text}</Title>);
    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.getByText(text)).toHaveStyle({ fontSize: 16 });
  });
});
