import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import useProducts from "hooks/useProducts";
import * as S from "./ProductDetails.styleds";
import Title from "components/Title";
import Text from "components/Text";
import ControlNumber from "components/ControlNumber";
import Button from "components/Button";
import useCart from "hooks/useCart";
import IProduct from "types/IProduct";

interface IProductState extends IProduct {
  isAdded?: boolean;
  cartQuantity?: number;
  quantity: number;
}

const ProductDetails = () => {
  const [product, setProduct] = useState<IProductState>();
  const { id } = useParams();
  const { products, isLoading, isError } = useProducts(id);
  const {
    addProduct,
    removeProduct,
    updateQuantity,
    products: cartItems,
  } = useCart();

  useEffect(() => {
    if (products[0]) {
      const cartItem = cartItems.find((item) => item.id === products[0].id);
      setProduct({
        ...products[0],
        quantity: cartItem?.quantity ?? 1,
        cartQuantity: cartItem?.quantity ?? 1,
        isAdded: !!cartItem,
      });
    }
  }, [products, cartItems]);

  if (isLoading)
    return (
      <S.Wrapper>
        <S.LoadingStyled />
      </S.Wrapper>
    );
  if (isError || !product)
    return (
      <S.Wrapper>
        <div>
          <S.ErrorStyled />
          <Title>Houve um erro na conexão com o servidor</Title>
        </div>
      </S.Wrapper>
    );

  return (
    <S.Wrapper>
      <S.Image alt={product.title} src={product.image} />
      <S.Attributes>
        <Title fontSize={24}>{product.title}</Title>
        <Text>{product.description}</Text>
        <Text>
          Categoria: <b>{product.category}</b>
        </Text>
        <Text>
          Avaliação: <b>{product.rating?.rate}</b> estrelas
        </Text>
        <Text>
          Avaliadores: <b>{product.rating?.count}</b> usuários
        </Text>
        <S.Actions>
          <ControlNumber
            min={0}
            value={product.quantity}
            onChange={(quantity) => setProduct({ ...product, quantity })}
          />
          {!product.isAdded && (
            <Button onClick={() => addProduct(product)}>Adicionar</Button>
          )}
          {product.isAdded && product.quantity === product.cartQuantity && (
            <Button disabled>Adicionado</Button>
          )}
          {product.isAdded &&
            product.quantity !== product.cartQuantity &&
            product.quantity > 0 && (
              <Button onClick={() => updateQuantity(product, product.quantity)}>
                Atualizar
              </Button>
            )}
          {product.isAdded && product.quantity === 0 && (
            <Button variant="secondary" onClick={() => removeProduct(product)}>
              Remover
            </Button>
          )}
        </S.Actions>
      </S.Attributes>
    </S.Wrapper>
  );
};

export default ProductDetails;
