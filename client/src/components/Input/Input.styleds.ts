import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5em;
  margin: 0;
`;

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.main};
  outline: none;
  font-weight: 400;
  border-radius: 6px;
  padding: 0 16px;
  font-size: 16px;
  min-height: 50px;
`;
