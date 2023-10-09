import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextArea from ".";
import renderWithProviders from "helpers/renderWithProviders";

describe("<TextArea />", () => {
  it("Should render the input field with label", () => {
    renderWithProviders(<TextArea name="test" label="Test Label" />);

    expect(screen.getByText("Test Label")).toBeInTheDocument();
    expect(screen.getByLabelText("Test Label")).toBeInTheDocument();
  });

  it('Should render the required indicator when "required" prop is true', () => {
    renderWithProviders(<TextArea name="test" label="Test Label" required />);
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("Should call onChange handler when input value changes", () => {
    const onChangeMock = jest.fn();
    renderWithProviders(
      <TextArea name="test" label="Test Label" onChange={onChangeMock} />
    );
    userEvent.type(screen.getByLabelText("Test Label"), "Hello, World!");
    expect(onChangeMock).toHaveBeenCalled();
  });

  it("Should render error message", () => {
    const errorMessage = "Error Message";
    renderWithProviders(
      <TextArea name="test" label="Test Label" error={errorMessage} />
    );
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
});
