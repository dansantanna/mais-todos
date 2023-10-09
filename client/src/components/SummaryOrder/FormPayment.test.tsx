import { ReactNode } from "react";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import { Elements } from "@stripe/react-stripe-js";
import FormPayment from "./FormPayment";
import renderWithProviders from "helpers/renderWithProviders";
import { enqueueSnackbar } from "notistack";
import { act } from "react-dom/test-utils";

const mockStripe = {
  confirmPayment: jest.fn(() => Promise.resolve({ error: { type: "" } })),
};

const mockElements = {
  getElement: jest.fn(),
};

const CompWrapper = ({ children }: { children?: ReactNode }) => <>{children}</>;

jest.mock("@stripe/react-stripe-js", () => ({
  Elements: CompWrapper,
  useStripe: () => mockStripe,
  useElements: () => mockElements,
  PaymentElement: CompWrapper,
}));

jest.mock("notistack", () => ({
  enqueueSnackbar: jest.fn(),
}));

describe("<FormPayment />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should render correctly", async () => {
    renderWithProviders(
      <Elements stripe={null}>
        <FormPayment />
      </Elements>
    );

    expect(screen.getByText("Efetuar compra")).toBeInTheDocument();
  });

  it("Should send payment successfully", async () => {
    act(() => {
      mockStripe.confirmPayment.mockResolvedValue({ error: { type: "" } });
    });

    renderWithProviders(
      <Elements stripe={null}>
        <FormPayment />
      </Elements>
    );

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(() =>
      fireEvent.click(screen.getByRole("button", { name: "Efetuar compra" }))
    );

    await waitFor(() =>
      expect(mockStripe.confirmPayment).toHaveBeenCalledTimes(1)
    );

    expect(enqueueSnackbar).toHaveBeenCalled();
  });
});
