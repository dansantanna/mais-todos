import Lottie from "lottie-react";

import data from "assets/lotties/successful-payment.json";
import * as S from "./SuccessfulPayment.styleds";
import Title from "components/Title";
import { useEffect } from "react";
import useCart from "hooks/useCart";

const SuccessfulPayment = () => {
  const { clearProducts } = useCart();

  useEffect(() => {
    clearProducts();
  }, [clearProducts]);

  return (
    <S.Wrapper>
      <Lottie
        data-testid="successful-payment-lottie"
        animationData={data}
        loop
      />
      <Title fontSize={24}>Pagamento realizado com sucesso</Title>
    </S.Wrapper>
  );
};

export default SuccessfulPayment;
