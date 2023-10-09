import Button from "components/Button";
import ControlNumber from "components/ControlNumber";
import Title from "components/Title";
import formatToCurrency from "helpers/formatToCurrency";
import IProduct from "types/IProduct";
import * as S from "./ProductItem.styleds";
import { ReactNode } from "react";

export interface ProductItemProps extends IProduct {
  onChange?: (quantity: number) => void;
  onRemove?: () => void;
  onEnter: () => void;
  children?: ReactNode;
}

const ProductItem = ({
  title,
  image,
  description,
  price,
  quantity,
  onChange,
  onRemove,
  onEnter,
  children,
}: ProductItemProps) => {
  return (
    <S.Wrapper onClick={onEnter}>
      <S.Image alt={title} src={image} />
      <div>
        <Title fontSize={18}>{title}</Title>
        <S.Price>{formatToCurrency(price)}</S.Price>
        <S.Description>{description}</S.Description>
      </div>
      <S.Actions onClick={(evt) => evt.stopPropagation()}>
        {children ?? (
          <>
            <ControlNumber
              value={quantity}
              onChange={(evt) => onChange?.(evt)}
            />
            <Button variant="secondary" onClick={onRemove}>
              Remover
            </Button>
          </>
        )}
      </S.Actions>
    </S.Wrapper>
  );
};

export default ProductItem;
