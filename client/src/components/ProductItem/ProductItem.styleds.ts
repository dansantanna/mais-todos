import Text from "components/Text";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.main};
  padding: 16px 0;
  gap: 16px;
  > * {
    flex: 1;
    display: flex;
    flex-direction: column;
    max-width: fit-content;
    justify-content: center;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const Image = styled.img`
  max-width: 100px;
  max-height: 300px;
  object-fit: contain;
`;

export const Description = styled(Text)`
  display: -webkit-box;
  font-size: 16px;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Actions = styled.div`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  flex: 1;
  width: 100%;
  margin-left: auto;
  flex-wrap: wrap;
`;

export const Price = styled(Text)`
  font-weight: 600;
  font-size: 18px;
`;
