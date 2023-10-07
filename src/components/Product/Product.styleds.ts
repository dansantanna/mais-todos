import Button from "components/Button";
import Card from "components/Card";
import Title from "components/Title";
import { styled } from "styled-components";

export const CardStyled = styled(Card)`
  max-width: 300px;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px,
      rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
  }
  ${Button} {
    width: 100%;
  }
`;

export const Line = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: flex-end;
  flex-wrap: wrap;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 300px;
  object-fit: contain;
  margin: 16px 0;
  height: 100%;
  align-self: center;
`;

export const Price = styled(Title).attrs({ fontSize: 18 })`
  color: ${({ theme }) => theme.colors.text};
  margin: 16px 0;
`;

export const Description = styled.div`
  margin: 16px 0;
  display: -webkit-box;
  max-width: 250px;
  font-size: 20dp;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: auto;
`;
