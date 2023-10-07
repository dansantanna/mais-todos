import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import useCart from ".";

describe("useCart", () => {
  it("should add a product to the cart", () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.addProduct({
        id: "1",
        title: "Product 1",
        quantity: 1,
        description: "",
        image: "",
        price: 1,
      });
    });

    expect(result.current.products).toHaveLength(1);
    expect(result.current.products[0].title).toBe("Product 1");
  });

  it("should update the quantity of a product in the cart", () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.addProduct({
        id: "1",
        title: "Product 1",
        quantity: 1,
        description: "",
        image: "",
        price: 1,
      });
    });

    act(() => {
      result.current.updateQuantity(
        {
          id: "1",
          title: "Product 1",
          quantity: 1,
          description: "",
          image: "",
          price: 1,
        },
        2
      );
    });

    expect(result.current.products[0].quantity).toBe(2);
  });

  it("should not update the quantity of a product when it is not exist", () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.addProduct({
        id: "1",
        title: "Product 1",
        quantity: 1,
        description: "",
        image: "",
        price: 1,
      });
    });

    act(() => {
      result.current.updateQuantity(
        {
          id: "100",
          title: "Product 1",
          quantity: 1,
          description: "",
          image: "",
          price: 1,
        },
        2
      );
    });

    expect(result.current.products[0].quantity).toBe(1);
  });

  it("should remove a product from the cart", () => {
    const { result } = renderHook(() => useCart());

    act(() => {
      result.current.addProduct({
        id: "1",
        title: "Product 1",
        quantity: 1,
        description: "",
        image: "",
        price: 1,
      });
      result.current.addProduct({
        id: "2",
        title: "Product 2",
        quantity: 1,
        description: "",
        image: "",
        price: 1,
      });
    });

    act(() => {
      result.current.removeProduct({
        id: "1",
        title: "Product 1",
        quantity: 1,
        description: "",
        image: "",
        price: 1,
      });
    });

    expect(result.current.products).toHaveLength(1);
    expect(result.current.products[0].id).toBe("2");
  });
});
