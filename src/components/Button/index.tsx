import styled from "styled-components";

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.main};
  font-size: 16px;
  font-weight: 400;
  width: fit-content;
  line-height: 1em;
  color: #ffffff;
  border-radius: 98px;
  padding: 16px 55px 16px 55px;
  cursor: pointer;
  border: none;
  text-transform: capitalize;
  &:hover {
    background-color: ${({ theme }) => theme.colors.dark};
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
      rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  }
`;

export default Button;
