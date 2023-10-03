import { screen } from "@testing-library/react";

import Title from ".";
import renderWithProviders from "helpers/renderWithProviders/indext";

describe("<Title />", () => {
  it("Should render children text", () => {
    const text = "text_test";
    renderWithProviders(<Title>{text}</Title>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
