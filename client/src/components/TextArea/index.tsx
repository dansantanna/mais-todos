import { InputHTMLAttributes } from "react";

import * as S from "./TextArea.styleds";

export interface TextAreaProps
  extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const TextArea = ({
  label,
  name,
  required,
  ...textAreaProps
}: TextAreaProps) => {
  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>
        {label}
        {required && <span className="required-char">*</span>}
      </S.Label>
      <S.TextArea
        required={required}
        name={name}
        id={name}
        {...textAreaProps}
      />
    </S.Wrapper>
  );
};

TextArea.defaultProps = { rows: 3 };

export default TextArea;
