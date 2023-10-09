import useCart from "hooks/useCart";
import { screen, waitFor } from "@testing-library/react";
import SuccessfulPayment from ".";
import renderWithProviders from "helpers/renderWithProviders";

jest.mock("hooks/useCart");

describe("<SuccessfulPayment />", () => {
  beforeEach(() => {
    (useCart as unknown as jest.Mock).mockClear();
  });

  it("Should render normally", () => {
    (useCart as unknown as jest.Mock).mockReturnValue({
      clearProducts: jest.fn(),
    });
    renderWithProviders(<SuccessfulPayment />);

    expect(screen.getByTestId("successful-payment-lottie")).toBeInTheDocument();
    expect(
      screen.getByText("Pagamento realizado com sucesso")
    ).toBeInTheDocument();
  });

  it("Should call clearProducts when mounting the component", async () => {
    const clearProducts = jest.fn();
    (useCart as unknown as jest.Mock).mockReturnValue({ clearProducts });

    renderWithProviders(<SuccessfulPayment />);

    await waitFor(() => {
      expect(clearProducts).toHaveBeenCalledTimes(1);
    });
  });
});
