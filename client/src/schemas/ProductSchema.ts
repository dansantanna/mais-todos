import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const ProductSchema = yup
  .object({
    id: yup.string(),
    title: yup.string().required("Campo obrigatório"),
    price: yup
      .number()
      .typeError("Campo obrigatório")
      .required("Campo obrigatório"),
    image: yup.string().url("URL inválida").required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    category: yup.string(),
  })
  .required();

export default yupResolver(ProductSchema);
