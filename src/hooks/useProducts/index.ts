import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "services/fakeStore";
import IProduct from "types/IProduct";

const useProducts = (id?: IProduct["id"]) => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products", id],
    queryFn: () => fetchProducts(id),
  });

  return { products: products ?? [], isLoading, isError };
};

export default useProducts;
