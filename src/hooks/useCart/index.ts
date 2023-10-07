import IProduct from "types/IProduct";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface CartState {
  products: IProduct[];
  addProduct: (produt: IProduct) => void;
  updateQuantity: (product: IProduct, quantity: IProduct["quantity"]) => void;
  removeProduct: (product: IProduct) => void;
}

const useCart = create<CartState>()(
  devtools(
    persist(
      (set, get) => ({
        products: [],
        addProduct: (product: IProduct) => {
          set((state: CartState) => ({
            ...state,
            products: [product, ...state.products],
          }));
        },
        updateQuantity: (product, quantity) => {
          const products = [...get().products];
          const indexProduct = products.findIndex(
            (item) => item.id === product.id
          );
          if (indexProduct > -1) {
            products[indexProduct].quantity = quantity;
            set((state) => ({ ...state, products }));
          }
        },
        removeProduct: (product) => {
          set((state) => ({
            ...state,
            products: state.products.filter((item) => product.id !== item.id),
          }));
        },
      }),
      { name: "cart-storage" }
    )
  )
);

export default useCart;
