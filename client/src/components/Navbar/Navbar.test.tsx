import { screen } from "@testing-library/react";
import Navbar from ".";
import renderWithProviders from "helpers/renderWithProviders";

Object.defineProperty(window, "location", {
  value: { pathname: "/" },
  writable: true,
});

const sampleItems = [
  { text: "Home", route: "/" },
  { text: "About", route: "/about" },
  { text: "Contact", route: "/contact" },
];

describe("<Navbar />", () => {
  it("renders Navbar with the correct items and active route", () => {
    renderWithProviders(<Navbar items={sampleItems} currentRoute="/about" />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();

    expect(screen.getByLabelText("About")).toHaveAttribute(
      "data-active",
      "true"
    );
  });

  it("renders Navbar with the correct items and default active route", () => {
    renderWithProviders(<Navbar items={sampleItems} />);

    expect(screen.getByLabelText("Home")).toHaveAttribute(
      "data-active",
      "true"
    );
  });

  it("renders Navbar with the correct items and mocked current route", () => {
    window.location.pathname = "/contact";

    renderWithProviders(<Navbar items={sampleItems} />);

    expect(screen.getByLabelText("Contact")).toHaveAttribute(
      "data-active",
      "true"
    );
  });
});
