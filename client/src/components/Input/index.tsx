import { InputHTMLAttributes, forwardRef } from "react";

import * as S from "./Input.styleds";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, required, error, ...inputProps }: InputProps, ref) => (
    <S.Wrapper>
      <S.Label htmlFor={name}>
        {label}
        {required && <span className="required-char">*</span>}
      </S.Label>
      <S.Input
        ref={ref}
        required={required}
        name={name}
        id={name}
        {...inputProps}
      />
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.Wrapper>
  )
);

export default Input;
