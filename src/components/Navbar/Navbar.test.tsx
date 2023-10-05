import { screen } from "@testing-library/react";
import Navbar from ".";
import renderWithProviders from "helpers/renderWithProviders";

// Mock the window.location.pathname property
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

    // Verify that the Navbar component renders the correct items
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();

    // Verify that the "About" link has the 'active' class because it matches the current route
    expect(screen.getByLabelText("About")).toHaveAttribute(
      "data-active",
      "true"
    );
  });

  it("renders Navbar with the correct items and default active route", () => {
    renderWithProviders(<Navbar items={sampleItems} />);

    // Verify that the "Home" link has the 'active' class as it matches the default current route
    expect(screen.getByLabelText("Home")).toHaveAttribute(
      "data-active",
      "true"
    );
  });

  it("renders Navbar with the correct items and mocked current route", () => {
    // Mock the window.location.pathname to a different route
    window.location.pathname = "/contact";

    renderWithProviders(<Navbar items={sampleItems} />);

    // Verify that the "Contact" link has the 'active' class as it matches the mocked current route
    expect(screen.getByLabelText("Contact")).toHaveAttribute(
      "data-active",
      "true"
    );
  });
});
