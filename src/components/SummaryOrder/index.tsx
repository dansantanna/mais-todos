import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import Text from "components/Text";
import Title from "components/Title";
import formatToCurrency from "helpers/formatToCurrency";
import IProduct from "types/IProduct";
import * as S from "./SummaryOrder.styleds";
import usePayment from "hooks/usePayment";
import FormPayment from "./FormPayment";

export interface SummaryOrderProps {
  items: IProduct[];
  checkoutRoute: string;
  noButton?: boolean;
}

const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY ?? ""
);

const SummaryOrder = ({ items }: SummaryOrderProps) => {
  const { clientSecret } = usePayment();

  const total = items.reduce(
    (sum, product) => sum + product.price * (product.quantity ?? 1),
    0
  );

  return (
    <S.Wrapper>
      <Title fontSize={21}>Informações de Pagamento</Title>
      <S.ListProducts>
        {items.map((product) => (
          <Text key={product.id}>
            {product.quantity ?? 1}x {product.title}
            <span className="price">{formatToCurrency(product.price)}</span>
          </Text>
        ))}
      </S.ListProducts>
      <Text></Text>
      <S.Total>
        Total: <Text>{formatToCurrency(total)}</Text>
      </S.Total>
      {clientSecret && (
        <Elements
          stripe={stripePromise}
          options={{
            clientSecret,
            locale: "pt-BR",
            appearance: {
              labels: "floating",
            },
          }}
        >
          <FormPayment />
        </Elements>
      )}
    </S.Wrapper>
  );
};

export default SummaryOrder;
