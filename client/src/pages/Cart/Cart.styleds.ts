import { styled } from "styled-components";

export const Wrapper = styled.div`
  padding: 24px;
  display: flex;
  gap: 48px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const EmptyWrapper = styled.div`
  text-align: center;
  div {
    height: calc(100vh - 200px);
  }
`;

export const LeftSide = styled.div`
  position: sticky;
  top: 120px;
  align-self: flex-start;
`;
