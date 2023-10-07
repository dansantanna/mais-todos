import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  border: 2px ${({ theme }) => theme.colors.dark} solid;
  border-radius: 98px;
  padding: 8px;
  display: flex;
  max-height: 30px;
  width: 80px;
`;

export const Input = styled.input.attrs({ type: "number" })`
  width: 100%;
  border: none;
  font-size: 16px;
  outline: none;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 300;
  line-height: 1.5em;
  text-align: center;
`;

export const Button = styled.button`
  outline: none;
  background: white;
  border: none;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.dark};
  cursor: pointer;
  display: flex;
  align-items: center;

  &:disabled,
  &[disabled] {
    cursor: not-allowed;
    color: #666;
  }
`;
