import { fetchProducts } from ".";

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
});
