import styled, { css } from "styled-components";

interface ButtonProps {
  variant?: "primary" | "secondary";
}

const isPrimary = css`
  background-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.white};
  &:hover {
    background-color: ${({ theme }) => theme.colors.dark};
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
      rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  }
`;

const isSecondary = css`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.text};
  &:hover {
    opacity: 0.9;
  }
`;

const Button = styled.button<ButtonProps>`
  font-size: 16px;
  font-weight: 400;
  width: fit-content;
  line-height: 1em;
  border-radius: 98px;
  padding: 16px 55px 16px 55px;
  cursor: pointer;
  border: none;
  text-transform: capitalize;

  ${({ variant }) => variant === "primary" && isPrimary}
  ${({ variant }) => variant === "secondary" && isSecondary}
`;

Button.defaultProps = {
  variant: "primary",
};

export default Button;
