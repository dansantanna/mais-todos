import { renderHook, act, waitFor } from "@testing-library/react";
import usePayment from "."; // Adjust the import path as needed
import Stripe from "stripe";
import useCart, { CartState } from "hooks/useCart";

jest.mock("stripe");
jest.mock("hooks/useCart");

describe("usePayment Hook", () => {
  const mockCartState: CartState = {
    products: [
      {
        id: "1",
        title: "Product 1",
        quantity: 2,
        description: "",
        image: "",
        price: 1,
      },
      {
        id: "2",
        title: "Product 2",
        quantity: 1,
        description: "",
        image: "",
        price: 1,
      },
    ],
    removeProduct: jest.fn(),
    updateQuantity: jest.fn(),
    addProduct: jest.fn(),
    clearProducts: jest.fn(),
  };

  beforeEach(() => {
    (useCart as unknown as jest.Mock).mockReturnValue(mockCartState);
  });

  beforeAll(() => {
    process.env.REACT_APP_STRIPE_SECRET_KEY = "your-test-stripe-secret-key";
  });

  afterAll(() => {
    delete process.env.REACT_APP_STRIPE_SECRET_KEY;
  });

  it("should initialize with an empty clientSecret", () => {
    act(() => {
      (useCart as unknown as jest.Mock).mockReturnValue({
        products: [],
        removeProduct: jest.fn(),
        updateQuantity: jest.fn(),
        addProduct: jest.fn(),
      });
    });
    (Stripe as unknown as jest.Mock).mockImplementation(() => ({
      paymentIntents: {
        create: jest.fn().mockResolvedValue({
          client_secret: "test-client-secret",
        }),
      },
    }));

    const { result } = renderHook(() => usePayment());

    expect(result.current.clientSecret).toBe("");
  });

  it("should set the clientSecret when products are provided", async () => {
    (Stripe as unknown as jest.Mock).mockImplementation(() => ({
      paymentIntents: {
        create: jest.fn().mockResolvedValue(
          Promise.resolve({
            client_secret: "test-client-secret",
          })
        ),
      },
    }));

    act(() => {
      (useCart as unknown as jest.Mock).mockReturnValue(mockCartState);
    });

    const { result, rerender } = renderHook(() => usePayment());

    rerender();
    await waitFor(() => {
      expect(result.current.clientSecret).toBe("test-client-secret");
    });
  });

  it("should not set the clientSecret when no products are provided", async () => {
    act(() => {
      (useCart as unknown as jest.Mock).mockReturnValue({
        products: [],
        removeProduct: jest.fn(),
        updateQuantity: jest.fn(),
        addProduct: jest.fn(),
      });
    });
    const { result } = renderHook(() => usePayment());

    expect(result.current.clientSecret).toBe("");
  });
});
