import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { fetchProducts } from "services/fakeStore";
import IProduct from "types/IProduct";

const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProducts(),
  });

  useEffect(() => {
    setProducts(data ?? []);
  }, [data]);

  const onChangeQuantity = (
    id: IProduct["id"],
    quantity: IProduct["quantity"]
  ) => {
    const items = [...products];
    const indexProduct = items.findIndex((product) => product.id === id);
    if (indexProduct > -1) {
      items[indexProduct].quantity = quantity;
      setProducts(items);
    }
  };

  return { products, isLoading, onChangeQuantity, isError };
};

export default useProducts;
