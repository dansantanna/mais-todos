import Button from "components/Button";
import ControlNumber from "components/ControlNumber";
import Title from "components/Title";
import formatToCurrency from "helpers/formatToCurrency";
import IProduct from "types/IProduct";
import * as S from "./CartItem.styleds";

export interface CartItemProps extends IProduct {
  onChange: (quantity: number) => void;
  onRemove: () => void;
  onEnter: () => void;
}

const CartItem = ({
  title,
  image,
  description,
  price,
  quantity,
  onChange,
  onRemove,
  onEnter,
}: CartItemProps) => {
  return (
    <S.Wrapper onClick={onEnter}>
      <S.Image alt={title} src={image} />
      <div>
        <Title fontSize={18}>{title}</Title>
        <S.Description>{description}</S.Description>
      </div>
      <Title fontSize={18}>{formatToCurrency(price)}</Title>
      <S.Actions onClick={(evt) => evt.stopPropagation()}>
        <ControlNumber value={quantity} onChange={(evt) => onChange(evt)} />
        <Button variant="secondary" onClick={onRemove}>
          Remover
        </Button>
      </S.Actions>
    </S.Wrapper>
  );
};

export default CartItem;
