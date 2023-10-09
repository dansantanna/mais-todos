import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
import {
  fetchProducts,
  saveProduct as saveProductApi,
  removeProduct as removeProductApi,
} from "services/api";
import IProduct from "types/IProduct";

const useProducts = (id?: IProduct["id"]) => {
  const queryClient = useQueryClient();

  const saveMutation = useMutation({
    mutationFn: saveProductApi,
    mutationKey: ["products", id],
    onError: () => {
      enqueueSnackbar("Erro ao salvar produto, tente novamente", {
        variant: "error",
      });
    },
    onSuccess: (data, product) => {
      queryClient.setQueryData(["products", undefined], (oldData: any) => {
        if (product.id) {
          return oldData.map((item: IProduct) => {
            if (product.id === item.id) return data;
            else return item;
          });
        } else return [data, ...oldData];
      });

      if (product.id) {
        queryClient.setQueryData(["products", product.id], (oldData: any) => {
          return [data];
        });
      }

      enqueueSnackbar("Produto salvo com sucesso", { variant: "success" });
    },
  });

  const removeMutation = useMutation(removeProductApi, {
    onError: () => {
      enqueueSnackbar("Erro ao remover produto, tente novamente", {
        variant: "error",
      });
    },
    onSuccess: (_, id) => {
      queryClient.setQueryData(["products", undefined], (oldData: any) =>
        oldData.filter((item: IProduct) => item.id !== id)
      );
      enqueueSnackbar("Produto removido sucesso", { variant: "success" });
    },
  });

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products", id],
    queryFn: () => fetchProducts(id),
  });

  return {
    products: products ?? [],
    isLoading,
    isError,
    saveMutation,
    removeMutation,
  };
};

export default useProducts;
