import { screen } from "@testing-library/react";
import Text from ".";
import renderWithProviders from "helpers/renderWithProviders";

describe("<Text />", () => {
  it("Should render children text", () => {
    const text = "text_test";
    renderWithProviders(<Text>{text}</Text>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
