import { fetchProducts } from ".";

// Create a typed fetch mock to avoid real API calls
const mockFetch = jest.fn() as jest.MockedFunction<typeof globalThis.fetch>;

describe("fetchProducts", () => {
  beforeEach(() => {
    // Clear the fetch mock before each test
    mockFetch.mockClear();
    globalThis.fetch = mockFetch;
  });

  it("should return a list of products", async () => {
    // Simulate an API response
    const mockResponse: any[] = [
      { id: 1, name: "Product 1" },
      { id: 2, name: "Product 2" },
    ];

    // Configure the fetch mock to return a response
    mockFetch.mockResolvedValue({
      json: () => Promise.resolve(mockResponse),
    } as Response);

    // Use expect without conditional statements and handle asynchronously
    await expect(fetchProducts()).resolves.toEqual(mockResponse);
  });

  it("should handle errors in API call", async () => {
    // Simulate an error in the API call
    mockFetch.mockRejectedValue(new Error("API call error"));

    // Use expect without conditional statements and handle asynchronously
    await expect(fetchProducts()).rejects.toThrow("API call error");
  });
});
