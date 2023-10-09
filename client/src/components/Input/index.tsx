import { InputHTMLAttributes } from "react";

import * as S from "./Input.styleds";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input = ({ label, name, required, ...inputProps }: InputProps) => {
  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>
        {label}
        {required && <span className="required-char">*</span>}
      </S.Label>
      <S.Input required={required} name={name} id={name} {...inputProps} />
    </S.Wrapper>
  );
};

export default Input;
