import IProduct from "types/IProduct";

export const fetchProducts = async (): Promise<IProduct[]> => {
  const response = await fetch(`${process.env.REACT_APP_APIURL}/products`);
  const data = await response.json();
  return data;
};
