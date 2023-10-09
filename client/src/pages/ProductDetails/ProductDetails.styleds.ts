import ErrorComponent from "components/Error";
import Loading from "components/Loading";
import Text from "components/Text";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  margin: 48px;
  align-items: center;
`;
export const Image = styled.img`
  max-width: 250px;
`;

export const Attributes = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 24px;
  ${Text} {
    font-size: 18px;
  }
`;

export const Actions = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 24px;
  align-items: center;
  flex-wrap: wrap;
`;

export const LoadingStyled = styled(Loading)`
  height: 100vh;
`;

export const ErrorStyled = styled(ErrorComponent)`
  margin: auto;
`;
