import { useNavigate } from "react-router-dom";

import useProducts from "hooks/useProducts";
import * as S from "./Products.styleds";
import Product from "components/Product";
import Title from "components/Title";
import useCart from "hooks/useCart";
import IProduct from "types/IProduct";

const Products = () => {
  const navigate = useNavigate();
  const { products, isLoading, isError } = useProducts();
  const { addProduct, products: cartItems, removeProduct } = useCart();

  const isAdded = (id: IProduct["id"]): boolean => {
    return Boolean(cartItems.find((item) => item.id === id));
  };

  if (isError) {
    return (
      <S.Wrapper>
        <div>
          <S.ErrorStyled />
          <Title>Houve um erro na conexão com o servidor</Title>
        </div>
      </S.Wrapper>
    );
  }

  if (isLoading) {
    return (
      <S.Wrapper>
        <S.LoadingStyled />
      </S.Wrapper>
    );
  }

  return (
    <S.Wrapper>
      {products?.map((product) => (
        <Product
          isAdded={isAdded(product.id)}
          key={product.id}
          {...product}
          onEnter={() => navigate(`/product/${product.id}`)}
          onAdd={() => addProduct(product)}
          onRemove={() => removeProduct(product)}
        />
      ))}
    </S.Wrapper>
  );
};

export default Products;
