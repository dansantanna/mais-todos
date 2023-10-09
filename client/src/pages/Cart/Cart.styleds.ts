import { styled } from "styled-components";

export const Wrapper = styled.div`
  padding: 24px;
  display: flex;
  gap: 60px;
  justify-content: center;
  flex-wrap: wrap;
  div {
    max-width: 700px;
  }
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
