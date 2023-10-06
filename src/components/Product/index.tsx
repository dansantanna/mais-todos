import Button from "components/Button";
import Title from "components/Title";
import formatToCurrency from "helpers/formatToCurrency";
import Text from "components/Text";
import ControlNumber from "components/ControlNumber";
import * as S from "./Product.styleds";
import IProduct from "types/IProduct";

export interface ProductProps extends IProduct {
  quantity: number;
  onEnter: () => void;
  onChange: (quantity: number) => void;
  onAdd: () => void;
}

const Product = ({
  title,
  description,
  quantity,
  price,
  image,
  onChange,
  onAdd,
  onEnter,
}: ProductProps) => {
  return (
    <S.CardStyled onClick={onEnter}>
      <S.Line>
        <Title fontSize={22}>{title}</Title>
        <S.Price>{formatToCurrency(price)}</S.Price>
      </S.Line>
      <S.Image src={image} alt={title} />
      <S.Description>
        <Text>{description}</Text>
      </S.Description>
      <S.Line onClick={(evt) => evt.stopPropagation()}>
        <ControlNumber value={quantity} onChange={(evt) => onChange(evt)} />
        <Button onClick={onAdd}>Add</Button>
      </S.Line>
    </S.CardStyled>
  );
};

export default Product;
