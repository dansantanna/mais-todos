import Lottie from "lottie-react";

import Title from "components/Title";
import data from "assets/lotties/404.json";
import * as S from "./NotFound.styleds";

const NotFound = () => {
  return (
    <S.Wrapper>
      <Lottie data-testid="error-lottie" animationData={data} loop />
      <Title>Esta página não existe</Title>
    </S.Wrapper>
  );
};

export default NotFound;
