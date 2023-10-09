import IProduct from "types/IProduct";

export const fetchProducts = async (
  id?: IProduct["id"]
): Promise<IProduct[]> => {
  const response = await fetch(
    `${process.env.REACT_APP_APIURL}/products/${id ?? ""}`
  );
  const data = await response.json();
  if (Array.isArray(data)) return data;
  else return [data];
};
