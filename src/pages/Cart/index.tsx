import useCart from "hooks/useCart";
import * as S from "./Cart.styleds";
import CartItem from "components/CartItem";
import SummaryOrder from "components/SummaryOrder";

const Cart = () => {
  const { products, removeProduct, updateQuantity } = useCart();

  return (
    <S.Wrapper>
      <div>
        {products.map((product) => (
          <CartItem
            key={product.id}
            {...product}
            onChange={(quantity) => updateQuantity(product, quantity)}
            onRemove={() => removeProduct(product)}
          />
        ))}
      </div>
      <div>
        <SummaryOrder items={products} checkoutRoute="/checkout" />
      </div>
    </S.Wrapper>
  );
};

export default Cart;
