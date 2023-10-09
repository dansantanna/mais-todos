import { enqueueSnackbar } from "notistack";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import Button from "components/Button";
import Input from "components/Input";
import TextArea from "components/TextArea";
import { useNavigate, useParams } from "react-router-dom";
import ProductSchema from "schemas/ProductSchema";
import useProducts from "hooks/useProducts";
import * as S from "./SaveProduct.styleds";

const SaveProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    products,
    saveMutation: { isLoading, mutate: saveProduct, data: productSaved },
  } = useProducts(id);

  const [product] = products;
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: ProductSchema,
    mode: "onBlur",
  });

  useEffect(() => {
    if (id && product) {
      reset(product);
    }
  }, [product, id, reset]);

  const onSubmit = (data: any) => {
    enqueueSnackbar("Salvando os dados");
    saveProduct(data);
  };

  useEffect(() => {
    if (productSaved) {
      navigate(`/product/${productSaved.id}`);
    }
  }, [productSaved, navigate]);

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.Image src={watch("image")} />
        <div>
          <Input
            required
            error={errors.image?.message}
            label="Imagem (URL)"
            type="url"
            {...register("image")}
          />
          <Input
            error={errors.title?.message}
            required
            label="Título"
            {...register("title")}
          />
          <Input
            type="number"
            label="Preço"
            required
            error={errors.price?.message}
            step=".01"
            {...register("price")}
          />
          <Input
            error={errors.category?.message}
            label="Nome da categoria"
            {...register("category")}
          />

          <TextArea
            required
            error={errors.description?.message}
            label="Descrição"
            {...register("description")}
          />
          <Button disabled={isLoading} type="submit">
            {id ? "Salvar" : "Cadastrar"}
          </Button>
        </div>
      </form>
    </S.Wrapper>
  );
};

export default SaveProduct;
