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

export const saveProduct = async (product: IProduct) => {
  const response = await fetch(
    `${process.env.REACT_APP_APIURL}/products/${product.id ?? ""}`,
    {
      method: product.id ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    }
  );

  return await response.json();
};

export const removeProduct = async (id: string) => {
  await fetch(`${process.env.REACT_APP_APIURL}/products/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  return [];
};
