import { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import Button from "components/Button";
import * as S from "./SummaryOrder.styleds";
import { enqueueSnackbar } from "notistack";

const FormPayment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);
    enqueueSnackbar("Efetuando a compra", { variant: "info" });

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/successful-payment`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      enqueueSnackbar(error.message, { variant: "error" });
    } else {
      enqueueSnackbar("Realizando pagamento...", { variant: "error" });
    }

    setIsLoading(false);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <PaymentElement />
      {!isLoading && <Button type="submit">Efetuar compra</Button>}
      {isLoading && (
        <Button disabled type="submit">
          Efetuando...
        </Button>
      )}
    </S.Form>
  );
};

export default FormPayment;
