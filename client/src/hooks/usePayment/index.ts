import { useCallback, useEffect, useState } from "react";
import Stripe from "stripe";
import useCart from "hooks/useCart";

const usePayment = () => {
  const [clientSecret, setClientSecret] = useState("");
  const { products } = useCart();

  const getClientSecret = useCallback(async () => {
    const stripeSecretKey = process.env.REACT_APP_STRIPE_SECRET_KEY;

    if (!products.length || !stripeSecretKey) return;

    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: "2023-08-16",
    });

    const total = products.reduce(
      (sum, product) => sum + product.price * (product.quantity ?? 1),
      0
    );

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.floor(total * 100),
      currency: "brl",
      automatic_payment_methods: { enabled: true },
    });

    if (paymentIntent.client_secret) {
      setClientSecret(paymentIntent.client_secret);
    }
  }, [products]);

  useEffect(() => {
    getClientSecret();
  }, [getClientSecret]);

  return { clientSecret };
};
export default usePayment;
