import { Route, Routes } from "react-router-dom";

import Products from "pages/Products";
import ProductDetails from "pages/ProductDetails";
import Cart from "pages/Cart";
import Checkout from "pages/Checkout";
import NotFound from "pages/NotFound";

const RoutesApplication = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesApplication;
