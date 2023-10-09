import Text from "components/Text";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  .required-char {
    color: ${({ theme }) => theme.colors.error};
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5em;
  margin: 0;
`;

export const TextArea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.colors.main};
  outline: none;
  font-weight: 400;
  border-radius: 6px;
  padding: 16px;
  font-size: 16px;
  resize: none;
`;

export const ErrorMessage = styled(Text)`
  color: ${({ theme }) => theme.colors.error};
  font-weight: 500;
`;
