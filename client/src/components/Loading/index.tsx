import { HTMLAttributes } from "react";
import Lottie from "lottie-react";

import data from "assets/lotties/loading.json";
import * as S from "./Loading.styleds";

const Loading = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <S.Wrapper {...props}>
      <Lottie data-testid="loading-lottie" animationData={data} loop />
    </S.Wrapper>
  );
};

export default Loading;
