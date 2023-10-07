import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { fetchProducts } from "services/fakeStore";
import IProduct from "types/IProduct";

const useProducts = (id?: IProduct["id"]) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", id],
    queryFn: () => fetchProducts(id),
  });

  useEffect(() => {
    setProducts(data ?? []);
  }, [data]);

  return { products, isLoading, isError };
};

export default useProducts;
