import { act, renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useProducts from ".";
import { ReactNode } from "react";
import { fetchProducts } from "services/fakeStore";

const mockData = [
  { id: "1", name: "Product 1", quantity: 5 },
  { id: "2", name: "Product 2", quantity: 10 },
];

jest.mock("services/fakeStore", () => {
  return {
    fetchProducts: jest.fn(),
  };
});

describe("useProducts()", () => {
  beforeEach(() => jest.clearAllMocks());

  it("should fetch and set products", async () => {
    (fetchProducts as jest.Mock)?.mockResolvedValue(Promise.resolve(mockData));

    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result } = renderHook(() => useProducts(), { wrapper });

    expect(result.current.products).toEqual([]);
    expect(result.current.isLoading).toBeTruthy();
    await waitFor(() => expect(result.current.products).toEqual(mockData));
  });

  it("should update product quantity", async () => {
    (fetchProducts as jest.Mock)?.mockResolvedValue(Promise.resolve(mockData));

    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result } = renderHook(() => useProducts(), { wrapper });

    await waitFor(() => expect(result.current.products).toEqual(mockData));

    act(() => {
      result.current.onChangeQuantity("1", 7);
    });

    await waitFor(() =>
      expect(result.current.products).toEqual([
        { id: "1", name: "Product 1", quantity: 7 },
        { id: "2", name: "Product 2", quantity: 10 },
      ])
    );
  });
});
