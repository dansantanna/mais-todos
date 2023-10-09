import { HTMLAttributes } from "react";
import Lottie from "lottie-react";

import data from "assets/lotties/error.json";
import * as S from "./Error.styleds";

const ErrorComponent = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <S.Wrapper {...props}>
      <Lottie data-testid="error-lottie" animationData={data} loop />
    </S.Wrapper>
  );
};

export default ErrorComponent;
