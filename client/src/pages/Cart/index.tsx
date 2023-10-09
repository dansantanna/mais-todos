import Lottie from "lottie-react";

import data from "assets/lotties/empty.json";
import useCart from "hooks/useCart";
import * as S from "./Cart.styleds";
import CartItem from "components/CartItem";
import SummaryOrder from "components/SummaryOrder";
import Title from "components/Title";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { products, removeProduct, updateQuantity } = useCart();
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      {products?.length ? (
        <>
          <div>
            {products.map((product) => (
              <CartItem
                key={product.id}
                {...product}
                onChange={(quantity) => updateQuantity(product, quantity)}
                onRemove={() => removeProduct(product)}
                onEnter={() => navigate(`/product/${product.id}`)}
              />
            ))}
          </div>
          <S.LeftSide>
            <SummaryOrder items={products} checkoutRoute="/checkout" />
          </S.LeftSide>
        </>
      ) : (
        <S.EmptyWrapper>
          <div data-testid="empty-lottie">
            <Lottie animationData={data} loop />
          </div>
          <Title>Carrinho vázio</Title>
        </S.EmptyWrapper>
      )}
    </S.Wrapper>
  );
};

export default Cart;
