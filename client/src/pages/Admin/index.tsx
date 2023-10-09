import { Link, useNavigate } from "react-router-dom";

import Button from "components/Button";
import useProducts from "hooks/useProducts";
import CartItem from "components/ProductItem";
import Title from "components/Title";
import * as S from "./Admin.styleds";
import Text from "components/Text";

const Admin = () => {
  const {
    isLoading,
    isError,
    products,
    removeMutation: { mutate },
  } = useProducts();
  const navigate = useNavigate();

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
      <div>
        <S.WrapperHeader>
          <Title>Produtos</Title>
          <Link to="/admin/product">
            <Text>Novo Produto</Text>
          </Link>
        </S.WrapperHeader>
        {products.map((product) => (
          <CartItem
            key={product.id}
            {...product}
            onEnter={() => navigate(`/admin/product/${product.id}`)}
          >
            <Button onClick={() => navigate(`/admin/product/${product.id}`)}>
              Editar
            </Button>
            <Button variant="secondary" onClick={() => mutate(product.id)}>
              Deletar
            </Button>
          </CartItem>
        ))}
      </div>
    </S.Wrapper>
  );
};

export default Admin;
