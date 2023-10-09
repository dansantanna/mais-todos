import { ReactNode } from "react";
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import useProducts from ".";
import { fetchProducts, removeProduct, saveProduct } from "services/api";
import { act } from "react-dom/test-utils";
import { enqueueSnackbar } from "notistack";

const mockData = [
  {
    id: "1",
    title: "Product 1",
    quantity: 5,
    description: "",
    image: "",
    price: 32,
  },
  {
    id: "2",
    title: "Product 2",
    quantity: 10,
    description: "",
    image: "",
    price: 32,
  },
];

jest.mock("services/api", () => {
  return {
    fetchProducts: jest.fn(),
    removeProduct: jest.fn(),
    saveProduct: jest.fn(),
  };
});
jest.mock("notistack", () => ({
  enqueueSnackbar: jest.fn(),
}));

describe("useProducts()", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.clearAllMocks();
  });

  it("should fetch and set products", async () => {
    (fetchProducts as jest.Mock)?.mockResolvedValue(mockData);

    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result } = renderHook(() => useProducts(), { wrapper });

    expect(result.current.products).toEqual([]);
    expect(result.current.isLoading).toBeTruthy();
    await waitFor(() => expect(result.current.products).toEqual(mockData));
  });

  it("Should remove product of cache", async () => {
    (removeProduct as jest.Mock)?.mockResolvedValue([]);
    (fetchProducts as jest.Mock)?.mockResolvedValue(mockData);

    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result } = renderHook(() => useProducts(), { wrapper });
    expect(result.current.products).toEqual([]);
    expect(result.current.isLoading).toBeTruthy();
    await waitFor(() => expect(result.current.products).toEqual(mockData));
    act(() => result.current.removeMutation.mutate(mockData[0].id));
    await waitFor(() => expect(result.current.products).toHaveLength(1));
  });

  it("Should trigger an error message when there is an error in the removeProduct request", async () => {
    (fetchProducts as jest.Mock)?.mockResolvedValue(mockData);
    (removeProduct as jest.Mock)?.mockRejectedValue("");

    const queryClient = new QueryClient();

    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result } = renderHook(() => useProducts(), { wrapper });
    expect(result.current.products).toEqual([]);
    expect(result.current.isLoading).toBeTruthy();
    await waitFor(() => expect(result.current.products).toEqual(mockData));
    act(() => {
      try {
        result.current.removeMutation.mutate(mockData[0].id);
      } catch (error) {}
    });
    await waitFor(() =>
      expect(enqueueSnackbar).toBeCalledWith(
        "Erro ao remover produto, tente novamente",
        { variant: "error" }
      )
    );
  });

  it("Should save product on cache when there are not id", async () => {
    (saveProduct as jest.Mock)?.mockResolvedValue(mockData[0]);
    (fetchProducts as jest.Mock)?.mockResolvedValue([mockData[1]]);

    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result } = renderHook(() => useProducts(), { wrapper });
    expect(result.current.products).toEqual([]);
    expect(result.current.isLoading).toBeTruthy();
    await waitFor(() => expect(result.current.products).toEqual([mockData[1]]));
    act(() =>
      // @ts-ignore Should test send without sending the id
      result.current.saveMutation.mutate({ ...mockData[0], id: undefined })
    );
    await waitFor(() => expect(result.current.products).toHaveLength(2));
  });

  it("Should save product on cache when there are id", async () => {
    (saveProduct as jest.Mock)?.mockResolvedValue(mockData[0]);
    (fetchProducts as jest.Mock)?.mockResolvedValue([mockData[1]]);

    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result } = renderHook(() => useProducts(), { wrapper });
    expect(result.current.products).toEqual([]);
    expect(result.current.isLoading).toBeTruthy();
    act(() => result.current.saveMutation.mutate(mockData[0]));
    await waitFor(() => expect(result.current.products).toHaveLength(1));
    act(() => result.current.saveMutation.mutate(mockData[1]));
    await waitFor(() => expect(result.current.products).toHaveLength(1));
  });

  it("Should trigger an error message when there is an error in the saveProducts request", async () => {
    (fetchProducts as jest.Mock)?.mockResolvedValue(mockData);
    (saveProduct as jest.Mock)?.mockRejectedValue("");

    const queryClient = new QueryClient();

    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result } = renderHook(() => useProducts(), { wrapper });
    expect(result.current.products).toEqual([]);
    expect(result.current.isLoading).toBeTruthy();
    await waitFor(() => expect(result.current.products).toEqual(mockData));
    act(() => {
      try {
        result.current.saveMutation.mutate(mockData[0]);
      } catch (error) {}
    });
    await waitFor(() =>
      expect(enqueueSnackbar).toBeCalledWith(
        "Erro ao salvar produto, tente novamente",
        { variant: "error" }
      )
    );
  });
});
