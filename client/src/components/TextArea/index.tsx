import { InputHTMLAttributes, forwardRef } from "react";

import * as S from "./TextArea.styleds";

export interface TextAreaProps
  extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
  error?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, name, required, error, ...textAreaProps }, ref) => (
    <S.Wrapper>
      <S.Label htmlFor={name}>
        {label}
        {required && <span className="required-char">*</span>}
      </S.Label>
      <S.TextArea
        required={required}
        name={name}
        id={name}
        ref={ref}
        rows={3}
        {...textAreaProps}
      />
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.Wrapper>
  )
);

export default TextArea;
