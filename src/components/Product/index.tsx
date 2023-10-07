import Button from "components/Button";
import Title from "components/Title";
import formatToCurrency from "helpers/formatToCurrency";
import Text from "components/Text";
import * as S from "./Product.styleds";
import IProduct from "types/IProduct";

export interface ProductProps extends IProduct {
  onEnter: () => void;
  onAdd: () => void;
  onRemove: () => void;
  isAdded: boolean;
}

const Product = ({
  title,
  description,
  price,
  image,
  onEnter,
  isAdded,
  onAdd,
  onRemove,
}: ProductProps) => {
  return (
    <S.CardStyled onClick={onEnter}>
      <Title fontSize={22}>{title}</Title>
      <S.Price>{formatToCurrency(price)}</S.Price>
      <S.Image src={image} alt={title} />
      <S.Description>
        <Text>{description}</Text>
      </S.Description>
      {!isAdded ? (
        <Button
          onClick={(evt) => {
            evt.stopPropagation();
            onAdd();
          }}
        >
          Adicionar
        </Button>
      ) : (
        <Button
          variant="secondary"
          onClick={(evt) => {
            evt.stopPropagation();
            onRemove();
          }}
        >
          Remover
        </Button>
      )}
    </S.CardStyled>
  );
};

export default Product;
