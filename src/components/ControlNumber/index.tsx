import * as S from "./ControlNumber.styleds";

export interface ControlNumberProps {
  min?: number;
  value?: number;
  onChange: (value: number) => void;
}

const ControlNumber = ({
  value = 1,
  onChange,
  min = 1,
}: ControlNumberProps) => {
  return (
    <S.Wrapper>
      <S.Button disabled={value === min} onClick={() => onChange(value - 1)}>
        -
      </S.Button>
      <S.Input
        value={value}
        onChange={(evt) => {
          const value = Number.parseInt(evt.target.value);
          if (value >= min) {
            onChange(value);
          }
        }}
      />
      <S.Button onClick={() => onChange(value + 1)}>+</S.Button>
    </S.Wrapper>
  );
};

export default ControlNumber;
