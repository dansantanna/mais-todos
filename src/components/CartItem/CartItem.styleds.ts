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
`;

export const Image = styled.img`
  max-width: 100px;
  max-height: 300px;
  object-fit: contain;
`;

export const Description = styled(Text)`
  margin: 16px 0;
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
  gap: 16px;
`;
