import Button from "components/Button";
import Card from "components/Card";
import Text from "components/Text";
import Title from "components/Title";
import { styled } from "styled-components";

export const Wrapper = styled(Card)`
  display: flex;
  padding: 24px;
  & > ${Title} {
    margin-bottom: 24px;
  }
`;

export const ListProducts = styled.div`
  display: flex;
  flex-direction: column;
  ${Text} {
    display: flex;
    margin: 8px 0;
  }
  span.price {
    margin-left: auto;
    padding-left: 16px;
  }
`;

export const Total = styled(Title)`
  font-size: 24px;
  display: flex;
  padding: 16px 0;

  border-top: 1px solid ${({ theme }) => theme.colors.dark};
  ${Text} {
    margin-left: auto;
    font-weight: 500;
  }
`;

export const Form = styled.form`
  ${Button} {
    margin-top: 24px;
  }
`;
