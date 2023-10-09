import { fetchProducts, saveProduct, removeProduct } from ".";

const mockFetch = jest.fn() as jest.MockedFunction<typeof globalThis.fetch>;

describe("fetchProducts", () => {
  beforeEach(() => {
    mockFetch.mockClear();
    globalThis.fetch = mockFetch;
  });

  it("should return a list of products", async () => {
    const mockResponse = [
      { id: 1, name: "Product 1" },
      { id: 2, name: "Product 2" },
    ];

    mockFetch.mockResolvedValue({
      json: () => Promise.resolve(mockResponse),
    } as Response);

    await expect(fetchProducts()).resolves.toEqual(mockResponse);
  });

  it("should return a list of products with one", async () => {
    const mockResponse = { id: "2", name: "Product 2" };

    mockFetch.mockResolvedValue({
      json: () => Promise.resolve(mockResponse),
    } as Response);

    await expect(fetchProducts("1")).resolves.toEqual([mockResponse]);
  });

  it("should handle errors in API call", async () => {
    mockFetch.mockRejectedValue(new Error("API call error"));
    await expect(fetchProducts()).rejects.toThrow("API call error");
  });

  it("Should call saveProduct with PUT method", async () => {
    const mockProduct = {
      id: "2",
      title: "Title",
      description: "",
      image: "",
      price: 32,
    };

    mockFetch.mockResolvedValue({
      json: () => Promise.resolve(mockProduct),
    } as Response);

    await expect(saveProduct(mockProduct)).resolves.toEqual(mockProduct);
  });

  it("Should call saveProduct with POST method", async () => {
    const mockProduct = {
      id: undefined,
      title: "Title",
      description: "",
      image: "",
      price: 32,
    };

    mockFetch.mockResolvedValue({
      json: () => Promise.resolve({ ...mockProduct, id: "213123" }),
    } as Response);

    // @ts-ignore Should test send without sending the id
    await expect(saveProduct(mockProduct)).resolves.toEqual({
      ...mockProduct,
      id: "213123",
    });
  });

  it("Should call removeProduct", async () => {
    mockFetch.mockResolvedValue({
      json: () => Promise.resolve(),
    } as Response);

    await expect(removeProduct("123")).resolves.toEqual([]);
  });
});
