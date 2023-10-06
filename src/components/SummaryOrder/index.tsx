import { useMemo } from "react";
import { Link } from "react-router-dom";

import Button from "components/Button";
import Text from "components/Text";
import Title from "components/Title";
import formatToCurrency from "helpers/formatToCurrency";
import IProduct from "types/IProduct";
import * as S from "./SummaryOrder.styleds";

export interface SummaryOrderProps {
  items: IProduct[];
  checkoutRoute: string;
}

const SummaryOrder = ({ items, checkoutRoute }: SummaryOrderProps) => {
  const total = useMemo(
    () =>
      items.reduce((sum, product) => sum + product.price * product.quantity, 0),
    [items]
  );

  return (
    <S.Wrapper>
      <Title fontSize={21}>Detalhes do Pedido</Title>
      <S.ListProducts>
        {items.map((product) => (
          <Text key={product.id}>
            {product.quantity}x {product.title}
            <span>{formatToCurrency(product.price)}</span>
          </Text>
        ))}
      </S.ListProducts>
      <Text></Text>
      <S.Total>
        Total: <Text>{formatToCurrency(total)}</Text>
      </S.Total>
      <Link to={checkoutRoute}>
        <Button>Realizar Pagamento</Button>
      </Link>
    </S.Wrapper>
  );
};

export default SummaryOrder;
