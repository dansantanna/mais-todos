import Error from "components/Error";
import Loading from "components/Loading";
import Title from "components/Title";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  min-height: calc(100vh - 118px);
  padding-top: 24px;
  flex-wrap: wrap;
  gap: 24px;
  align-items: stretch;
  justify-content: center;
  & > ${Title} {
    text-align: center;
  }
`;

export const LoadingStyled = styled(Loading)`
  margin: auto;
  height: auto;
`;

export const ErrorStyled = styled(Error)`
  margin: auto;
`;
