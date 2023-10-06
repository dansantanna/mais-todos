import { useNavigate } from "react-router-dom";

import useProducts from "hooks/useProducts";
import * as S from "./Products.styleds";
import Product from "components/Product";
import Title from "components/Title";

const Products = () => {
  const navigate = useNavigate();
  const { products, isLoading, isError, onChangeQuantity } = useProducts();

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
          key={product.id}
          {...product}
          onAdd={() => {}}
          onChange={(quantity) => onChangeQuantity(product.id, quantity)}
          onEnter={() => navigate(`/product/${product.id}`)}
        />
      ))}
    </S.Wrapper>
  );
};

export default Products;
