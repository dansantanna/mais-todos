import Card from "components/Card";
import { styled } from "styled-components";

export const Wrapper = styled(Card)`
  margin: 40px;
  max-width: 500px;
  width: auto;
  margin-left: auto;
  margin-right: auto;

  form {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    div {
      flex: 1;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    button {
      width: 100%;
      margin-top: 40px;
    }
  }
`;

export const Image = styled.img`
  vertical-align: middle;
  border-radius: 100%;
  border: 2px solid ${({ theme }) => theme.colors.main};
  width: 150px;
  height: 150px;
  align-self: center;
  object-fit: contain;
`;
