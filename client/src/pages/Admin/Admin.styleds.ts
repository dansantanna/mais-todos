import ErrorComponent from "components/Error";
import Loading from "components/Loading";
import Text from "components/Text";
import { styled } from "styled-components";

export const EmptyWrapper = styled.div`
  text-align: center;
  div {
    height: calc(100vh - 200px);
  }
`;

export const Wrapper = styled.div`
  padding: 24px;
  display: flex;
  gap: 48px;
  justify-content: center;
  flex-wrap: wrap;
  div {
    max-width: 900px;
  }
`;

export const LoadingStyled = styled(Loading)`
  margin: auto;
  height: auto;
`;

export const ErrorStyled = styled(ErrorComponent)`
  margin: auto;
`;

export const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
  flex-wrap: wrap;

  ${Text} {
    font-weight: 700;
    font-size: 20px;
  }
`;
